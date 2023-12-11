// src/App.js
import YouTubePlayer from './component/YouTubePlayer.jsx'; // Check this import path

const App = () => {
  const apiKey = 'AIzaSyBn4G75vV8hBI2I3vUOm5CV_C3QzDW55tc';
  const videoId = 'I2tkmhufJrg';

  return (
    <div>
      <h1>YouTube Video Player</h1>
      <YouTubePlayer videoId={videoId} apiKey={apiKey} />
    </div>
  );
};

export default App;



