import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './css/App.css';

import Nav from './pages/Nav';
import Home from './pages/Homepage';
import Teachers from './pages/Teachers';
import TimeTablePage from './pages/TimeTablePage';
import Courses from './pages/Classes';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Route exact path='/' component={Home} />
        <Route path="/Teachers" component={Teachers}/>
        <Route path="/timetable" component={TimeTablePage} />
        <Route path="/Classes" component={Courses} />
      </div>
    </BrowserRouter>
  );
}

export default App;