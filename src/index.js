import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Header from './components/Header';
import Rockets from './components/Rockets';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path="/profile">
            <div>This is the Profile page!!</div>
          </Route>
          <Route path="/">
            <Rockets />
          </Route>
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
