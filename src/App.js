import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import Landing from './components/landing';
import Wordcloud from './components/wordcloud';



function App() {
  return (
    <Router >
      <Switch>
        <Route exact path='/' component={Landing}   />
        <Route exact path='/wordcloud' component={Wordcloud} />
      </Switch>
    </Router>
  );
}

export default App;
