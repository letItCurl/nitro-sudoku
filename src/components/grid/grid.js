import React from 'react'
import '../../stylesheets/grid.css'
import Line from './line'

function Grid(props){

    return(
        <div className="grid-container">
            {
                props.sudoku.map((line, index)=>{
                    return(<Line key={index} line={line}/>)
                })
            }
        </div>
    )
}

export default Grid