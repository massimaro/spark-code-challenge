import React from 'react';
import Header from '../Header';

const withMaster = WrappedComponent => props => (
  <div className="master-page-container">
    <Header />
    <div className="wrapped-component">
      <WrappedComponent {...props} />
    </div>
  </div>
);

export default withMaster;
