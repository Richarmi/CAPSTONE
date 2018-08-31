import React from 'react';

const MyGifItem = ({gif, onGifSelect}) => {
      console.log(gif, "these are the gifs in GifItem");
  return (
    <div className="gif-item" onClick={() => onGifSelect(gif)}>
      <img src={gif.url} />
    </div>
  )
};

export default MyGifItem;
