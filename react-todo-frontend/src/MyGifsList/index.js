import React from 'react';
import MyGifItem from '../MyGifItem';

const MyGifsList = (props) => {
  const MyGifItems = props.gifs.map((image) => {
    return <MyGifItem key={image.id}
                    gif={image}
                    onGifSelect={props.onGifSelect} />
  });

  return (
    <div className="gif-list">{MyGifItems}</div>
  );
};

export default MyGifsList;
