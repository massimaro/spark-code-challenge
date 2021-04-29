Welcome to PostsApp!

Installation:
1- Developed and tested with Node v14.16.1
2- Included .env in the repo for simplicity (shouldn't go there in a prod environment!)
3- Should setup REACT_APP_BASE_URL in local .env or in a server, but it's already there for simplifying purposes!
4- To run: "npm install" and then "npm start"

Some considerations/comments:
1- Comments are included in Posts reducer, since they are "part" of the post, so they should be together.
2- Two pages, one to lists posts and one to see each post detail.
3- Used "react-router-dom" to handle routing.
4- Post details page will get the current post from the url.
5- Used "react-redux" to manage state.
6- Used "axios" to make api calls.
7- Used "node-sass" to load .scss files, making styling more powerful and easy to read/understand.
8- Used "immer" to mutate redux state.
9- Hardcoded some values to simulate a session and create comments with a fake user and email (we would get them from redux eventually, once the user is logged in).
10- Used withMaster as hoc to easily add a Master Page to any page.
11- Did some simple rendering and user interaction tests using jest framework.
