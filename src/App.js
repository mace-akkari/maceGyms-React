import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Nav from './Nav';
import HomePage from './HomePage';
// import Teachers from './Teachers';
import TimeTablePage from './TimeTablePage';
// import Courses from './courses';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Route exact path='/' component={HomePage} />
        <Route path="/timetable" component={TimeTablePage} />
      </div>
    </BrowserRouter>
  );
}

export default App;