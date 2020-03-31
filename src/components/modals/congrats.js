import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import ArrowIcon from './crossIcon'

const Congrats = (props) =>{


    const leaveMe = (e)=>{
        if(e.target.className==="modal"){
            props.history.push('/')
        }
    }
    const closeThis = ()=>{
        props.history.push('/')
    }


    return ReactDOM.createPortal(
        <div className="modal" onClick={leaveMe}>
            <div className="modal-content video-content">
                <div className="modal-header" >
                    <h1>Congrats!!!</h1>
                </div>
                <img className="welcome-video" src="https://res.cloudinary.com/duydvdaxd/image/upload/v1585587535/Vue-Sprint/rick-morty-wink_omqcrg.gif"></img>
                <p id="close-video" onClick={closeThis} >< ArrowIcon/></p>

            </div>
        </div>,
        document.querySelector('#modal')
    )
}

export default Congrats