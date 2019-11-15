import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route } from 'react-router-dom';
import './scss/App.scss';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Pokemon from './components/Pokemon';

function App() {
  return (
    <BrowserRouter>
      <div className="container--fluid">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/pokemon" component={Pokemon} />
      </div>
    </BrowserRouter>
  );
}
export default hot(module)(App);
