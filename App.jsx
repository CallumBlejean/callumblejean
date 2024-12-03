import React from 'react';
import Header from './src/components/Header';
import ProjectSection from './src/components/ProjectSection';
import VideoSection from './src/components/VideoSection';
import './src/styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ProjectSection />
      <VideoSection />
    </div>
  );
}

export default App;