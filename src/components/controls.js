import React, { useState, useEffect } from 'react';
import {checkInputAction} from '../actions/sudokuActions'
import {connect} from 'react-redux'
import {messageService2} from '../rxjs/_services';

import '../stylesheets/controls.css'

function Controls (props){

    const [lock, setLock] = useState(false)
    
    useEffect(()=>{
        var subscription = messageService2.getMessage().subscribe(message => {
            if (message==="--> SUDOKU VALIDATED ✅"){setLock(true)}
            if (message==="UNLOCK"){setLock(false);}
        });
        return () =>{
            subscription.unsubscribe();
        }
    })

    function start(){
        props.checkInputAction(props.sudoku.grid)
    }
    function clear(){
        props.clearDataAction()
    }
    function change(){
        props.changeDataAction()
    }

    return (
        <div className="logs-container" id="controls-container">    
                <h1 className="control-headings">Sudoku Controller</h1>
                <div className="btn-group">
                    <a href="#lookthatlogstream"><button className="btn-action" disabled={lock} onClick={start}>Start</button></a>
                    <button className="btn-action" disabled={lock} onClick={clear}>Clear</button>
                    <button className="btn-action" disabled={lock} onClick={change}>Change</button>
                </div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
      sudoku: state
    }
  }
const mapDispatchToProps = (dispatch) =>{
    return {
        checkInputAction: (grid)=> {dispatch(checkInputAction(grid))},
        clearDataAction: ()=> {dispatch({type: "CLEAR_DATA"})},
        resetDataAction: ()=> {dispatch({type: "RESET_DATA"})},
        changeDataAction: ()=> {dispatch({type: "CHANGE_DATA"})}
    }
  }


export default connect(mapStateToProps,mapDispatchToProps)(Controls)

