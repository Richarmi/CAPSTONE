import React from 'react';
import Modal from 'react-modal';
import './styles.css';

const GifModal = (props) => {
  if (!props.selectedGif) {
    return <div></div>;
  }

  return (
    <Modal
      isOpen={ props.modalIsOpen }
      onRequestClose={ () => props.onRequestClose() }>
      <div className="gif-modal">
        <img src={ props.selectedGif.images.original.url } />
        <p className="this-gif-source"><strong>Source:</strong> <a href={ props.selectedGif.url }>{ props.selectedGif.url }</a></p>
        <p className="this-gif-rating"><strong>Rating:</strong> { props.selectedGif.rating }</p>

        <button onClick={() => props.onRequestClose()}><h3>Close Gif View</h3></button>
        <button onClick={props.addGif.bind(null, props.selectedGif)}><h3>Add to your list</h3></button>

      </div>
    </Modal>
  );
};

export default GifModal;
