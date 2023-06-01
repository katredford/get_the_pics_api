import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pics from "./Pics"




function DisplayPics() {
   const [pictureData, setPictureData] = useState([]);
  //const pictureDataLength = Object.keys(pictureData).length;
  
  // const getData = () => {
  //   axios.get('/api/pics')
  //       .then(res => setPictureData(res.data))
  //   }

  useEffect(() => {
     axios.get('/api/pics')
       .then(res => setPictureData(res.data))
    //    .then(res => {
    //   return res.json()
    //    })
    //    .then(data => {
    //   console.log(data)
    // })
    //  getData()
  // const cards = source.map(data => {
  //   return (
  //     <Card
  //       key={data.id}
  //       {...data}
  //     />
  // );
    
  }, [])
  
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
  {/* { pictureData.map((data) => {
    return (
      // <Pics
      //   key={data.id}
      //   {...data}
      // />
      <p style={{ fontSize: 20, color: 'white' }}>{data.url}</p>
    )
  })
} */}
      
         {/* <Pics
        key={pictureData.id}
        {...pictureData}
       /> */}
      {console.log(pictureData.data)}
      {cards}
    </>
  )
  
}

export default DisplayPics;