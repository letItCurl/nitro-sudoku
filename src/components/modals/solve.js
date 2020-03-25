import React from 'react'
import ReactDOM from 'react-dom'

const Solve = (props) =>{
    return ReactDOM.createPortal(
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h1>solve</h1>
                    <p>Let's be mad every day my boy</p>
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    )
}

export default Solve