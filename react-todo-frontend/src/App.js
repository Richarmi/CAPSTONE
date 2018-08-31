import React, { Component } from 'react';
import './App.css';
import GifsContainer from './GifsContainer';
import Login from './Login';
import Header from './Header';
import { Route, Switch } from 'react-router-dom';
import SearchBar from './SearchBar';

import CreateGif from './CreateGif';
import EditGif from './EditGif';
import GifList from './GifList';
import GifItem from './GifItem';
import Gifs from './Gifs';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <MovieContainer />
//       </div>
//     );
//   }
// }

const My404 = () => {
  return(
    <div>
      You're Lost Buddy
    </div>
  )
}

const App = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/gifs" component={ GifsContainer } />
        <Route component={ My404 } />
      </Switch>
    </main>
  )
}

export default App;
