import React from 'react';
import Image from 'next/image';

const VideoComponent = ({ videoLink, videoText, thumbnailSrc, videoDescription }) => {
  return (
    <a href={videoLink} target="_blank" rel="noopener noreferrer">
      <div className="horizontal-stack mt-10">
        <div className="flex hstack">
        
        <iframe width="50%" height="500" allowFullScreen
					src={`https://www.youtube.com/embed/${thumbnailSrc}?rel=0&autoplay=0&loop=1&mute=1`}>    
				</iframe>
          <div className="video-text-container">

            <p className='text-xl font-bold'>{videoText}</p>

            <p>{videoDescription}</p>
         
            

          </div>
        </div>
      </div>
    </a>
  );
};

export default VideoComponent;

