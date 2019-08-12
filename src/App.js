import React, { useState, useEffect } from 'react';
import './App.css';
import { getClasses } from './ExampleAPIData';
import { Timetable } from "./Timetable"

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const HOURS = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

function App() {
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    getClasses().then((classes) => { setAppointments(classes) })
  }, []);
  return (
    <div className="App">
      <h1>Mace Gyms</h1>
      <h2>Time Table</h2>
      <Timetable days={DAYS} hours={HOURS} appointments={appointments} />
    </div>
  );
}

export default App;