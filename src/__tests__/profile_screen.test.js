import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Profile from '../components/Profile';

it('Profile screen renders as expected', () => {
  const tree = renderer.create(<Provider store={store}><Profile /></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});
