import React, { useEffect } from 'react'
import '../../stylesheets/grid.css'
import Line from './line'

function Grid(props){

    const consoleLine = ()=>{
        console.log(props.sudoku.grid[0])
    }
    return(
        <div className="grid-container">
            {
                props.sudoku.grid.map((line, index)=>{
                return(<Line key={index} line={line} index={index}></Line>)
                })
            }
        </div>
    )
}

export default Grid