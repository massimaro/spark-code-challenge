import { fireEvent, render, screen } from '@testing-library/react';
import PostsPage from './pages/PostsPage';
import Header from './components/Header';
import Post from './components/Post';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './redux/store';

test('renders header title', () => {
  render(
    <Provider store={store()}>
      <Router>
        <Header />
      </Router>
    </Provider>
  );
  const headerTitle = screen.getByText('PostsApp');
  expect(headerTitle).toBeInTheDocument();
});
test('renders main feed title', () => {
  render(
    <Provider store={store()}>
      <Router>
        <PostsPage />
      </Router>
    </Provider>
  );

  const mainFeedTitle = screen.getByText('Main Feed');
  expect(mainFeedTitle).toBeInTheDocument();
});
test('renders post comments title', () => {
  render(
    <Provider store={store()}>
      <Router>
        <Post isDetail />
      </Router>
    </Provider>
  );

  const commentsTitle = screen.getByText('Comments');
  expect(commentsTitle).toBeInTheDocument();
});
test('renders post new comment input', () => {
  render(
    <Provider store={store()}>
      <Router>
        <Post isDetail />
      </Router>
    </Provider>
  );

  const newCommentInput = screen.getByPlaceholderText('Type your comment...');
  expect(newCommentInput).toBeInTheDocument();
});
test('renders post new comment button', () => {
  render(
    <Provider store={store()}>
      <Router>
        <Post isDetail />
      </Router>
    </Provider>
  );

  const newCommentButton = screen.getByText('Comment!');
  expect(newCommentButton).toBeInTheDocument();
});
test('does not render post comments section', () => {
  render(
    <Provider store={store()}>
      <Router>
        <Post />
      </Router>
    </Provider>
  );

  const commentsTitle = screen.queryByText('Comments');
  expect(commentsTitle).not.toBeInTheDocument();
});
test('does not render post new comment input', () => {
  render(
    <Provider store={store()}>
      <Router>
        <Post />
      </Router>
    </Provider>
  );

  const newCommentInput = screen.queryByText('Type your comment...');
  expect(newCommentInput).not.toBeInTheDocument();
});
test('does not render post new comment button', () => {
  render(
    <Provider store={store()}>
      <Router>
        <Post />
      </Router>
    </Provider>
  );

  const newCommentButton = screen.queryByText('Comment!');
  expect(newCommentButton).not.toBeInTheDocument();
});
test('renders post correctly', () => {
  render(
    <Provider store={store()}>
      <Router>
        <Post title="Post title!" body="This is the body!" />
      </Router>
    </Provider>
  );

  const title = screen.getByText('Post title!');
  expect(title).toBeInTheDocument();
  const body = screen.getByText('This is the body!');
  expect(body).toBeInTheDocument();
});
test('comment added', () => {
  const comments = [];

  const addCommentMockHandler = newComment => {
    comments.push({
      name: 'My Name',
      email: 'myemail@gmail.com',
      body: newComment,
      id: `my-comment-0`,
    });
  };

  render(
    <Provider store={store()}>
      <Router>
        <Post
          title="Post title!"
          body="This is the body!"
          isDetail
          addCommentHandler={addCommentMockHandler}
          comments={comments}
        />
      </Router>
    </Provider>
  );

  const commentText = 'This is a comment';

  const missingComment = screen.queryByText(commentText);
  expect(missingComment).not.toBeInTheDocument();

  const newCommentInput = screen.getByPlaceholderText('Type your comment...');
  fireEvent.change(newCommentInput, { target: { value: commentText } });
  const newCommentButton = screen.getByText('Comment!');
  fireEvent.click(newCommentButton);

  const comment = screen.getByText(commentText);
  expect(comment).toBeInTheDocument();
});
