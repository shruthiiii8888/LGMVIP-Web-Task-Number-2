import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
const initialState = { message: 'Hello, World!' };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
const store = configureStore({
  reducer: reducer,
});
const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <p>{store.getState().message}</p>
    </div>
  );
};
export default App;
