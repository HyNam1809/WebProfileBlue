import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import BaseLayout from './components/layout/Baselayout';
import HomePage from './screens/Home/page';

function AppUI() {
  return (
    <React.Fragment>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path='WebProfileBlue/' element={<HomePage />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppUI />
    </Provider>

  );
}

export default App;
