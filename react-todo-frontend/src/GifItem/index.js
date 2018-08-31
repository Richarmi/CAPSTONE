// import React from 'react';
//
// const GifItem = (image) => {
//   console.log(image);
//   return (
//     <div className="gif-item">
//       <img src={image.gif.images.downsized.url} />
//     </div>
//   )
// };
//
// export default GifItem;

import React from 'react';

const GifItem = ({gif, onGifSelect}) => {
      console.log(gif, "these are the gifs in GifItem");
  return (
    <div className="gif-item" onClick={() => onGifSelect(gif)}>
      <img src={gif.images.downsized.url} />
    </div>
  )
};

export default GifItem;
