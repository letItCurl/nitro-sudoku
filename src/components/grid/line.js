import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'

const Line = (props) => {

    const [userLine, setUserLine] = useState(props.line)
    
    function handleUserChange(event){
        const str = event.target.value
        const strLength = str.length
        const lastLetter =  str[strLength-1]
        var copy = JSON.parse(JSON.stringify(userLine))
        const index = event.target.id
        if(lastLetter <= 9 && lastLetter > 0){
            copy[index] = lastLetter
            setUserLine(copy)
        }
    }
    const handleUserKeyDown = (event) =>{
        const keyPress =  event.key
        var copy = JSON.parse(JSON.stringify(userLine))
        const index = event.target.id
        if(keyPress==="Backspace"){
            copy[index] = ""
            setUserLine(copy)
        }
    }
    const handleOnFocus = (event) =>{
        event.preventDefault()
        var val = event.target.value
        event.target.value = ""
        event.target.value = val
    }
    useEffect(()=>{
        if(props.sudoku[props.index]!==userLine){
            props.replaceLine(userLine, props.index)
        }
    }, userLine)
    
    return (
        <section className="basic-grid">
            { 
                userLine.map((number,index) => {
                return (
                <div className="card" 
                key={index} onKeyDown={handleUserKeyDown}>
                    <input id={index} type="text" onFocus={handleOnFocus} onChange={handleUserChange} value={number}/>
                    </div>)
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
        replaceLine: (line, index) =>{dispatch({type: 'REPLACE_LINE', line, index})}
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Line);
