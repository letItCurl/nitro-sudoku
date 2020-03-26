import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import Navbar from './components/navbar/navbar'
import Grid from './components/grid/grid'
import Logs from './components/logs'
import Spinner from './components/spinner/spinner'

import About from './components/modals/about'
import Docs from './components/modals/docs'
import Solve from './components/modals/solve'

import './stylesheets/stylesheet.css'

function App(props) {

  const row1 = [6,0,7,9,0,0,2,0,3]
  const row2 = [9,0,3,4,2,0,8,6,0]
  const row3 = [0,0,0,0,8,3,0,0,1]
  const row4 = [5,3,0,0,6,0,9,0,2]
  const row5 = [0,0,0,0,0,0,0,3,7]
  const row6 = [4,0,0,1,3,2,5,0,0]
  const row7 = [0,4,0,0,7,0,6,0,9]
  const row8 = [7,2,0,0,0,0,0,0,0]
  const row9 = [8,9,1,2,5,0,0,7,0]
  const sudoku = [] 
  sudoku.push(row1,row2,row3,row4,row5,row6,row7,row8,row9)
  sudoku.map(line=>{
    line.map((number, index) => {
      (number===0) ? line[index]= "" : line[index]=number
    })
  })
  
  return (
    <BrowserRouter>
      <Route path='/about' component={About}/>
      <Route path='/docs' component={Docs}/>
      <Route path='/solve' component={Solve}/>
      <div className="App" id="body">
        <Navbar/>
        <main>
          <h1 id="title" >Bored at work ?</h1>
          <p id="title">Hehe. Got Somthing for you 🎁</p>
          <div className="tracker-engine">
            <Grid sudoku={sudoku}/>
            <Logs/>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
