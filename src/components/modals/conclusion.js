import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Conclusion = (props) =>{

    const[invisible, setInvisible] = useState('invisible')

    const leaveMe = (e)=>{
        if(e.target.className==="modal"){
            props.history.push('/')
        }
    }
    const endVideo = ()=>{
        props.history.push('/congrats')
    }
    const skipDisplay = ()=>{
        if(invisible===invisible){
            setTimeout(()=>{
                setInvisible('')
            },3000)
        }
    }

    const skip = ()=>{
        props.history.push('/congrats')
    }

    return ReactDOM.createPortal(
        <div className="modal">
            <div className="modal-content video-content">
                <div className="modal-header" >
                    <h1 onClick={skip}>Conclusion</h1>
                    <p onClick={skip} id="skip" className={invisible}>Skip...</p>
                </div>
                <video controls className="welcome-video" onEnded={endVideo} onPlaying={skipDisplay}>
                    <source src="https://res.cloudinary.com/duydvdaxd/video/upload/v1585559316/Vue-Sprint/542_AT_T_Archives__The_UNIX_Operating_System_-_YouTube_-_Opera_2020-03-30_10-54-23_jd7sqc.mp4"type="video/mp4"/>
                    Sorry, your browser doesn't support embedded videos.
                </video>
            </div>
        </div>,
        document.querySelector('#modal')
    )
}

export default Conclusion