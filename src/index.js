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
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    <NhostAuthProvider auth={auth}>
      <NhostApolloProvider
        auth={auth}
        gqlEndpoint={`https://hasura-rgxqixea.nhost.app/v1/graphql`}
      >
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path = "/register">
              <Register />
            </Route>
            <AuthGate>
              <Route exact path="/">
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
