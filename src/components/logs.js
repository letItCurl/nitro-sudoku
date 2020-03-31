import React, {useState, useEffect} from 'react'
import '../stylesheets/logs.css'
import {connect} from 'react-redux'
import { messageService1, messageService2,messageLogsToContent} from '../rxjs/_services';
import {checkInputAction} from '../actions/sudokuActions'


function Logs(props){

    const [userInput, setUserInput] = useState([""])
    const [shellPrompt, setShellPrompt] = useState(["waiting for ssh connection...","Logged in as letItCurl"])
    const [directoy, setDirectoy] = useState('/')
    const [lock, setLock] = useState(false)

    const consoleInput = (event)=>{
        const changes = event.currentTarget.value.toLowerCase()
        setUserInput(changes)
    }

    useEffect(()=>{
        var subscription = messageService2.getMessage().subscribe(message => {
            if (Array.isArray(message)) {setShellPrompt([...shellPrompt,...message])}
            else if (message==="--> SUDOKU VALIDATED ✅"){setLock(true);streamLogs()}
            else if (message==="UNLOCK_CONSOLE"){setLock(false)}    
        });
        return () =>{
            subscription.unsubscribe();
        }
    })

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
                        setShellPrompt([...shellPrompt,"engine.js readme.txt morecommands.txt"])
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
                case "cd engine/":
                        if(directoy==="/"){
                            setDirectoy(directoy+"engine/")
                            setShellPrompt([...shellPrompt,"entered in directory: ~/engine/"])
                        }else{
                            setShellPrompt([...shellPrompt,"you are already in engine directory"])
                        }
                        break;
                case "cat readme.txt":
                    if(directoy==="/engine/"){
                        setShellPrompt([...shellPrompt,...["~~~⚠~~~","Head up!!!!","you are almost there 🎯","to trigger the sudoku engine,","you need to run the file engine.js","type the following command:","node engine","~~~⚠~~~"]])
                    }
                    break;
                case "cat morecommands.txt":
                    if(directoy==="/engine/"){
                        setShellPrompt([...shellPrompt,...["##########","Hey, you are really good!","Here are some more commands:","to clean grid, type: clear data","to reset inital data, type: reset data","to clear the initial navigation with the modal, type: clear history","to clear this text, type: clear","##########"]])
                    }
                    break;
                case "node engine":
                    if(directoy==="/engine/"){
                        props.checkInputAction(props.sudoku.grid)
                    }else{
                        setShellPrompt([...shellPrompt,"internal/modules/cjs/loader.js:985 Error: Cannot find module 'engine'"])
                    }
                    break;
                case "node engine.js":
                    if(directoy==="/engine/"){
                        props.checkInputAction(props.sudoku.grid)
                    }else{
                        setShellPrompt([...shellPrompt,"internal/modules/cjs/loader.js:985 Error: Cannot find module 'engine'"])
                    }
                    break;
                case "node -v":
                    setShellPrompt([...shellPrompt,"v12.16.1"])
                    break;
                case "clear":
                    setShellPrompt([])
                    break;
                case "clear data":
                    props.clearDataAction()
                    break;
                case "reset data":
                    props.resetDataAction()
                    break;
                case "pwd":
                    setShellPrompt([...shellPrompt,directoy])
                    break;
                case "whoami":
                    setShellPrompt([...shellPrompt,"letItCurl"])
                    break;
                case "clear history":
                    localStorage.clear()
                    break;
                    
                default: setShellPrompt([...shellPrompt,"bash: command "+e.target.value.replace("cd","")+" don't exist in this system"])
            }
            setUserInput("")
        }
    }

        //can be worked out with RxJS...
        const streamLogs = () =>{
            props.sudoku.logs.forEach((val,ind)=>{
                setTimeout(() => {
                    setShellPrompt([...shellPrompt,...props.sudoku.logs.slice(0,ind),val])
                    if(Array.isArray(val)){
                        messageService1.sendMessage([val[0],val[1],val[2]])
                    }else if(val==="--- FINISHED ! ---"){
                        messageService1.sendMessage("--- FINISHED ! ---")
                        setLock(false)
                        setTimeout(()=>{
                            messageLogsToContent.sendMessage("SHOW-FINAL")
                        },1500) 
                    }
                }, 98*ind)
            })
        }

        

    return(
        <div className="logs-container" id="logs-container">
       
            <div className="log-text" id="logs">
                {
                    shellPrompt.map((val,ind)=>{
                        return ( 
                                <div key={ind}>{val}</div>
                        )
                    })
                }
                <p className="user"  onKeyPress={executeCommand}>{"letItCurl@52.0.14.116:~"+directoy+"$"}
                    <input pattern="[a-z]" onChange={consoleInput} type="text" disabled={lock} value={userInput}/>
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
const mapDispatchToProps = (dispatch) =>{
    return {
        checkInputAction: (grid)=> {dispatch(checkInputAction(grid))},
        clearDataAction: ()=> {dispatch({type: "CLEAR_DATA"})},
        resetDataAction: ()=> {dispatch({type: "RESET_DATA"})}
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Logs);

/*
{
                    logsToDisplay.map((val,ind)=>{
                        return ( 
                                <div key={ind}>{val}</div>
                        )
                    })
                }
*/