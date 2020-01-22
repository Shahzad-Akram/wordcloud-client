import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav class='navbar navbar-expand-lg navbar-light bg-light'>
        <Link to='/' class='navbar-brand' href='#'>
          Word Cloud App
        </Link>
        <button
          class='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarNav'>
          <ul class='navbar-nav'>
            <li class='nav-item active'>
              <Link to='/video' class='nav-link' href='#'>
                Video <span class='sr-only'>(current)</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
