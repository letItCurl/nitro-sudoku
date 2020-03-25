import React from 'react'
import '../stylesheets/logs.css'

function Logs(){
    return(
        <div className="logs-container" id="logs-container">
            <div className="log-text" id="logs">
                
                <p className="user">letItCurl@engine:~$</p>
                <p>cd engine</p>
                <p className="user">letItCurl@engine:~/engine/$</p>
                <p>ls</p>
                <p className="user">letItCurl@engine:~/engine/$</p>
                <p>engine.js</p>
                <p className="user">letItCurl@engine:~/engine/$</p>
                <p>node engine</p>
                <p>--->STARTING ENGINE {"<"}---</p>
                <p>--->COUNTING 1'S</p>
                <p>--->1'S COUNTED</p>
            </div>
        </div>
    )
}

export default Logs