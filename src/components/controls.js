import React from 'react';

import '../stylesheets/controls.css'

function Controls (){

    function logThis(){
        console.log("SRCYGVUHBIJ")
    }

    return (
        
        <div className="logs-container" id="controls-container">    
                    <h1 className="control-headings">Sudoku Controller</h1>  

                <div className="btn-group">
                    <button class="btn-action" disabled onClick={logThis}>Start</button>
                    <button class="btn-action" disabled onClick={logThis}>Clear</button>
                    <button class="btn-action" disabled onClick={logThis}>Change</button>
                </div>
        </div>
    )
}

export default Controls