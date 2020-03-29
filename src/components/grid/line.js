import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import  {replaceLineAction, setSudokuNumberAction} from '../../actions/sudokuActions'
import { messageService1 } from '../../rxjs/_services'

const Line = (props) => {

    const [userLine, setUserLine] = useState(props.line)
    const [lockInput, setLockInput] = useState(false)
    
    function handleUserChange(event){
        const str = event.target.value
        const strLength = str.length
        const lastLetter =  str[strLength-1]
        var copy = JSON.parse(JSON.stringify(userLine))
        const index = event.target.id // y
        if(lastLetter <= 9 && lastLetter > 0){
            copy[index] = parseInt(lastLetter, 10)
            props.replaceLine(copy, parseInt(index, 10), props.index)
            setUserLine(copy)
        }
    }
    
    const handleUserKeyDown = (event) =>{
        const keyPress =  event.key
        var copy = JSON.parse(JSON.stringify(userLine))
        const index = event.target.id
        if(keyPress==="Backspace"){
            copy[index] = 0
            props.replaceLine(copy, parseInt(index, 10), props.index)
            setUserLine(copy)
        }
    }
    const handleOnFocus = (event) =>{
        event.preventDefault()
        var val = event.target.value
        event.target.value = ""
        event.target.value = val
    }

    const [focus, setFocus] = useState([])

    useEffect(()=>{
        var subscription = messageService1.getMessage().subscribe(message => {
            console.log(message.length)
            if (message.length===3) {setLockInput(true);setFocus(message);displayCrossAndMark(message)}
            else{setLockInput(false);console.log("--- FINISHED ! ---")}
        });
        return () =>{
            subscription.unsubscribe();
        }
    })


    const displayCrossAndMark = (focus) =>{
        const currentLine = document.getElementsByClassName("basic-grid")[props.index].children
        props.setSudokuNumber(focus[0],focus[1],focus[2])
        //setUserLine(props.sudoku.grid[focus[1]])
        //focus the row
        if(focus[1]==props.index){
            for(let number of currentLine){
                number.classList.add('focus')
                setTimeout(()=>{
                    number.classList.remove('focus')
                }, 700)
            }

            //set it to done
            for(let number of currentLine){ 
                if(number.id==focus[0]){
                    number.getElementsByTagName('input')[0].value = focus[2]
                    number.classList.add('done')     
                }
            }
        }
        //focus the columns
        for(let number of currentLine){
            if(number.id==focus[0]){
                number.classList.add('focus')
                setTimeout(()=>{
                    number.classList.remove('focus')
                }, 700)
            }
        }
    }
    
    return (
        <section className="basic-grid" id={props.index}>
            { 
                userLine.map((number,index) => {
                    if(number===0){
                        return (
                            <div className="card" key={index} id={index}  onKeyDown={handleUserKeyDown}>
                                <input id={index} type="text" onClick={handleOnFocus} onChange={handleUserChange} disabled={lockInput}  value=""/>
                            </div>)
                        
                    }else{
                        return (
                            <div className="card" key={index} id={index}  onKeyDown={handleUserKeyDown}>
                                <input id={index} type="text" onClick={handleOnFocus} onChange={handleUserChange} disabled={lockInput} value={number}/>
                            </div>)
                    }
                
                })
            }

            
        </section>
        );
}

const mapStateToProps = (state) =>{
    return {
      sudoku: state
    }
  }

const mapDispatchToProps = (dispatch) =>{
    return {
        replaceLine: (line, x, y) =>{dispatch(replaceLineAction(line,x,y))},
        setSudokuNumber: (x, y, val) =>{dispatch(setSudokuNumberAction(x, y, val))}
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Line);
