import React from 'react';
import { number, string, bool } from 'prop-types';
import cn from 'classnames';
import '../styles/components/post.scss';

const Post = ({ id, title, body, clickable }) => (
  <div className={cn('post', { clickable })}>
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
};

export default Post;
