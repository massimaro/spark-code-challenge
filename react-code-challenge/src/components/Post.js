import React from 'react';
import { number, string, bool, func } from 'prop-types';
import cn from 'classnames';
import '../styles/components/post.scss';

const Post = ({ id, title, body, clickable, clickFunction, isDetail }) => (
  <div
    className={cn('post', { clickable, detail: isDetail })}
    onClick={() => {
      clickable && clickFunction && clickFunction(id);
    }}
  >
    <h3>{title}</h3>
    <p>{body}</p>
    <div className="comments-container"></div>
  </div>
);

Post.propTypes = {
  id: number,
  title: string,
  body: string,
  clickable: bool,
  clickFunction: func,
  isDetail: bool,
};

export default Post;
