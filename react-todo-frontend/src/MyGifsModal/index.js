import React from 'react';
import Modal from 'react-modal';
import EditGif from '../EditGif';
import './styles.css';

const MyGifsModal = (props) => {
  console.log("IN MYGIFS MODAL")
  console.log(props)
  if (!props.selectedGif) {
    return <div></div>;
  }

  return (
    <Modal
      isOpen={ props.MyGifsModalOpen }
      onRequestClose={ () => props.onRequestClose() }>
      <div className="my-gif-modal">
        <img src={ props.selectedGif.url } />
        <p className="this-gif-title"><strong>Title: </strong> { props.selectedGif.title }</p>

        <p><strong>Source: </strong><strong><a href={ props.selectedGif.url }>{ props.selectedGif.url }</a></strong></p>

        <p><strong>Rating: </strong> { props.selectedGif.rating }</p>

        <div>
        <p><strong>Description: </strong></p>
        </div>
        <p className="this-gif-description"> { props.selectedGif.description }</p>

        <EditGif closeAndEdit={props.closeAndEdit} handleFormChange={props.handleFormChange} gifToEdit={props.selectedGif}/>

        <div>
          <button onClick={() => props.onRequestClose()}><h3>Close Gif View</h3></button>
          <button onClick={props.deleteGif.bind(null, props.selectedGif._id)}><h3>Delete This Gif </h3></button>
        </div>

      </div>
    </Modal>
  );
};

export default MyGifsModal;
