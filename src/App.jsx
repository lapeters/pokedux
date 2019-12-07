import React, { Suspense, lazy } from 'react';
import './App.scss';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';

const Home = lazy(() => import('./scenes/Home/Home'));
const About = lazy(() => import('./scenes/About/About'));
const Pokemon = lazy(() => import('./scenes/Pokemon/Pokemon'));

function App() {
  return (
    <Router>
      <Header />
      <main role="main" className="container--fluid">
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/:pokemon" component={Pokemon} />
          </Switch>
        </Suspense>
      </main>
    </Router>
  );
}

export default hot(module)(App);
