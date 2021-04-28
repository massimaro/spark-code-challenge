import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import withMaster from '../components/hocs/withMaster';
import { withRouter } from 'react-router-dom';
import routesPaths from '../constants/routesPaths';
import { array, func, object } from 'prop-types';
import { connect } from 'react-redux';
import { getPost, getComments, addComment } from '../redux/posts/postsActions';
import Post from '../components/Post';
import '../styles/pages/post-detail-page.scss';

const PostDetailPage = ({ getPost, getComments, addComment, postDetail, postDetailComments, history: { push } }) => {
  const { id: postId } = useParams();

  useEffect(() => {
    postId && getPost(postId);
  }, [getPost, postId]);

  useEffect(() => {
    if (!postDetail || Object.keys(postDetail).length === 0) return;
    const { id: postId } = postDetail;
    getComments(postId);
  }, [getComments, postDetail]);

  const addCommentHandler = newComment => {
    addComment({
      name: 'My Name',
      email: 'myemail@gmail.com',
      body: newComment,
      id: `my-comment-${postDetailComments.length}`,
    });
  };

  const { title, id, userId, body } = postDetail;

  return (
    <div className="post-detail-container">
      <div className="go-home">
        <h3
          onClick={() => {
            push(routesPaths.home);
          }}
        >
          {'<'} Back
        </h3>
      </div>
      <Post
        title={title}
        id={id}
        userId={userId}
        body={body}
        comments={postDetailComments}
        addCommentHandler={addCommentHandler}
        isDetail
      />
    </div>
  );
};

PostDetailPage.propTypes = {
  getPost: func.isRequired,
  getComments: func.isRequired,
  addComment: func.isRequired,
  postDetail: object.isRequired,
  postDetailComments: array,
  history: object.isRequired,
};

const mapState = ({ posts }) => ({
  postDetail: posts.postDetail,
  postDetailComments: posts.postDetailComments,
});

const mapDispatch = {
  getPost,
  getComments,
  addComment,
};

export default connect(mapState, mapDispatch)(withMaster(withRouter(PostDetailPage)));
