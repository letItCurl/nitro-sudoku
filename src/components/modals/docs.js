import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import CrossIcon from './crossIcon'
import {Link} from 'react-router-dom'

const Docs = (props) =>{

    const leaveMe = (e)=>{
        if(e.target.className==="modal"){
            props.history.push('/')
        }
    }

    useEffect(()=>{
        localStorage.setItem('sudoku-dontleave','dontleave')
    })

    return ReactDOM.createPortal(
        <div className="modal" onClick={leaveMe}>
            <div className="modal-content">
                <div className="modal-header">
                    <h1>Docs</h1>
                
                    <div className="modal-text customized-scrollbar">
                        <h4>Let's reacap why you are here:</h4>
                        <p>You need to solve this sudoku, otherwise a nuclear war is engage. (don't ask me why)</p>
                        <p>The linux shell let's you navigate in a tree of files and directories.</p>
                        <p>Here, we start in the user's directory. (which is the user letItCurl)</p>
                        <h3>To trigger the sudoku engine, you need to find the directory "engine/" and read the file "readme.txt" to find the next instructions.</h3>
                        <h3>To do so, you need to use the following commands:</h3>
                        <h4>To list files in the current directory, type:</h4>
                        <h4>ls</h4>
                        <h4>To change directoy type:</h4>
                        <h4>cd [directory name]</h4>
                        <p>example: if I found, thanks to the command "ls", a directory named "home", I can enter in the directory "home" by typing:</p>
                        <p>cd home</p>
                        <h4>To read a file, type:</h4>
                        <h4>cat [file name]</h4>
                        <p>pro tip: don't forget the extention of the file (the .txt)</p>
                        <Link to="/about" className="crossIcon" ><h3>~>More info in the about page.</h3></Link>
                        <p>Good luck!</p>
                    </div>
                </div>
                <Link to="/" className="crossIcon" ><CrossIcon /></Link>
            </div>
            
        </div>,
        document.querySelector('#modal')
    )
}

export default Docs