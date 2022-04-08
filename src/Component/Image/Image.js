import React, { useState } from 'react';

const Image = () => {
    const [image,setImage]=useState(null)
    const handleSubmit=e=>{
        e.preventDefault()
        if(!image){
            return;
        }
        const formData=new FormData();
     
        formData.append('image', image);
    
    fetch('https://intense-badlands-37074.herokuapp.com/images', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(result => {
      if(result.insertedId){
    
    
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
    }
    return (
        <form onSubmit={handleSubmit}>
        <input style={{width:'40%'}} type="file" placeholder='Choose Image' accept='image/*' onChange={e=>setImage(e.target.files[0])}  />
        <input type="submit" />
        </form>
    );
};

export default Image;