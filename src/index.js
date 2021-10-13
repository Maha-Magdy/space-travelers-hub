import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './redux/configureStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Header from './components/Header';
import Rockets from './components/Rockets';
import Profile from './components/Profile';
import Missions from './components/Missions';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <Rockets />
          </Route>
          <Route path="/missions">
            <Missions />
          </Route>
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
