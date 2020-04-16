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
                        <p>If you're here, it's probably because you're a bit more curious than the average ... I like you ! (I'm saving your ip adress)</p>
                        <p>Just kidding...</p>
                        <h3>So, what can this do ?</h3>
                        <h4>It can solve any sudoku :p</h4>
                        <p>Type new numbers in the grid and you will see how my program can adapt itself !</p>
                        <h4>It corrects you on the fly !</h4>
                        <p>There is only one thing the algorithm cannot solve: Damned Sudokus.</p>
                        <p>Those sudokus are way to evil ! Basically if you want to solve one of those, you will need to guess a number in the grid to continue.</p>
                        <p>The current engine can't make random guesses, but it can detect that a guess is required and then block the solving process.</p>
                        <h4>Why the algorithm doesn't start if you put random value: It's too risky to sumbit a multiple solution sudoku.</h4>
                        <p>But as long as it is a normal sudoku, you can enter values and solve-it right away !</p>
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