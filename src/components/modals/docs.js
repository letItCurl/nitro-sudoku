import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import CrossIcon from './crossIcon'
import {Link} from 'react-router-dom'
import PerfectScrollbar from 'react-perfect-scrollbar'
const Docs = (props) =>{

    const leaveMe = (e)=>{
        if(e.target.className==="modal"&&localStorage.getItem('sudoku-docs')==='done'){
            props.history.push('/')
        }
    }
    const [link, setLink] = useState(false)
    useEffect(()=>{
        localStorage.setItem('sudoku-dontleave','dontleave')
        if(localStorage.getItem('sudoku-docs')==='done'){
            setLink(true)
        }
    })
    const setItDone = ()=>{
        localStorage.setItem('sudoku-docs','done')
    }
    return ReactDOM.createPortal(
        <div className="modal" onClick={leaveMe}>
            <div className="modal-content">
                <div className="modal-header">
                    <h1>Docs</h1>
                
                    <PerfectScrollbar className="modal-text customized-scrollbar">
                        <p>⬇ scroll down ⬇</p>
                        <h3>To trigger the sudoku engine, you need to find the directory "engine/" and read the file "readme.txt" to find the next instructions.</h3>
                        <div className="log-text" id="logs-show">
                            <p className="user">{"letItCurl@52.0.14.116:~$"}
                                <input pattern="[a-z]"  type="text" readOnly={true} value="type commands here"/>
                            </p>
                        </div>
                        <p>*fig above: a linux console*</p>
                        <h3>CHEAT-SHEET</h3>
                        <p>##############</p>
                        <h4>pwd:</h4>
                        <div className="log-text" id="logs-show">
                            <p className="user">display current position</p>
                            <p className="user">in the file tree</p>
                            <p className="user">{"letItCurl@52.0.14.116:~$"}
                                <input pattern="[a-z]"  type="text" readOnly={true} value="pwd"/>
                            </p>
                        </div>
                        <p>##############</p>
                        <h4>ls:</h4>
                        <div className="log-text" id="logs-show">
                            <p className="user">display content of</p>
                            <p className="user">current file</p>
                            <p className="user">{"letItCurl@52.0.14.116:~$"}
                                <input pattern="[a-z]"  type="text" readOnly={true} value="ls"/>
                            </p>
                        </div>
                        <p>##############</p>
                        <h4>cd:</h4>
                        <div className="log-text" id="logs-show">
                            <p className="user">change directory</p>
                            <p className="user">{"letItCurl@52.0.14.116:~$"}
                                <input pattern="[a-z]"  type="text" readOnly={true} value="cd (here you put file name)"/>
                                <input pattern="[a-z]"  type="text" readOnly={true} value="cd engine"/>
                            </p>
                        </div>
                        <p>##############</p>
                        <h4>cat:</h4>
                        <div className="log-text" id="logs-show">
                            <p className="user">read file</p>
                            <p className="user">{"letItCurl@52.0.14.116:~$"}
                                <input pattern="[a-z]"  type="text" readOnly={true} value="cat (here you put file name)"/>
                                <input pattern="[a-z]"  type="text" readOnly={true} value="cat readme.txt"/>
                            </p>
                        </div>
                        <p>##############</p>
                        <h4>change data:</h4>
                        <div className="log-text" id="logs-show">
                            <p className="user">to change sudoku !</p>
                            <p className="user">{"letItCurl@52.0.14.116:~$"}
                                <input pattern="[a-z]"  type="text" readOnly={true} value="change data"/>
                            </p>
                        </div>
                        <p>##############</p>
                        <p>Challenge for you: there is more commands in the file: morecommands.txt</p>
                        <p>try to read that file ;)</p>
                        {   (()=>{if(!link){
                        return <Link onClick={setItDone}  to="/about"><h3 className="next-btn">~>NEXT</h3></Link>
                            }      
                        })()        
                        }
                    </PerfectScrollbar>
                </div>
                {   (()=>{if(link){
                        return <Link to="/"className="crossIcon"><CrossIcon /></Link> 
                            }      
                        })()        
                }
            </div>
            
        </div>,
        document.querySelector('#modal')
    )
}

export default Docs