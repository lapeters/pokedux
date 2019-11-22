import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './scss/App.scss';
import Header from './components/Header/Header';
import Home from './scenes/Home/Home';
import About from './scenes/About/About';
import Pokemon from './scenes/Pokemon/Pokemon';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main role="main" className="container--fluid">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/:pokemon" component={Pokemon} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}
export default hot(module)(App);
