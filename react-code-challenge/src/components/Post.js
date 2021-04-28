import React, { useState } from 'react';
import { number, string, bool, func, array } from 'prop-types';
import cn from 'classnames';
import '../styles/components/post.scss';

const Post = ({ id, title, body, clickable, clickFunction, isDetail, comments, addCommentHandler }) => {
  const [newComment, setNewComment] = useState('');

  const addComment = e => {
    e.preventDefault();
    if (!newComment) return;
    addCommentHandler(newComment);
    setNewComment('');
    document.getElementById('comments-container').scrollTop = 0;
  };

  return (
    <div
      className={cn('post', { clickable, detail: isDetail })}
      onClick={() => {
        clickable && clickFunction && clickFunction(id);
      }}
    >
      <h2>{title}</h2>
      <p>{body}</p>
      {isDetail && (
        <div className="comments-section">
          <div id="comments-container" className="comments-container">
            <h3>Comments</h3>
            {comments &&
              comments.map(({ name, email, body, id }) => (
                <div key={id} className="comment">
                  {name} ({email}):
                  <p>{body}</p>
                </div>
              ))}
            {comments &&
              comments.map(({ name, email, body, id }) => (
                <div key={id} className="comment">
                  {name} ({email}):
                  <p>{body}</p>
                </div>
              ))}
            {comments &&
              comments.map(({ name, email, body, id }) => (
                <div key={id} className="comment">
                  {name} ({email}):
                  <p>{body}</p>
                </div>
              ))}
          </div>
          <form className="comment-input-container" onSubmit={addComment}>
            <input
              className="comment-input"
              onChange={({ target: { value } }) => {
                setNewComment(value);
              }}
              value={newComment}
              placeholder="Type your comment..."
            ></input>
            <button type="submit" className="comment-button">
              Comment!
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

Post.propTypes = {
  id: number,
  title: string,
  body: string,
  clickable: bool,
  clickFunction: func,
  isDetail: bool,
  comments: array,
  addCommentHandler: func,
};

export default Post;
