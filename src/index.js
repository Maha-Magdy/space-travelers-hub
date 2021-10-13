import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Header from './components/Header';
<<<<<<< HEAD
import Rockets from './components/Rockets';
import Profile from './components/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
=======
import Missions from './components/Missions';
>>>>>>> dev

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
