import React, { Component } from 'react';
import './Gallery.css';
import axios from 'axios';
import Navbar from './Navbar';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class VideoGallery extends Component {
  state = {
    Gallery: [],
    name: '',
    caption: '',
    url: '',
    type: 'video',
    show: false
  };
  componentDidMount() {
    axios.get('https://wordcloud-api-node.herokuapp.com/resource').then(res => {
      this.setState({ Gallery: res.data });
    });
  }

  handleShow = () => {
    this.setState({
      show: true
    });
  };
  handleClose = () => {
    this.setState({
      show: false
    });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = e => {
    e.preventDefault();
    const name = this.state.name;
    const caption = this.state.caption;
    const url = this.state.url;
    const type = this.state.type;
    const data = {
      name,
      caption,
      url,
      type
    };
    console.log(data);
    axios
      .post('https://wordcloud-api-node.herokuapp.com/resource/create', {
        name,
        caption,
        url,
        type
      })
      .then(res => {
        console.log(res);
      })
      .catch(error => console.log(error));
  };

  render() {
    const { Gallery, show } = this.state;
    const filtered = Gallery.filter(gallery => gallery.type === 'video');

    return (
      <div>
        <Navbar />
        <div className='d-flex justify-content-end mr-3'>
          <Button variant='primary' onClick={this.handleShow}>
            Add Video
          </Button>
        </div>
        <Modal show={show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Video</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Share A video of resonance in which you share or express through
              words or embodiment of your resonance from the video the video
              will then be added to “In-Bodied Memories Video Gallery”.
            </p>
            <form className='form-container' onSubmit={this.onSubmit}>
              <div class='form-group'>
                <label for='exampleInputEmail1'>Video Name</label>
                <input
                  name='name'
                  type='text'
                  class='form-control'
                  onChange={this.onChange}
                  required
                />
              </div>
              <div class='form-group'>
                <label for='exampleInputPassword1'>Video Title</label>
                <input
                  name='caption'
                  type='text'
                  class='form-control'
                  onChange={this.onChange}
                  required
                />
              </div>
              <div class='form-group'>
                <label for='exampleInputEmail1'>Video ID</label>
                <input
                  name='url'
                  type='text'
                  class='form-control'
                  onChange={this.onChange}
                  required
                />
              </div>
              <div class='form-check'>
                <input
                  type='checkbox'
                  class='form-check-input'
                  id='exampleCheck1'
                />
                <label class='form-check-label' for='exampleCheck1'>
                  I give consent for my video to appear at the “In-Bodied
                  Memories video Gallery”. I will not upload and video that
                  could be offensive to others. I am aware videos are anonymous
                  and that my video could be removed by the admin on my request
                  or the request of others. But not immediately and I take for
                  legal responsibility on the videos I upload to the gallery.
                </label>
              </div>
              <Modal.Footer>
                <button
                  type='submit'
                  class='btn btn-primary '
                  onClick={this.handleClose}
                >
                  Submit
                </button>
                <Button variant='secondary' onClick={this.handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </form>
          </Modal.Body>
        </Modal>
        <div class='container'>
          <div class='row'>
            {Gallery.filter(gallery => gallery.type === 'video').map(
              gallery => (
                <div
                  class='gallery_product d-flex flex-column border-0
              col-lg-4 col-md-4 col-sm-4 col-xs-6 shadow-lg ml-3 p-3'
                >
                  <iframe
                    class='embed-responsive-item border-0 p-2'
                    src={`https://www.youtube.com/embed/${gallery.url}`}
                    allowfullscreen
                  ></iframe>
                  <div
                    className='d-flex mt-3 
                  text-capitalize font-weight-bold justify-content-between align-items-center'
                  >
                    {gallery.caption}
                    <Link
                      className='btn btn-sm btn-outline-primary'
                      to={{
                        pathname: '/addresonance',
                        state: { id: gallery }
                      }}
                    >
                      Click Here
                    </Link>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default VideoGallery;
