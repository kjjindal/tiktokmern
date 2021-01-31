import './App.css';
import React, { useEffect, useState } from 'react';
import Video from './Video';
import axios from './axios';



function App() {

  // this shuffle the array get array from mongo
  function shuffle(a) {
    var ctr = a.length, temp, index;
  
    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = a[ctr];
        a[ctr] = a[index];
        a[index] = temp;
    }
    return a;
  }
  

  const [videos,setvideos]=useState([]);

  useEffect(()=>{
    async function fetchPosts(){
      const res=await axios.get('/v2/posts')
      setvideos(shuffle(res.data))

    }

    fetchPosts();


  },[]);

  return (
    <div className="app">
    <div className="app__videos">

    {/* //both are same methods */}
    {/* {videos.map((videodata)=>(
      <Video key={videodata._id}  url={videodata.url} channel={videodata.channel} description={videodata.description} likes={videodata.likes} shares={videodata.shares} messages={videodata.messages} song={videodata.song}   />

    ))} */}
    {videos.map(({url,_id,channel,description,likes,shares,messages,song})=>(
      <Video key={_id}  url={url} channel={channel} description={description} likes={likes} shares={shares} messages={messages} song={song}   />

    ))}
   


    </div>

   

   
    </div>
  );
}

export default App;
