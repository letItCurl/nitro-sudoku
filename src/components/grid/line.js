import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import  {replaceLineAction} from '../../actions/sudokuActions'
import { messageService } from '../../rxjs/_services'

const Line = (props) => {

    const [userLine, setUserLine] = useState(props.line)
    
    function handleUserChange(event){
        const str = event.target.value
        const strLength = str.length
        const lastLetter =  str[strLength-1]
        var copy = JSON.parse(JSON.stringify(userLine))
        const index = event.target.id
        if(lastLetter <= 9 && lastLetter > 0){
            copy[index] = parseInt(lastLetter, 10)
            props.replaceLine(copy, props.index)
            setUserLine(copy)
        }
    }
    
    const handleUserKeyDown = (event) =>{
        const keyPress =  event.key
        var copy = JSON.parse(JSON.stringify(userLine))
        const index = event.target.id
        if(keyPress==="Backspace"){
            copy[index] = 0
            props.replaceLine(copy, props.index)
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
        var subscription = messageService.getMessage().subscribe(message => {
            if (message.join()!==focus.join()) {setFocus(message);displayCrossAndMark(message)}else{setFocus([])}
        });
        return () =>{
            subscription.unsubscribe();
        }
    })


    const displayCrossAndMark = (focus) =>{
        const currentLine = document.getElementsByClassName("basic-grid")[props.index].children
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
                                <input id={index} type="text" onClick={handleOnFocus} onChange={handleUserChange} value=""/>
                            </div>)
                        
                    }else{
                        return (
                            <div className="card" key={index} id={index}  onKeyDown={handleUserKeyDown}>
                                <input id={index} type="text" onClick={handleOnFocus} onChange={handleUserChange} value={number}/>
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
        replaceLine: (line, index) =>{dispatch(replaceLineAction(line,index))}
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Line);
