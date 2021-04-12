import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MovieTab } from './components/Tabs/MovieTab/MovieTab';
import { FavouriteTab } from './components/Tabs/FavouriteTab/FavouriteTab';
import { UserTab } from './components/Tabs/UserTab/UserTab';
import { Sidenav } from './components/Sidenav/Sidenav';

import styles from './App.css';


export const App = () => {
  return (
    <BrowserRouter>

      <Sidenav />

      <Switch>
        <Route path="/search" extact component={MovieTab} />
        <Route path="/favourite" extact component={FavouriteTab} />
        <Route path="/user" extact component={UserTab} />
        <Route path="/" extact component={MovieTab} />
      </Switch>

    </BrowserRouter>
  );
};