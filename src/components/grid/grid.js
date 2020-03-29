import React from 'react'
import '../../stylesheets/grid.css'
import Line from './line'

function Grid(props){

    const consoleLine = ()=>{
        console.log(props.sudoku.grid[0])
    }
    const check = ()=>{
        console.log(props.sudoku.checkInput(3,1))
    }
    const getFocus = ()=>{
        console.log(props.sudoku.focus)
    }

    

    return(
        <div className="grid-container">
            {
                props.sudoku.grid.map((line, index)=>{
                return(<Line key={index} line={line} index={index}></Line>)
                })
            }
            <button onClick={consoleLine}>test</button>
        </div>
    )
}

export default Grid