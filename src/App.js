import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Nav from './Nav';
import Home from './Homepage';
import Teachers from './Teachers';
import { Timetable } from "./Timetable"
import TimeTablePage from './TimeTablePage';
// import Courses from './courses';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Route exact path='/' component={Home} />
        <Route path="/Teachers" component={Teachers}/>
        <Route path="/timetable" component={TimeTablePage} />
      </div>
    </BrowserRouter>
  );
}

export default App;