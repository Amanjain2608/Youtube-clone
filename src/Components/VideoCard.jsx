import React from 'react';
import {abbreviateNumber} from "js-abbreviation-number";
import {Link} from "react-router-dom";
import {BsFillCheckCircleFill} from "react-icons/bs";
import VideoLength from '../Shared/VideoLength';

const VideoCard = ({video}) => {
  return (
   <Link to={`video/${video?.videoId}`}>
    <div className="flex flex-col mb-8">
      <div className="relative h-48 md:rounded-xl md:h-40 overflow-hidden">
        <img className='h-full w-full object-cover' src={video?.thumbnails?.[0].url}/>
        {video?.lengthSeconds && (
          <VideoLength time={video?.lengthseconds}/>
        )}
      </div>
    </div>
   </Link>
  )
}

export default VideoCard
