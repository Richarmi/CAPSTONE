import React, { Component } from 'react';
import CreateGif from '../CreateGif';
import EditGif from '../EditGif';
import SearchBar from '../SearchBar';

import GifList from '../GifList';
import GifItem from '../GifItem';
import Gifs from '../Gifs';
import '../styles/app.css';
import request from 'superagent';

import GifModal from '../GifModal';
import MyGifsModal from '../MyGifsModal';
import MyGifsList from '../MyGifsList';


class GifsContainer extends Component {
  constructor(){
    super();

    this.state = {
      // gifs: [  {
      //               id: 1,
      //               url: 'http://fakeimg.pl/300/'
      //           },
      //           {
      //               id: 2,
      //               url: 'http://fakeimg.pl/300/'
      //           },
      //           {
      //               id: 3,
      //               url: 'http://fakeimg.pl/300/'
      //           }
      //         ],
      gifs: [],
      mySelectedGifs: [],
      selectedGif: null,
      selectedMyGif: null,
      modalIsOpen: false,
      MyGifsModalOpen: false,
      showEdit: false,
      editGifId: null,
      gifToEdit: {
        title: '',
        description: '',
        rating: ''
      }
    }
  }

  openModal(gif) {
    this.setState({
        modalIsOpen: true,
        selectedGif: gif
    });
  }

  closeModal() {
    this.setState({
        modalIsOpen: false,
        selectedGif: null
    });
  }

  openMyGifsModal(gif) {
    console.log("OPENING MYGIF MODAL")
    console.log(gif)
    this.setState({
        MyGifsModalOpen: true,
        selectedMyGif: gif,
        editGifId: gif._id
    });
  }

  closeMyGifsModal() {
    this.setState({
        MyGifsModalOpen: false,
        selectedMyGif: null
    });
  }

  handleTermChange = (term) => {
      const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC`;

      request.get(url, (err, res) => {
        console.log(res.body.data, "this is res.body.data");
        console.log("The size of res.body.data: " + res.body.data.length);
          this.setState({ gifs: res.body.data })
      });
  }

  componentDidMount(){
    // This is where you want to fetch data when you want data to exist,
    // at the beginning of you app
    this.getGifs().then((gifs) => {
      console.log(gifs, "these are the gifs in componentDidMount")
      this.setState({
        mySelectedGifs: gifs.data
      })
    }).catch((err) => {
      console.log(err)
    });

  }

  getGifs = async () => {

    const gifs = await fetch('http://localhost:9000/api/v1/gifs');
    const parsedGifs = gifs.json();

    return parsedGifs
  }

  addGif = async (gif, e) => {
    // binded arguments allows get passed first
    // this.props.addMovie.bind(null, this.state)
    e.preventDefault();

    try {
      const gifToCreate = {
        'url': gif.images.downsized.url,
        'rating': gif.rating,
        'title': '???',
        'description': '???'
      }

      console.log(gif, "this is the gif within addGif");
      const createGif = await fetch('http://localhost:9000/api/v1/gifs', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(gifToCreate),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const parsedResponse = await createGif.json();
      // spread syntax
      // advice COnsole.lo
      // const state = this.state;
      // state.movies.push(parsedResponse.data);
      // this.setState(state);


      // functional way, prepares for redux, and immutability
      // spread syntax
      this.setState({mySelectedGifs: [...this.state.mySelectedGifs, parsedResponse.data]})
    } catch(err){
      console.log(err);
    }



    // this will make your fetch post request
    // and then update state
  }

  deleteGif = async (id, e) => {
    e.preventDefault();
    console.log('deleteGif function is being called, this is the id: ', id);

    try {

      const deleteGif = await fetch('http://localhost:9000/api/v1/gifs/' + id, {
        method: 'DELETE'
      });

      const parsedResponse = await deleteGif.json();

      // filter returns a brand a new array based on some condition
      // does movie._id
      if(parsedResponse.status === 200){
        this.setState({mySelectedGifs: this.state.mySelectedGifs.filter((gif, i) => gif._id !== id)});
      } else {
        // leave some message there was a problem

      }
    }catch(err){
      console.log(err);
    }

    // MAke this function work by making a delete call, Look up fetch delete

    // then setState after you get your response
  }

  showModal = (id) => {

    // find method returns the object that meets the condition,
    // and so the movieToEdit variable will contain the movie want to edit (the actual)
    // object
    const gifToEdit = this.state.gifs.find((gif) => gif._id === id);


    this.setState({
      showEdit: true,
      editGifId: id,
      gifToEdit: gifToEdit
    });

  }

  closeAndEdit = async (e) => {
     e.preventDefault();
     console.log("close and edit being callled here");

     console.log("This is the current state: ", this.state);

     // Try to make the fetch put call
     try {

      const editGif = await fetch('http://localhost:9000/api/v1/gifs/' + this.state.editGifId, {
        method: 'PUT',
        body: JSON.stringify(this.state.gifToEdit),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log("the edited gif is now stringified as JSON");


      const parsedResponse = await editGif.json();

      // Functional and immutable way of accomplishing this task
      const editedGifArray = this.state.mySelectedGifs.map((gif) => {

        if(gif._id === this.state.editGifId){
          gif.title = parsedResponse.data.title;
          gif.description = parsedResponse.data.description
          gif.rating = parsedResponse.data.rating
        }

        return gif
      });

      this.setState({
        mySelectedGifs: editedGifArray,
        showEdit: false
      });

     } catch(err){
      console.log(err)
     }

     // after you get the updated OBject returned from your api
     // set you State

  }

  handleFormChange = (e) => {

    // const state = this.state;
    // state.movieToEdit[e.target.name] = e.target.value;
    // this.setState(state);

    console.log("this is gifToEdit", this.state.gifToEdit);
    console.log("this is e.target.name", e.target.name);
    console.log("this is e.target.value", e.target.value);
    // Spread operator
    this.setState({
      gifToEdit: {
        ...this.state.gifToEdit,
        [e.target.name]: e.target.value
      }
    });
  }

  render(){
    return (
      <div>
        <div>
          <h3 className="search-bar-title">Giffy Bank</h3>
          <SearchBar onTermChange={this.handleTermChange} />
        </div>

        <div>
          <h3 className="search-results-title">your Search Results</h3>
          <GifList  gifs={this.state.gifs}
            onGifSelect={selectedGif => this.openModal(selectedGif) } />
        </div>

        <GifModal modalIsOpen={this.state.modalIsOpen}
          selectedGif={this.state.selectedGif}
          onRequestClose={ () => this.closeModal() }
          addGif={this.addGif}/>


        <div>
          <h3 className="selected-gifs-title">your Selected Gifs</h3>
          <MyGifsList gifs={this.state.mySelectedGifs}
            onGifSelect={selectedMyGif => this.openMyGifsModal(selectedMyGif) } />
        </div>

        <MyGifsModal MyGifsModalOpen={this.state.MyGifsModalOpen}
          closeAndEdit={this.closeAndEdit}
          selectedGif={this.state.selectedMyGif}
          handleFormChange={this.handleFormChange}
          onRequestClose={ () => this.closeMyGifsModal() } deleteGif={this.deleteGif}/>



        {/* {this.state.showEdit ? <EditGif closeAndEdit={this.closeAndEdit} handleFormChange={this.handleFormChange} gifToEdit={this.state.gifToEdit}/> : null} */}


      </div>
    )
  }

}


export default GifsContainer;
