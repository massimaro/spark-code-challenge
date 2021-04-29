const baseUrl = process.env.REACT_APP_BASE_URL;

const apiRoutes = {
  getPosts: `${baseUrl}/posts`,
  getPost: `${baseUrl}/posts/:id`,
  getComments: `${baseUrl}/comments?postId=:id`,
};

export default apiRoutes;
