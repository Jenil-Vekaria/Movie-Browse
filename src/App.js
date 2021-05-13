import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MovieTab } from './components/Tabs/MovieTab/MovieTab';
import { FavouriteTab } from './components/Tabs/FavouriteTab/FavouriteTab';
import { UserTab } from './components/Tabs/UserTab/UserTab';
import { Sidenav } from './components/Sidenav/Sidenav';

import './App.css';

export const App = () => {

  console.log('Built by Jenil');
  console.log('https://github.com/Jenil-Vekaria');

  return (
    <div className="app">
      <BrowserRouter>

        <Sidenav />

        <Switch>
          <Route path="/search/movie/:movieId" extact component={MovieTab} />
          <Route path="/search/:genere" extact component={MovieTab} />
          <Route path="/search" extact component={MovieTab} />
          <Route path="/favourite" extact component={FavouriteTab} />
          <Route path="/user" extact component={UserTab} />
          <Route path="/" extact component={MovieTab} />
        </Switch>

      </BrowserRouter>
    </div>

  );
};