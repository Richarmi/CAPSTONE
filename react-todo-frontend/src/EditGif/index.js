import React, { Component } from 'react';


const EditGif = (props) =>  {

  return (
    <div>
      <form onSubmit={props.closeAndEdit}>
        <label>
          <strong>Edit Gif Title:</strong>
          <input className="this-input-field" type="text" name="title" onChange={props.handleFormChange} placeholder="Enter Title Here"/>
        </label>
        <label>
          <strong>Edit Description:</strong>
          <input className="this-input-field" type="text" name="description" onChange={props.handleFormChange} placeholder="Enter Description Here"/>
        </label>
        <label>
          <strong>Edit Gif Rating:</strong>
          <input className="this-input-field" type="text" name="rating" onChange={props.handleFormChange} placeholder="Enter Gif Rating Here"/>
        </label>
        <input type='Submit' value="Edit Gif"/>
      </form>
    </div>

    )
  }

export default EditGif;
