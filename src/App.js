import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MovieTab } from './components/Tabs/Movie/MovieTab';
import { Favourite } from './components/Tabs/Favourite/Favourite';
import { UserProfile } from './components/Tabs/User Profile/UserProfile';
import { Sidenav } from './components/Sidenav/Sidenav';

import styles from './App.css';


export const App = () => {
  return (
    <BrowserRouter>

      <Sidenav />

      <Switch>
        <Route path="/search" extact component={MovieTab} />
        <Route path="/favourite" extact component={Favourite} />
        <Route path="/user" extact component={UserProfile} />
        <Route path="/" extact component={MovieTab} />
      </Switch>

    </BrowserRouter>
  );
};