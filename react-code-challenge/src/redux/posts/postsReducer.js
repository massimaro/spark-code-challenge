import * as types from './postsTypes';
import { produce } from 'immer';
import createReducer from '../utils/createReducer';

const initialState = {
  posts: [],
  postDetail: {},
};

const actionHandlers = {
  [types.GET_POSTS.REQUEST]: produce(draft => {
    draft.posts = [];
    draft.postDetail = {};
  }),
  [types.GET_POSTS.SUCCESS]: produce((draft, { posts }) => {
    draft.posts = posts;
    draft.postDetail = {};
  }),
  [types.GET_POSTS.FAILURE]: produce(draft => {
    draft.posts = [];
    draft.postDetail = {};
  }),
  [types.GET_POST.REQUEST]: produce(draft => {
    draft.posts = [];
    draft.postDetail = {};
  }),
  [types.GET_POST.SUCCESS]: produce((draft, { post }) => {
    draft.posts = [];
    draft.postDetail = post;
  }),
  [types.GET_POST.FAILURE]: produce(draft => {
    draft.posts = [];
    draft.postDetail = {};
  }),
};

export default createReducer(initialState, actionHandlers);
