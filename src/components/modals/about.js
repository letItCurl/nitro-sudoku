import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'
import CrossIcon from './crossIcon'
import PerfectScrollbar from 'react-perfect-scrollbar'
const About = (props) =>{

    

    const leaveMe = (e)=>{
        if(e.target.className==="modal"){
            props.history.push('/')
        }
    }


    return ReactDOM.createPortal(
        <div className="modal" onClick={leaveMe}>
            <div className="modal-content">
                <div className="modal-header">
                    <h1>about</h1>
                    <PerfectScrollbar className="modal-text customized-scrollbar">
                        <p>⬇ scroll down ⬇</p>
                        <h3>Hey Wazup !</h3>
                        <p>I'm roland a.k.a letItCurl in gitHub!</p>
                        <p>If you are here is beacause you are a bit more curious than the other, I like you ! (I'm saving your ip adress)</p>
                        <p>Just kidding...</p>
                        <h3>So, what this algorithm can do ?</h3>
                        <p>It can solve any sudoku :p</p>
                        <p>Type new numbers in the grid and you will see how the program can adapt !</p>
                        <p>This algorithm can't do one thing: Damned Sudokus.</p>
                        <p>Those sudokus are from the devil ! basically if you want to solve one of those, you will need to guess a numbers in the grid to continue.</p>
                        <p>The current engine can't make a random guess, but it can detect that a guess is required and then it will block the resolution.</p>
                        <h3>LINKS:</h3>
                        <a className="out-link" href="https://github.com/letItCurl/nitro-sudoku"><p>source files of this app !</p></a>
                        <a className="out-link" href="https://github.com/letItCurl/sudoku-solver-engine"><p>source files of my sudoku engine !</p></a>
                        <a className="out-link" href="https://linkedin.com/in/roland-lopez-developer"><p>Me ;)</p></a>
                    </PerfectScrollbar>
                </div>
                <Link to="/"className="crossIcon"><CrossIcon /></Link> 
            </div>
        </div>,
        document.querySelector('#modal')
    )
}

export default About