import React, {useState,useEffect} from 'react';

const Line = (props) => {

    const [userNumber, setUserNumber] = useState(props.line)

    function handleUserKeyPress(event){
        var copy = []
        event.preventDefault()
        console.log(event.keyCode)
        const index = event.target.id
        if(event.key==="Backspace"){
            userNumber[index] = ""
            copy = JSON.parse(JSON.stringify(userNumber))
            setUserNumber(copy)
            
        }else if(event.keyCode >= 97 && event.keyCode <= 105){
            userNumber[index] =  event.key
            copy = JSON.parse(JSON.stringify(userNumber))
            setUserNumber(copy)
        }
       
    }
    const dummy = ()=>{
        console.log("You can't see this shit")
    }
    useEffect(()=>{
        console.log("enter effect")
        
        return () => {
            console.log("leaving return")
            
        }
    })

    return (
        <section className="basic-grid">
            { 
                userNumber.map((number,index) => {
                return (<div className="card" onKeyDown={handleUserKeyPress} key={index}><input id={index} type="text" onChange={dummy} value={number}/></div>)
                })
            }
        </section>
        );
}
 
export default Line;
