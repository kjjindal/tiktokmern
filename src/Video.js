import './Video.css';
import React, { useRef, useState } from 'react';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';
import VideoHeader from './VideoHeader';




function Video({url,channel,description,song,shares,likes,messages}){
    const videoref=useRef(null);
    const [playing,setplaying]=useState(false);

    const handlevideopress=()=>{
        if(playing){
            videoref.current.pause();
            setplaying(false)

        }
        else{
            videoref.current.play();
            setplaying(true);

        }
    }
   

    return (
        <>
        <div className="video">

        <video loop  className="video__player" ref={videoref} onClick={handlevideopress} src={url}  >  </video>
    <VideoHeader  />    
    <VideoFooter channel={channel}  description={description}  song={song} />
    <VideoSidebar  likes={likes} messages={messages}  shares={shares}  />

    

        </div>



        </>
    )
}


export default Video;


        
        
        



