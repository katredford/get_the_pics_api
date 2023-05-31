import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Pics from "./Pics"




function DisplayPics() {
   const [pictureData, setPictureData] = useState([]);
  
  useEffect(() => {
    axios.get('/api/pics')
        .then(res => setPictureData(res.data))
    }, [])

   
  // const cards = source.map(data => {
  //   return (
  //     <Card
  //       key={data.id}
  //       {...data}
  //     />
  // );
    
  // })
  return (
    <>
      {console.log(pictureData)}
      {/* {console.log(cards)} */}
    </>
  )
  
}

export default DisplayPics;