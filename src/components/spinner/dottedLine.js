import React from "react";

function Dottedline(props){
    return(
        <div className={props.class}>
            <span className="circle circle-top"></span>
            <div className="dotted">
                <span className="dot dot-top"></span>
                <span className="dot dot-middle-top"></span>
                <span className="dot dot-middle-bottom"></span>
                <span className="dot dot-bottom"></span>
            </div>
            <span className="circle circle-bottom"></span>
        </div>
    )
}

export default Dottedline