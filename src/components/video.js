import React, { Component } from 'react';
import YouTube from 'react-youtube';

class Video extends Component {
  render() {
    const opts = {
      height: '400px',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    return (
      <YouTube videoId='OYhntF0YKZA' opts={opts} onReady={this._onReady} />
    );
  }
}

export default Video;
