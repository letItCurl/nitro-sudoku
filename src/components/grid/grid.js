import React from 'react'
import '../../stylesheets/grid.css'
import Line from './line'


function Grid(props){
    function blah(){
        console.log(props.sudoku[0])
    }
    return(
        <div className="grid-container">
            {
                props.sudoku.map((line, index)=>{
                    return(<Line key={index} line={line} index={index}/>)
                })
            }
           <button onClick={blah}>SUCK MY DICK</button>
        </div>
    )
}

export default Grid