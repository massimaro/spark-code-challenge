import React from 'react';
import { withRouter } from 'react-router-dom';
import routesPaths from '../constants/routesPaths';
import '../styles/components/header.scss';

const Header = ({ history: { push } }) => (
  <div className="header">
    <h1
      onClick={() => {
        push(routesPaths.home);
      }}
    >
      PostsApp
    </h1>
  </div>
);

export default withRouter(Header);
