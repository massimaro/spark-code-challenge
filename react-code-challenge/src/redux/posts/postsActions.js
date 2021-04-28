import * as types from './postsTypes';
import axios from 'axios';

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
    const url = 'https://jsonplaceholder.typicode.com/posts';
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
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
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
