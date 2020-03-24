import React from 'react'
import '../../stylesheets/spinner.css'
import DottedLine from './dottedLine'
function Spinner(){
    return(
        <div className="wrapper">
            <DottedLine class={"line line1"}/>
            <DottedLine class={"line line2"}/>
            <DottedLine class={"line line3"}/>
            <DottedLine class={"line line4"}/>
            <DottedLine class={"line line5"}/>
            <DottedLine class={"line line6"}/>
        </div>
    )
}

export default Spinner