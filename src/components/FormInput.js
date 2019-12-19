import React, { Component } from 'react';
import './FormInput';
import Api from './Api/api';

class Form extends Component {
  state = {
    videoId: '2g811Eo7K8U',
    username: '',
    email: '',
    text: ''
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    Api.createComment(this.state)
      .then(res => console.log(res.data))
      .catch(error => console.log(error));
  };
  render() {
    return (
      <form className='form-container' onSubmit={this.onSubmit}>
        <div class='form-group'>
          <label for='exampleInputEmail1'>Name</label>
          <input
            name='username'
            type='text'
            class='form-control'
            aria-describedby='emailHelp'
            onChange={this.onChange}
            required
          />
        </div>
        <div class='form-group'>
          <label for='exampleInputPassword1'>Email</label>
          <input
            name='email'
            type='email'
            class='form-control'
            onChange={this.onChange}
            required
          />
          <small id='emailHelp' class='form-text text-light'>
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class='form-group'>
          <label for='exampleInputEmail1'>Resonance</label>
          <input
            name='text'
            type='text'
            class='form-control'
            onChange={this.onChange}
            required
          />
        </div>
      
          <button type='submit' class='btn btn-success btn-block'>
            Submit
          </button>
      
      </form>
    );
  }
}

export default Form;
