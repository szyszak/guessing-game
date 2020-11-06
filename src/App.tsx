import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { GamePage } from './components/GamePage';
import { ScorePage } from './components/ScorePage';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <main className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/game" component={GamePage} />
          <Route path="/score" component={ScorePage} />
        </Switch>
      </main>

      <Footer />
    </Router>
  );
};

export default App;
