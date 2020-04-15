import React, { useState } from 'react';
import {checkInputAction} from '../actions/sudokuActions'
import {connect} from 'react-redux'

import '../stylesheets/controls.css'

function Controls (props){

    const [lock, setLock] = useState(false)
    
    function logThis(){
        console.log("SRCYGVUHBIJ")
    }

    function start(){
        console.log(props.sudoku.grid)
        props.checkInputAction(props.sudoku.grid)
    }
    function clear(){
        console.log(props.sudoku.grid)
        props.clearDataAction()
    }
    function change(){
        console.log(props.sudoku.grid)
        props.changeDataAction()
    }

    return (
        <div className="logs-container" id="controls-container">    
                <h1 className="control-headings">Sudoku Controller</h1>
                <div className="btn-group">
                    <button class="btn-action" disabled={lock} onClick={start}>Start</button>
                    <button class="btn-action" disabled={lock} onClick={clear}>Clear</button>
                    <button class="btn-action" disabled={lock} onClick={change}>Change</button>
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

