import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import withMaster from '../components/hocs/withMaster';
import { func, object } from 'prop-types';
import { connect } from 'react-redux';
import { getPost } from '../redux/posts/postsActions';
import Post from '../components/Post';
import '../styles/pages/post-detail-page.scss';

const PostDetailPage = ({ getPost, postDetail }) => {
  const { id: postId } = useParams();

  useEffect(() => {
    postId && getPost(postId);
  }, [getPost, postId]);

  const { title, id, userId, body } = postDetail;

  return (
    <div className="post-detail-container">
      <Post title={title} id={id} userId={userId} body={body} />
    </div>
  );
};

PostDetailPage.propTypes = {
  getPost: func.isRequired,
  postDetail: object.isRequired,
};

const mapState = ({ posts }) => ({
  postDetail: posts.postDetail,
});

const mapDispatch = {
  getPost,
};

export default connect(mapState, mapDispatch)(withMaster(PostDetailPage));
