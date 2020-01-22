import React, { Component } from 'react';
import ReactWordcloud from 'react-wordcloud';
import Api from './Api/api';
import ReactDelayRender from 'react-delay-render';

class wordcloud extends Component {
  state = {
    wordCloud: []
  };

  componentDidMount() {
    const id = window.location.pathname.split('/')[1];
    Api.getWordCloud(id).then(res => {
      this.setState({
        wordCloud: res.data.wordFrequency[0]
      });
    });
  }

  render() {
    const { wordCloud } = this.state;
    return (
      <div
        className={this.state.hidden}
        style={{ height: '100vh', width: '100%' }}
      >
        <ReactWordcloud words={wordCloud} />
      </div>
    );
  }
}

export default ReactDelayRender({ delay: 1000 })(wordcloud);
