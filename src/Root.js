import React from 'react';
import  { Provider } from 'react-redux';
import Routes from './Routes';
import createStore from './store';

const store = createStore();

export default function Root() {
  return (
    <Provider store={store}>
        <Routes />
    </Provider>
  );
}
