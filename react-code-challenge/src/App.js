import { Switch, withRouter, Route, Redirect } from 'react-router-dom';
import routes from './routes';
import routesPaths from './constants/routesPaths';
import './styles/_index.scss';

const App = () => (
  <div className="app-container">
    <Switch>
      <Route exact path={routesPaths.index}>
        <Redirect to={routesPaths.home} />
      </Route>
      {routes.map((route, index) => (
        <Route key={`route${index}`} {...route} />
      ))}
    </Switch>
  </div>
);
export default withRouter(App);
