import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import Landing from './components/landing';
import Wordcloud from './components/wordcloud';
import FormInput from './components/FormInput';
import Gallery from './components/Gallery';
import VideoGallery from './components/VideoGallery';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/video' component={VideoGallery} />
        <Route exact path='/' component={Gallery} />
        <Route exact path='/:id/wordcloud' component={Wordcloud} />
        <Route exact path='/addresonance' component={Landing} />
      </Switch>
    </Router>
  );
}

export default App;
