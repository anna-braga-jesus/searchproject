import {  BsX } from "react-icons/bs";
import logo from '../components/logo.png';
import { Css } from './styles';

 export function MenuMobile(){
   
     return (
         <>
            <Css.Header className="header">
            <Css.ListMenu className='btn_icon_header' >
              { <BsX />}
            </Css.ListMenu>
            <Css.LogoHeader>
              <img src={logo} className="img_logo_header" alt="LOGO" />
            </Css.LogoHeader>
            <Css.Nav
              id='navigation_header'
            >
            <Css.LinkStyle to="/">Home</Css.LinkStyle>
            <Css.LinkStyle to="/historic">Historic</Css.LinkStyle>
            </Css.Nav>
            </Css.Header>
      
         </>
     )
 }