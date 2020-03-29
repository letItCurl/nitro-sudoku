import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import Navbar from './components/navbar/navbar'
import Grid from './components/grid/grid'
import Logs from './components/logs'

import About from './components/modals/about'
import Docs from './components/modals/docs'
import Solve from './components/modals/solve'

import {connect} from 'react-redux'

import './stylesheets/stylesheet.css'


function App({state}) {

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
            <Grid sudoku={state}/>
            <Logs/>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) =>{
  return {
    state: state
  }
}

export default connect(mapStateToProps)(App);
