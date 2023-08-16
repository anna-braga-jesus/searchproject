import React from 'react';
import { Css } from './styles';

const Footer: React.FC = () => {
  return (
    <Css.Footer>
      <p>&copy; {new Date().getFullYear()} Seu Nome. Todos os direitos reservados.</p>
    </Css.Footer>
  );
};


export default Footer;
