import { useState } from 'react';
import { BsList, BsX } from "react-icons/bs";
import logo from '../components/logo.png';
import { Css } from './styles';

 export function MenuMobile(){
    const [showMenu, setShowMenu] = useState(false);

    function toggleMenu() {
      setShowMenu(prevShowMenu => !prevShowMenu);
    }
     return (
         <>
            <Css.Header className="header">
            <Css.ListMenu className='btn_icon_header' onClick={toggleMenu}>
              {showMenu ? <BsX /> : <BsList />}
            </Css.ListMenu>
            <Css.LogoHeader>
              <img src={logo} className="img_logo_header" alt="LOGO" />
            </Css.LogoHeader>
            <Css.Nav
              className={`navigation_header ${showMenu ? 'show' : ''}`}
              id='navigation_header'
            >
            <Css.LinkStyle to="/">Home</Css.LinkStyle>
            <Css.LinkStyle to="/historic">Historic</Css.LinkStyle>
            </Css.Nav>
            </Css.Header>
      
         </>
     )
 }