import React, {useState} from 'react'
import '../stylesheets/logs.css'
import {connect} from 'react-redux'
import { messageService } from '../rxjs/_services';

function Logs(props){

    const [userInput, setUserInput] = useState([""])
    const [shellPrompt, setShellPrompt] = useState(["waiting for ssh connection...","Logged in as letItCurl"])
    const [directoy, setDirectoy] = useState('/')

    const consoleInput = (event)=>{
        const changes = event.currentTarget.value.toLowerCase()
        setUserInput(changes)
    }

    const executeCommand = (e) => {
        if(e.key==="Enter"){
            switch(e.target.value){
                case "":
                    setShellPrompt([...shellPrompt,""])
                    break;
                case "cd":
                    if(directoy==="/engine/"){
                        setDirectoy("/")
                        setShellPrompt([...shellPrompt,""])
                    }if(directoy==="/"){
                        setShellPrompt([...shellPrompt,""])
                    }else{
                        setShellPrompt([...shellPrompt,"you leave the ~/engine/ directory"])
                    }
                    break;
                case "ls":
                    if(directoy==="/engine/"){
                        setShellPrompt([...shellPrompt,"engine.js readme.txt"])
                    }else if(directoy==="/"){
                        setShellPrompt([...shellPrompt,"engine/"])
                    }else{
                        console.log(directoy)
                        setShellPrompt([...shellPrompt,"command not permited here"])
                    }
                    break;
                case "cd engine":
                    if(directoy==="/"){
                        setDirectoy(directoy+"engine/")
                        setShellPrompt([...shellPrompt,"entered in directory: ~/engine/"])
                    }else{
                        setShellPrompt([...shellPrompt,"you are already in engine directory"])
                    }
                    break;
                case "cat readme.txt":
                    if(directoy==="/engine/"){
                        setShellPrompt([...shellPrompt,"Head up!!!! you are almost there 🎯 to trigger the sudoku engine, you need to run the file node.js. type: node engine"])
                    }
                    break;
                case "node engine":
                    if(directoy==="/engine/"){
                        setShellPrompt([...shellPrompt,"--- 🔥 STARTING ENGINE 🔥 ---"])
                        streamLogs()
                    }else{
                        setShellPrompt([...shellPrompt,"nternal/modules/cjs/loader.js:985 Error: Cannot find module 'engine'"])
                    }
                    break;
                case "node -v":
                    setShellPrompt([...shellPrompt,"v12.16.1"])
                    break;
                default: setShellPrompt([...shellPrompt,"bash: command "+e.target.value.replace("cd","")+" don't exist in this system"])
            }
            setUserInput("")
        }
    }

    
        const [logs] = useState(props.sudoku.logs)

        const [logsToDisplay, setLogsToDisplay] = useState([])

        //can be worked out with RxJS...
        const streamLogs = () =>{
            logs.forEach((val,ind)=>{
                setTimeout(() => {
                    setLogsToDisplay([...logs.slice(0,ind),val])
                    if(Array.isArray(val)){
                        messageService.sendMessage([val[0],val[1],val[2]])
                    }
                }, 100*ind)
            })
        }

        

    return(
        <div className="logs-container" id="logs-container">
            
            <div onClick={streamLogs} className="log-text" id="logs" >
                {
                    shellPrompt.map((val,ind)=>{
                        return ( 
                                <div key={ind}>{val}</div>
                        )
                    })
                }
                {
                    logsToDisplay.map((val,ind)=>{
                        return ( 
                                <div key={ind}>{val}</div>
                        )
                    })
                }
                <p className="user" onKeyPress={executeCommand}>{"letItCurl@52.0.14.116:~"+directoy+"$"}
                    <input pattern="[a-z]" onChange={consoleInput} type="text" value={userInput}/>
                </p>
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
      sudoku: state
    }
  }

export default connect(mapStateToProps)(Logs);