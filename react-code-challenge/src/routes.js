import routesPaths from './constants/routesPaths';

import PostsPage from './pages/PostsPage';
import PostDetailPage from './pages/PostDetailPage';

const routes = [
  {
    path: routesPaths.post,
    component: PostDetailPage,
    exact: true,
  },
  {
    path: routesPaths.posts,
    component: PostsPage,
    exact: true,
  },
];

export default routes;
