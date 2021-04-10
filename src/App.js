import React from 'react';
import styles from './App.css';
import { Sidenav } from './components/Sidenav/Sidenav';
import MoviesTab from './components/Tabs/Moviestab';

export const App = () => {
  return (
    <div className="app">
      <MoviesTab />

      <Sidenav />
    </div>
  );
};