// src/components/YouTubePlayer.js
import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import axios from 'axios';

const YouTubePlayer = ({ videoId, apiKey }) => {
  const [videoInfo, setVideoInfo] = useState(null);

  // Fetch video info when component mounts
  useEffect(() => {
    const fetchVideoInfo = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos`,
          {
            params: {
              part: 'snippet',
              id: videoId,
              key: apiKey,
            },
          }
        );
        setVideoInfo(response.data.items[0].snippet);
      } catch (error) {
        console.error('Error fetching video info:', error);
      }
    };

    fetchVideoInfo();
  }, [videoId, apiKey]);

  const onReady = (event) => {
    // You can add additional logic here if needed
    console.log('Video Player is ready:', event);
  };

  if (!videoInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <YouTube videoId={videoId} onReady={onReady} />
      <h2>{videoInfo.title}</h2>
      <p>{videoInfo.description}</p>
    </div>
  );
};

export default YouTubePlayer;

