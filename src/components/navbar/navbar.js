import React, { useState } from "react";
import AboutLink from './links/aboutLink'
import LogoLink from './links/logoLink'
import SolveLink from './links/solveLink'
import DocsLink from './links/docsLink'
import DarkIcon from './icons/darkIcon'
import SunIcon from './icons/sunIcon'
import LightIcon from './icons/lightIcon'

import '../../stylesheets/navbar.css'
function Navbar(){
  
  const [themeMap] = useState({
    dark: "light",
    light: "solar",
    solar: "dark"
  })
  const [hideLink, setHideLink] = useState(['block','none','none'])
  
  const toggleTheme = () =>{
      const current = localStorage.getItem('theme');
      const next = themeMap[current];
      const bodyClass = document.body.classList
      bodyClass.remove(current);
      bodyClass.add(next);
      localStorage.setItem('theme', next);
      switch(next){
        case 'dark':
          setHideLink(['block','none','none'])
          break;
        case 'solar':
          setHideLink(['none','block','none'])
          break;
        case 'light':
          setHideLink(['none','none','block'])
          break;
        default:
          setHideLink(['block','none','none'])
      }
  }

  return(
      <div> 
          <nav className="navbar">
            <ul className="navbar-nav">
              <li className="logo">
                <LogoLink/>
              </li>
              <li className="nav-item">
                <AboutLink/>
              </li>
              <li className="nav-item">
                <SolveLink/>
              </li>
              <li className="nav-item">
                <DocsLink/>
              </li>
              <li className="nav-item" id="themeButton" onClick={toggleTheme}>
                <div className="nav-link">
                  <DarkIcon display={hideLink[0]}/>
                  <SunIcon display={hideLink[1]}/>
                  <LightIcon display={hideLink[2]}/>
                  <span className="link-text">Themify</span>
                </div>
              </li>
            </ul>
          </nav>
      </div>
  )
}

export default Navbar
