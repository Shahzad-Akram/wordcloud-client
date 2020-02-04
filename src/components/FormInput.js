import React, { Component } from 'react';
import './FormInput';
import Api from './Api/api';
import axios from 'axios';

class Form extends Component {
  state = {
    username: '',
    email: '',
    see: '',
    feel: '',
    done: '',
    text: ''
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.see, this.state.feel, this.state.do);
  };

  onSubmit = e => {
    e.preventDefault();
    const resourceId = this.props.id;

    const username = this.state.username;
    const email = this.state.email;
    const text = this.state.see + ' ' + this.state.feel + ' ' + this.state.done;
    console.log(text);
    const data = {
      username,
      email,
      text
    };
    axios
      .post('https://wordcloud-api-node.herokuapp.com/resource/comment', {
        resourceId,
        username,
        email,
        text
      })
      .then(res => {
        window.location.replace(`${resourceId}/wordcloud`);
      })
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
        <div className='row'>
          <div class='form-group col-sm'>
            <label for='exampleInputEmail1'>I See</label>
            <input
              name='see'
              type='text'
              class='form-control'
              onChange={this.onChange}
              required
            />
          </div>
          <div class='form-group col-sm'>
            <label for='exampleInputEmail1'>I Feel</label>
            <input
              name='feel'
              type='text'
              class='form-control'
              onChange={this.onChange}
              required
            />
          </div>
          <div class='form-group col-sm'>
            <label for='exampleInputEmail1'>I Do</label>
            <input
              name='done'
              type='text'
              class='form-control'
              onChange={this.onChange}
              required
            />
          </div>
        </div>

        <button type='submit' class='btn btn-warning btn-block'>
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
