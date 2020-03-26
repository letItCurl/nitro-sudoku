import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'
import CrossIcon from './crossIcon'

const DontLeave = (props) =>{
    
    return ReactDOM.createPortal(
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h1>solve</h1>
                    <p className="modal-text invisible-scrollbar">On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de 
                        distractions, et empêche de se concentrer sur la mise en page elle-même. 
                        L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' 
                        est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec 
                        celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souv
                        ent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes).</p>
                </div>
                <Link to="/" className="crossIcon" ><CrossIcon /></Link> 
            </div>  
            
        </div>,
        document.querySelector('#modal')
    )
}

export default DontLeave