import * as types from './postsTypes';
import axios from 'axios';
import apiRoutes from '../../constants/apiRoutes';

const getPostsAction = () => ({
  type: types.GET_POSTS.ACTION,
});
const getPostsSuccess = posts => ({
  type: types.GET_POSTS.SUCCESS,
  posts,
});
const getPostsFailure = () => ({
  type: types.GET_POSTS.FAILURE,
});

export const getPosts = () => async dispatch => {
  try {
    dispatch(getPostsAction);
    const url = apiRoutes.getPosts;
    axios
      .get(url)
      .then(({ data }) => {
        dispatch(getPostsSuccess(data));
      })
      .catch(({ message }) => {
        dispatch(getPostsFailure(message));
      });
  } catch ({ message }) {
    dispatch(getPostsFailure(message));
  }
};

const getPostAction = () => ({
  type: types.GET_POST.ACTION,
});
const getPostSuccess = post => ({
  type: types.GET_POST.SUCCESS,
  post,
});
const getPostFailure = () => ({
  type: types.GET_POST.FAILURE,
});

export const getPost = postId => async dispatch => {
  try {
    dispatch(getPostAction);
    const url = apiRoutes.getPost.replace(':id', postId);
    axios
      .get(url)
      .then(({ data }) => {
        dispatch(getPostSuccess(data));
      })
      .catch(({ message }) => {
        dispatch(getPostFailure(message));
      });
  } catch ({ message }) {
    dispatch(getPostFailure(message));
  }
};

const getCommentsAction = () => ({
  type: types.GET_COMMENTS.ACTION,
});
const getCommentsSuccess = comments => ({
  type: types.GET_COMMENTS.SUCCESS,
  comments,
});
const getCommentsFailure = () => ({
  type: types.GET_COMMENTS.FAILURE,
});

export const getComments = postId => async dispatch => {
  try {
    dispatch(getCommentsAction);
    const url = apiRoutes.getComments.replace(':id', postId);
    axios
      .get(url)
      .then(({ data }) => {
        dispatch(getCommentsSuccess(data));
      })
      .catch(({ message }) => {
        dispatch(getCommentsFailure(message));
      });
  } catch ({ message }) {
    dispatch(getCommentsFailure(message));
  }
};

// Fake add new comment, storing directly on redux. In a real world, we would call an api endpoint with a post method, and then get the new comments collection and store that in redux to have it properly synced.
const addCommentSuccess = newComment => ({
  type: types.ADD_COMMENT,
  newComment,
});
export const addComment = newComment => async dispatch => {
  dispatch(addCommentSuccess(newComment));
};
