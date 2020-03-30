import React, { useEffect } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import Content from './components/content'

import About from './components/modals/about'
import Docs from './components/modals/docs'
import Solve from './components/modals/solve'
import Welcome from './components/modals/welcome'
import DontLeave from './components/modals/dontLeave'


import './stylesheets/stylesheet.css'

function App() {
  useEffect(()=>{
    localStorage.removeItem('sudoku-dontleave');
  })
  
  return (
    <BrowserRouter>
        <Route path='/about' component={About}/>
        <Route path='/docs' component={Docs}/>
        <Route path='/solve' component={Solve}/>
        <Route path='/welcome' component={Welcome}/>
        <Route path='/dontleave' component={DontLeave}/>
        <Route path='/' component={Content}/>
    </BrowserRouter>
  );
}

export default App;


