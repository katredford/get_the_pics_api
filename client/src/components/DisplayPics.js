import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pics from "./Pics"




function DisplayPics() {
   const [pictureData, setPictureData] = useState([]);
  const pictureDataLength = Object.keys(pictureData).length;
  
 

  useEffect(() => {
     axios.get('/api/pics')
       .then(res => setPictureData(res.data))

    
  }, [pictureDataLength])
  
  const cards = pictureData.data?.map(dataPic => {
    return (
      <Pics
        key={dataPic.id}
        {...dataPic}
      />
    )
  })
  
  return (
    <>
      {console.log(pictureData.data)}
      {cards}
    </>
  )
  
}

export default DisplayPics;