import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import { store } from './app/store';
import { Provider } from 'react-redux';
import Header from './components/Header';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
      <Header />
      <Switch>
        <Route path="/profile">
          <div>This is the Profile page!!</div>
        </Route>
      </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
