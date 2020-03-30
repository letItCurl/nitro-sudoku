import React, { useEffect, useState } from 'react';
import {messageLogsToContent} from '../rxjs/_services';

import Navbar from './navbar/navbar'
import Grid from './grid/grid'
import Logs from './logs'
import {Link} from 'react-router-dom'

import {connect} from 'react-redux'

function Content(props) {
    const [video, setVideo ] = useState(localStorage.getItem('sudoku-welcome')) 

    useEffect(()=>{
      var subscription = messageLogsToContent.getMessage().subscribe(message => {
        if (message==="SHOW-FINAL"){props.history.push('/conclusion')}
         
      });
        if(video===null){
            localStorage.setItem('sudoku-welcome', 'done');
            setVideo(localStorage.getItem('sudoku-welcome'))
            props.history.push('/welcome')
        }
        return () =>{
          subscription.unsubscribe();
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
