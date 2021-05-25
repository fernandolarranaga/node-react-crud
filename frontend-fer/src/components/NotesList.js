import React, { Component } from 'react';
import ReactPlayer from "react-player";


const NotesList = ({name="Fernando ", apellido="Martínez"}) => {
    return (
      <div className="card card-body">
        <p>Video de la Orden de Isabel la Católica, video cortesia de <b>{name}</b><b>{apellido}</b></p>
        <ReactPlayer className="card card-body"
          url="https://www.youtube.com/watch?v=IDBRq0bS_og"
          playing
          controls
          volume="0.5"
        />
      </div>
    )
  }

  export default NotesList;