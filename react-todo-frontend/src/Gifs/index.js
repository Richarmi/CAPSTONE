import React from 'react';
// Functional component that renders all the movies you just fetched

const Gifs = (props) => {

  const gifList = props.gifs.map((gif, i) => {
    return (
      <li key={gif._id}>
        <span>{gif.rating}</span>


        <button onClick={props.deleteGif.bind(null, gif._id)}>Delete</button>
        <button onClick={props.showModal.bind(null, gif._id)}>Edit</button>
      </li>
      )
  });

  return (
    <ul>
      {gifList}
    </ul>
    )


}


export default Gifs;
