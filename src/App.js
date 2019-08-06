import React , { useEffect } from 'react';
import './App.css';
import { getClasses } from './Timetable';


const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const HOURS = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

const columnHeaders = ['', ...DAYS].map(days => <th key={days}>{days}</th>);

const headers = (heading) => <><td>{heading}</td>{DAYS.map(days => (<td key={days}></td>))}</>

const rows = HOURS.map(hours => (<tr key={hours}>{headers(hours + `:00`)}</tr>));

function App() {
  useEffect(()=> {
    getClasses().then((days) => {console.log(days)})
  }, []);
  return ( 
    <div className="App">
        <h1>Mace Gyms</h1>
        <h2>Time Table</h2>
        <table className="time-table">
          <thead>
            <tr>{columnHeaders}</tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
   //<Timetable days={DAYS} hours={HOURS} /> 
  );
 }

export default App;
