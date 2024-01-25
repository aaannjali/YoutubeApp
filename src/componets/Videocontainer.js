import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constant';
import VideoCart from './VideoCart';

const Videocontainer = () => {
  const [videos, setvideos] = useState([]);

  useEffect( ()=> {
   getVideos();
  },[]);

  const getVideos = async () =>{
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    setvideos(json.items);
  };

  return (
    <div className='flex flex-wrap'>
      {videos.map(videos => <VideoCart key={videos.id} info={videos} />)}
     
    </div>
  )
}

export default Videocontainer
