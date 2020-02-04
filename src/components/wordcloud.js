import React, { Component } from 'react';
import ReactWordcloud from 'react-wordcloud';
import Api from './Api/api';
import ReactDelayRender from 'react-delay-render';
import { Link } from 'react-router-dom';

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
    console.log(this.props);
    const { wordCloud } = this.state;

    return (
      <div
        className={this.state.hidden}
        style={{ height: '100vh', width: '100%' }}
      >
        <Link to='/'>
          <ReactWordcloud words={wordCloud} />
        </Link>
      </div>
    );
  }
}

export default ReactDelayRender({ delay: 1000 })(wordcloud);
