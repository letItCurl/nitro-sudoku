import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'
import CrossIcon from './crossIcon'

const About = (props) =>{

    const leaveMe = (e)=>{
        if(e.target.className==="modal"){
            props.history.push('/')
        }
    }

    return ReactDOM.createPortal(
        <div className="modal" onClick={leaveMe}>
            <div className="modal-content">
                <div className="modal-header">
                    <h1>about</h1>
                    <p>Let's be mad every day my boy</p>
                </div>
                <Link to="/" className="crossIcon" ><CrossIcon /></Link> 
            </div>
        </div>,
        document.querySelector('#modal')
    )
}

export default About