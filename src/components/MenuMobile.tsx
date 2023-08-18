import React, { useState } from 'react';
import { BsList, BsX } from "react-icons/bs";
import logo from '../components/logo.png';
import { Link } from 'react-router-dom';
import { Css } from './styles';

 export function MenuMobile(){
    const [showMenu, setShowMenu] = useState(false);

    function toggleMenu() {
      setShowMenu(prevShowMenu => !prevShowMenu);
    }
     return (
         <>
            <header className="header">
        <button className='btn_icon_header' onClick={toggleMenu}>
          {showMenu ? <BsX /> : <BsList />}
        </button>
        <div className="logo_header">
          <img src={logo} className="img_logo_header" alt="LOGO" />
        </div>
        <div
          className={`navigation_header ${showMenu ? 'show' : ''}`}
          id='navigation_header'
        >
          <Css.LinkStyle to="/">Home</Css.LinkStyle>
          <Css.LinkStyle to="/historic">Historic</Css.LinkStyle>
        </div>
      </header>
      
         </>
     )
 }