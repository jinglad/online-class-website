import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import CourseContainer from './components/CourseContainer/CourseContainer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <CourseContainer></CourseContainer>
    </div>
  );
}

export default App;
