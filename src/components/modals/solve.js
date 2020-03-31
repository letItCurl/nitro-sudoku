import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'
import CrossIcon from './crossIcon'

const Solve = (props) =>{
    
    const leaveMe = (e)=>{
        if(e.target.className==="modal"&&localStorage.getItem('sudoku-solve')==='done'){
            props.history.push('/')
        }
    }
    const closeThis = ()=>{
        props.history.push('/')
    }
    const[invisible, setInvisible] = useState('invisible')
    const[skipDisplayClose, SetSkipDisplayClose] = useState('invisible')

    useEffect(()=>{
        if(localStorage.getItem('sudoku-solve')==='done'){
            SetSkipDisplayClose('')
        }
    })

    const skipDisplay = ()=>{
        if(invisible===invisible){
            setTimeout(()=>{
                setInvisible('')
            },3000)
        }
    }
    
    const endVideo = ()=>{
        props.history.push('/docs')
        localStorage.setItem('sudoku-solve','done')
    }
    const skip = ()=>{
        props.history.push('/docs')
        localStorage.setItem('sudoku-solve','done')
    }
    return ReactDOM.createPortal(
        <div className="modal" onClick={leaveMe}>
            <div className="modal-content video-content">
                <div className="modal-header" >
                    <h1>Solve</h1>
                    <p onClick={skip} id="skip" className={invisible}>Skip...</p>
                </div>
                <video controls className="welcome-video" onEnded={endVideo} onPlaying={skipDisplay}>
                    <source src="https://res.cloudinary.com/duydvdaxd/video/upload/v1585649522/Vue-Sprint/Nirtro_Sudoku_-_Opera_2020-03-31_11-30-16_i2i8lr.mp4"type="video/mp4"/>
                    Sorry, your browser doesn't support embedded videos.
                </video>
                <p onClick={closeThis} className={skipDisplayClose} id="close-video"><CrossIcon/></p>
            </div>
        </div>,
        document.querySelector('#modal')
    )
}

export default Solve