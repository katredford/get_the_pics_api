import React, { useState, useEffect } from 'react';
import axios from "axios";

const client = axios.create({
  baseURL: "/api/pics",
  credentials: "same-origin",
   method: 'POST'

});

export default function AddPic() {
  // const [pictureData, setPictureData] = useState([]);
  // const pictureDataLength = Object.keys(pictureData).length;
  
 

  // useEffect(() => {
  //   axios.delete('/api/pics/:id')
  //     .then(res => setPictureData(res.data))

    
  // }, [pictureDataLength])



  const [title, setTitle] = useState('');
   
   const [posts, setPosts] = useState([]);

   // ...

   const handleSubmit = (e) => {
     e.preventDefault();
     const title = e.target.title.value
     const url = e.target.url.value
     const description = e.target.description.value
     addPosts(title, url, description);
     //, body
    //  console.log(title)
   };

  
  const addPosts = (title, url, description) => {
    console.log(title)
    axios.post('/api/pics', {
    title: title,
      url: url,
    description: description
  })
  .then(function (response) {
    console.log(response);
     setPosts([response.data, ...posts]);
  })

  .catch(function (error) {
    console.log(error);
  });
      // client
      //    .post({
      //       title: title,
      //       // description: body
      //    })
      //    .then((response) => {
      //       setPosts([response.data, ...posts]);
      //    });
      // setTitle('');
      // setBody('');
   };
   
  
  return (
    <>
     <form onSubmit={handleSubmit}>
  {/* <label>
    Name: */}
        <input type="text" name="title"  placeholder='title'/>
        <input type="text" name="url" placeholder='url'/>
        <textarea type="text" name="description" placeholder='description'/>
  {/* </label> */}
  <input type="submit" value="Submit" />
</form>
    </>
  )
}