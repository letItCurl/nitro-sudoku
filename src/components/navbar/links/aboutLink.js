import React from 'react'

function AboutLink(){

    return(
          <div className="nav-link">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="alien-monster"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="svg-inline--fa fa-alien-monster fa-w-18 fa-9x"
            >
              <g className="fa-group">
                <path
                  fill="currentColor"
                  d="M560,128H528a15.99954,15.99954,0,0,0-16,16v80H480V176a15.99954,15.99954,0,0,0-16-16H416V96h48a16.00079,16.00079,0,0,0,16-16V48a15.99954,15.99954,0,0,0-16-16H432a15.99954,15.99954,0,0,0-16,16V64H368a15.99954,15.99954,0,0,0-16,16v48H224V80a15.99954,15.99954,0,0,0-16-16H160V48a15.99954,15.99954,0,0,0-16-16H112A15.99954,15.99954,0,0,0,96,48V80a16.00079,16.00079,0,0,0,16,16h48v64H112a15.99954,15.99954,0,0,0-16,16v48H64V144a15.99954,15.99954,0,0,0-16-16H16A15.99954,15.99954,0,0,0,0,144V272a16.00079,16.00079,0,0,0,16,16H64v80a16.00079,16.00079,0,0,0,16,16h48v80a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V432a15.99954,15.99954,0,0,0-16-16H192V384H384v32H336a15.99954,15.99954,0,0,0-16,16v32a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V384h48a16.00079,16.00079,0,0,0,16-16V288h48a16.00079,16.00079,0,0,0,16-16V144A15.99954,15.99954,0,0,0,560,128ZM224,320H160V224h64Zm192,0H352V224h64Z"
                  className="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M160,320h64V224H160Zm192-96v96h64V224Z"
                  className="fa-primary"
                ></path>
              </g>
            </svg>
            <span className="link-text">About</span>
          </div>
    )
}

export default AboutLink