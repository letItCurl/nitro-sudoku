import React from 'react'
import ReactDOM from 'react-dom'

const Docs = (props) =>{
    return ReactDOM.createPortal(
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h1>Docs</h1>
                    <p>Let's be mad every day my boy</p>
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    )
}

export default Docs