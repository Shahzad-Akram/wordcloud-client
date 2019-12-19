import React, { Component } from 'react';
import Video from './video';
import Form from './FormInput';
import Logo from '../assets/logo.png';

class landing extends Component {
  render() {
    return (
      <div className='App'>
        <div className='d-flex container-fluid m-0 p-0 height-100vh'>
          <div className='heading col-md-4 m-0 p-0 shadow justify-content-center align-items-center d-flex text-light'>
            <div class='jumbotron jumbotron-fluid bg-transparent'>
              <div class='container'>
                <img
                  src={Logo}
                  width='75'
                  height='75'
                  class='d-inline-block align-top'
                  alt=''
                />
                <h1 class='display-4 text-success font-weight-bold '>Review</h1>
                <p class='lead'>
                  Please Enter Your Review To get a{' '}
                  <span className='font-weight-bold text-success'>
                    WordCloud
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-8 p-0 m-0 bg-dark text-light justify-content-center align-items-center d-flex'>
            <div className='container-fluid mt-3'>
              <div className='row flex-column btn-block '>
                <div className='col-md-12 '>
                  <Video />
                </div>
                <div className='col-md-12'>
                  <Form />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default landing;
