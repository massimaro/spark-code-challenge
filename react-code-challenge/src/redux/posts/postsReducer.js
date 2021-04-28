import * as types from './postsTypes';
import { produce } from 'immer';
import createReducer from '../utils/createReducer';

const initialState = {
  posts: [],
  postDetail: {},
  postDetailComments: [],
};

const actionHandlers = {
  [types.GET_POSTS.REQUEST]: produce(draft => {
    draft.posts = [];
    draft.postDetail = {};
    draft.postDetailComments = [];
  }),
  [types.GET_POSTS.SUCCESS]: produce((draft, { posts }) => {
    draft.posts = posts;
    draft.postDetail = {};
    draft.postDetailComments = [];
  }),
  [types.GET_POSTS.FAILURE]: produce(draft => {
    draft.posts = [];
    draft.postDetail = {};
    draft.postDetailComments = [];
  }),
  [types.GET_POST.REQUEST]: produce(draft => {
    draft.posts = [];
    draft.postDetail = {};
    draft.postDetailComments = [];
  }),
  [types.GET_POST.SUCCESS]: produce((draft, { post }) => {
    draft.posts = [];
    draft.postDetail = post;
    draft.postDetailComments = [];
  }),
  [types.GET_POST.FAILURE]: produce(draft => {
    draft.posts = [];
    draft.postDetail = {};
    draft.postDetailComments = [];
  }),
  [types.GET_COMMENTS.REQUEST]: produce(draft => {
    draft.postDetailComments = [];
  }),
  [types.GET_COMMENTS.SUCCESS]: produce((draft, { comments }) => {
    draft.postDetailComments = comments;
  }),
  [types.GET_COMMENTS.FAILURE]: produce(draft => {
    draft.postDetailComments = [];
  }),
  [types.ADD_COMMENT]: produce((draft, { newComment }) => {
    draft.postDetailComments = [newComment, ...draft.postDetailComments];
  }),
};

export default createReducer(initialState, actionHandlers);
