import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { getClasses } from './ExampleAPIData';


import Nav from './Nav';
import Home from './Homepage';
// import Teachers from './Teachers';
import { Timetable } from "./Timetable"
// import Courses from './courses';

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const HOURS = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

function App() {
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    getClasses().then((classes) => { setAppointments(classes) })
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Route exact path='/' component={Home} />
        <Route path="/timetable" render={() =>
          <Timetable days={DAYS} hours={HOURS} appointments={appointments} />} />
      </div>
    </BrowserRouter>
  );
}

export default App;