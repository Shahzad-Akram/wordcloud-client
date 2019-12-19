import React, { Component } from 'react';
import YouTube from 'react-youtube';

class Video extends Component {
  render() {
    const opts = {
      height: '250px',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    return (
      <YouTube videoId='EE_NVxSmWOw' opts={opts} onReady={this._onReady} />
    );
  }
}

export default Video;
