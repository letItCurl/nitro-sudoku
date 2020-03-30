import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const DontLeave = (props) =>{

    const leaveMe = (e)=>{
        if(e.target.className==="modal"){
            props.history.push('/')
        }
    }

    return ReactDOM.createPortal(
        <div className="modal" onClick={leaveMe}>
            <div className="modal-content video-content">
                <div className="modal-header" >
                    <h1 className="p-0">see you later!</h1>
                    <img className="welcome-video" src="https://res.cloudinary.com/duydvdaxd/image/upload/v1585568772/Vue-Sprint/yoda_mx2hpn.gif"></img>
                </div>
                
            </div>
        </div>,
        document.querySelector('#modal')
    )
}

export default DontLeave