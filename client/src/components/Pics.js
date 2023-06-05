import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Pic(props) {
  // const [pictureData, setPictureData] = useState([]);
  // const pictureDataLength = Object.keys(pictureData).length;
  
 

  // useEffect(() => {
  //    axios.delete('/api/pics/:id')
  //      .then(res => setPictureData(res.data))

    
  // }, [pictureDataLength])
  return (
    <div>
      <h1>{props.title}</h1>
      <img src={props.url} alt=""/>
      <p>{props.description}</p>
      {/* <button>DELETE</button> */}
    </div>
  )
}