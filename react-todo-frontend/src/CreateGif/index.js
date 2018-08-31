import React, { Component } from 'react';


class CreateGif extends Component {
  constructor(){
    super();

    this.state = {
      title: '',
      description: '',
      rating: ''
    }
  }
  updateGif = (e) => {

    this.setState({[e.currentTarget.name]: e.currentTarget.value});

  }

  render(){
    console.log(this.props, ' this is props')
  return (
    <form onSubmit={this.props.EditGif.bind(this, this.state)}>
      <label>
        Gif:
        <input type="text" name="title" onChange={this.updateGif}/>
      </label>
      <label>
        Description:
        <input type="text" name="description" onChange={this.updateGif}/>
      </label>
      <label>
        Rating:
        <input type="text" name="rating" onChange={this.updateGif}/>
      </label>
      <input type='Submit'/>
    </form>

    )
  }
}

export default CreateGif;
