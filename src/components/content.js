import React, { useEffect, useState } from 'react';

import Navbar from './navbar/navbar'
import Grid from './grid/grid'
import Logs from './logs'
import {Link} from 'react-router-dom'

import {connect} from 'react-redux'

function Content(props) {
    const [video, setVideo ] = useState(localStorage.getItem('sudoku-welcome')) 

    useEffect(()=>{
        if(video===null){
            localStorage.setItem('sudoku-welcome', 'done');
            setVideo(localStorage.getItem('sudoku-welcome'))
            props.history.push('/welcome')
        }
    })

    const whatisthis = (e)=>{
      const dont = localStorage.getItem('sudoku-dontleave')
      if(e.clientY<=20&&dont){
        props.history.push('/dontleave')
      }
    }

  return (
      <div className="App" id="body" onMouseMove={whatisthis}>
        <Navbar/>
        <main>
          <Link to="/welcome" id="title-link"><h1 id="title">Welcome !</h1></Link>
          <p id="title">Hehe. Got Somthing for you 🎁</p>
          <div className="tracker-engine">
            <Grid sudoku={props.state}/>
            <Logs/>
          </div>
        </main>
      </div>

  );
}


const mapStateToProps = (state) =>{
    return {
      state: state
    }
  }
  
export default connect(mapStateToProps)(Content);
