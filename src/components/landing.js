import React, { Component } from 'react';
import Video from './video';
import Form from './FormInput';
import Logo from '../assets/logo.jpg';

class landing extends Component {
  render() {
    return (
      <div className='App'>
        
          <div className=' p-0 m-0  justify-content-center align-items-center '>
            <div className='container-fluid mt-3'>
              <div className='d-flex '>
                <div className='col-md-4'>
                <img
                  src={Logo}
                  width='75'
                  height='75'
                  class='d-inline-block align-top'
                  alt=''
                />
                <h1 class='display-4 text-warning font-weight-bold '>Resonance</h1>
                <p class='lead'>
                  <span className= 'text-info'>Please Enter Your Resonance To get a{' '}</span>
                  <span className='font-weight-bold text-warning'>
                    WordCloud
                  </span>
                </p>
                </div>
                <div className='col-md-8'>
                <Video />
                </div>
                
              </div>
                
                <div className='col-md-12'>
                  <Form />
                </div>
              
            </div>
          </div>
        </div>
      
    );
  }
}

export default landing;
