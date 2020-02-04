import React, { Component } from 'react';
import './Gallery.css';
import axios from 'axios';
import Navbar from './Navbar';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ImageUploader from 'react-images-upload';

class Gallery extends Component {
  state = {
    Gallery: [],
    name: '',
    caption: '',
    url: '',
    type: 'image',
    show: false,
    file: null
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
  onDrop = event => {
    this.setState({
      url: event.target.files[0]
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.name);
  };
  onSubmit = e => {
    e.preventDefault();
    const name = this.state.name;
    const caption = this.state.caption;
    const type = this.state.type;
    const formData = new FormData();
    formData.append('resourceImg', this.state.url);
    formData.append('name', name);
    formData.append('caption', caption);
    formData.append('type', type);
    const data = {
      name,
      caption,
      type,
      url: this.state.url
    };
    console.log(data);
    //https://wordcloud-api-node.herokuapp.com/resource/create
    axios
      .post(
        'https://wordcloud-api-node.herokuapp.com/resource/create',
        formData
      )
      .then(res => {
        console.log(res);
      })
      .catch(error => console.log(error));
    this.handleClose();
  };

  render() {
    const { Gallery, show } = this.state;
    const filtered = Gallery.filter(gallery => gallery.type === 'image');
    return (
      <div>
        <Navbar />
        <div className='d-flex justify-content-end mr-3'>
          <Button variant='primary' onClick={this.handleShow}>
            Add Image
          </Button>
        </div>

        <Modal show={show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Upload Image</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Take/make of a body shape or of metaphoric nature that express and
              embodies your resonance from the video and access the collective
              “in-Bodied Memories Image Gallery”
            </p>
            <form className='form-container' onSubmit={this.onSubmit}>
              <div class='form-group'>
                <label for='exampleInputEmail1'>Your Name</label>
                <input
                  name='name'
                  type='text'
                  class='form-control'
                  onChange={this.onChange}
                  required
                />
              </div>
              <div class='form-group'>
                <label for='exampleInputPassword1'>Image Title</label>
                <input
                  name='caption'
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
                  I give consent for my image to appear at the “In-Bodied
                  Memories Image Gallery”. I will not upload and image that
                  could be offensive to others. I am aware images are anonymous
                  and that my image could be removed by the admin on my request
                  or the request of others. But not immediately and I take for
                  legal responsibility on the images I upload to the gallery.
                </label>
              </div>

              <div class='form-group'>
                <input type='file' onChange={this.onDrop} />
              </div>

              <Modal.Footer>
                <button
                  type='submit'
                  class='btn btn-primary '
                  // onClick={this.handleClose}
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
          <div
            style={{
              columnCount: '3'
            }}
          >
            {Gallery.filter(gallery => gallery.type === 'image').map(
              gallery => (
                <Link
                  to={{
                    pathname: '/addresonance',
                    state: { id: gallery }
                  }}
                >
                  <div class='gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe'>
                    <img src={gallery.url} class='img-responsive img' />
                  </div>
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
