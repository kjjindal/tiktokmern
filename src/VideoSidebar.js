import React, { useState } from 'react';
import './VideoSidebar.css';
import {Favorite,FavoriteBorder,Message,Share} from '@material-ui/icons';


function VideoSidebar({likes,messages,shares}){

    const [liked,setliked]=useState(false);
    return (
        <>
        <div className="videosidebar">
        <div className="videosidebar__button">
        {liked ? (<Favorite  fontSize="large" onClick={()=>{ setliked(false) }} />):(<FavoriteBorder  fontSize="large" onClick={()=>{ setliked(true) }}  />)}
        
        <p>{liked?likes+1:likes} </p>

        </div>
        <div className="videosidebar__button">
        <Message  fontSize="large" />
        <p> {messages}</p>


            
        </div>
        <div className="videosidebar__button">
        <Share  fontSize="large" />
        <p> {shares} </p>


            
        </div>

        </div>



        </>
    )
}


export default VideoSidebar;