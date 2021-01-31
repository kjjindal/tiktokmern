import React from 'react';
import './VideoFooter.css';
import {MusicNote} from '@material-ui/icons';
import Ticker from 'react-ticker';

function VideoFooter({channel,description,song}){
    return (
        <>
        <div className="videofooter">
        <div className="videofooter__text">
        <h3>{channel} </h3>
        <p> {description} </p>
        <div className="videofooter__ticker">
            <MusicNote className="videofooter__icon" />
            <Ticker mode="smooth">
                {({index})=>(
                    <>
                    <p> {song}  </p>

                    </>
                )}
            </Ticker>
        </div>

        </div>
        <img  src='https://static.thenounproject.com/png/934821-200.png' className="videofooter__record" alt="disk"  />

        </div>




        </>
    )
}

export default VideoFooter