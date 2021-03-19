import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { NhostAuthProvider } from '@nhost/react-auth';
import { NhostApolloProvider } from '@nhost/react-apollo';
import { auth } from 'utils/nhost';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AuthGate } from 'components/AuthGate';
import Login from 'components/Login';
import Register from 'components/Register';
import AboutUs from 'components/AboutUs';
import Profile from 'components/Profile';
import HelpfulLinks from 'components/HelpfulLinks';
import 'bootstrap/dist/css/bootstrap.css';
import { ROUTES } from './constants';

ReactDOM.render(
  <React.StrictMode>
    <NhostAuthProvider auth={auth}>
      <NhostApolloProvider
        auth={auth}
        gqlEndpoint={`https://hasura-rgxqixea.nhost.app/v1/graphql`}
      >
        <Router>
          <Switch>
            <Route path={ROUTES.login}>
              <Login />
            </Route>
            <Route path={ROUTES.register}>
              <Register />
            </Route>
            <Route path={ROUTES.aboutUs}>
              <AboutUs />
            </Route>
            <Route path={ROUTES.profile}>
              <Profile />
            </Route>
            <Route path={ROUTES.helpfulLinks}>
              <HelpfulLinks />
            </Route>
            <AuthGate>
              <Route exact path={ROUTES.home}>
                <App />
              </Route>
            </AuthGate>
          </Switch>
        </Router>
      </NhostApolloProvider>
    </NhostAuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
