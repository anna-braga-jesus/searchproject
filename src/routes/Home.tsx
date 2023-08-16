import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import Historic from './Historic';
import { MenuMobile } from '../components/MenuMobile';
import Footer from '../components/Footer';

export default function Home() {
 

  return (
    <>
      <MenuMobile />
      <h1>HUBusca - Site de busca de usuários e repositorios</h1>
      <Search />
      <Footer />
    </>
  );
}
