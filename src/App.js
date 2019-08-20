import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { getClasses } from './ExampleAPIData';
import { Timetable } from "./Timetable"

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const HOURS = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

// import Nav from './Nav';
// import Home from './Home';
// import Teachers from './Teachers';
// import Courses from './courses';



function App() {
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    getClasses().then((classes) => { setAppointments(classes) })
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        
        <Timetable days={DAYS} hours={HOURS} appointments={appointments} />
      </div>
    </BrowserRouter>
  );
}

export default App;