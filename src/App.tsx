import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { GamePage } from './components/GamePage';

const App = (): JSX.Element => {
  return (
    <Router>
      <main className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/game" component={GamePage} />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
