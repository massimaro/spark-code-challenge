import React, { useEffect } from 'react';
import { func } from 'prop-types';
import withMaster from '../components/hocs/withMaster';
import { getPosts } from '../redux/posts/postsActions';
import { connect } from 'react-redux';
import Post from '../components/Post';
import '../styles/pages/posts-page.scss';

const PostsPage = ({ getPosts, posts }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <div className="posts-page-container">
      <h1 className="posts-page-title">Main Feed</h1>
      <div className="posts-container">
        {/* I could get the whole post and use spread operator since props have the same name, but this way I make sure that if something changes, I can update it here without changing the post component */}
        {posts.map(({ title, id, body, userId }) => (
          <Post key={id} title={title} id={id} body={body} userId={userId} clickable />
        ))}
      </div>
    </div>
  );
};

PostsPage.propTypes = {
  getPosts: func.isRequired,
};

const mapState = ({ posts }) => ({
  posts: posts.posts,
});

const mapDispatch = {
  getPosts,
};

export default connect(mapState, mapDispatch)(withMaster(PostsPage));
