import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Nav from './Nav';
import Home from './Homepage';
import About from './About';
import Teachers from './Teachers';
import TimeTablePage from './TimeTablePage';
import Courses from './Classes';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Route exact path='/' component={Home} />
        <Route path='./About' component={About} />
        <Route path="/Teachers" component={Teachers}/>
        <Route path="/timetable" component={TimeTablePage} />
        <Route path="/Classes" component={Courses} />
      </div>
    </BrowserRouter>
  );
}

export default App;