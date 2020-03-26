import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'

const Line = (props) => {

    const [userLine, setUserLine] = useState(props.line)
    function handleUserChange(){
        //silence is gold
    }
    const handleUserKeyDown = (event) =>{
        const keyPress =  event.key
        var copy = JSON.parse(JSON.stringify(userLine))
        const index = event.target.id
        if(keyPress==="Backspace"){
            copy[index] = ""
            setUserLine(copy)
        }else if(keyPress <= 9 && keyPress > 0){
            copy[index] = event.key
            setUserLine(copy)
        }
    }
    
    useEffect(()=>{
        if(props.sudoku[props.index]!=userLine){
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
                    <input id={index} type="text" maxLength="2" onChange={handleUserChange} value={number}/>
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
