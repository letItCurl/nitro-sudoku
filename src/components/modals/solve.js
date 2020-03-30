import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'
import CrossIcon from './crossIcon'

const Solve = (props) =>{
    
    const leaveMe = (e)=>{
        if(e.target.className==="modal"){
            props.history.push('/')
        }
    }

    return ReactDOM.createPortal(
        <div className="modal" onClick={leaveMe}>
            <div className="modal-content">
                <div className="modal-header">
                    <h1>solve</h1>
                    <div className="modal-text customized-scrollbar">
                        <h4>To use this sudoku solver,</h4>
                        <h4>you will have to do it from a linux shell !</h4>
                        <p>The linux shell is the way to speak to the linux kernel, and the linux kernel is what handles low level programs as memory manager and so forth.</p>
                        <h4>Here the linux shell is:</h4>
                        <div className="log-text" id="logs-show" >
                            <p className="user" >{"letItCurl@52.0.14.116:~$"}
                                <input pattern="[a-z]"type="text" placeholder="You can type things here !"/>
                            </p>
                        </div>
                        <p>Basically, with this text box, you can speak with the algorithm that solve sudokus !</p>
                        <p>You thougth that this would be easy as a button click ?! hell no!</p>
                        <h4>This time, I want you, to get hand on this an try to understand what i'm doing all day behind my screen.</h4>
                        <p>This journey start with, docs, yhea. Read it carfully, all info is there.</p>
                        <Link to="/docs"><h2>~>Go to docs !</h2></Link>
                        <h4>All these pop-ups can be found in the navigation bar, check-it out there is a surprise ;)</h4>
                    </div>
                </div>
                <Link to="/" className="crossIcon" ><CrossIcon /></Link> 
            </div>  
            
        </div>,
        document.querySelector('#modal')
    )
}

export default Solve