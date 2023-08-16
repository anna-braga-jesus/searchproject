import React,{ useState } from 'react';
import { UserType } from '../types/user';
import Search from '../components/Search';
import { MenuMobile } from '../components/MenuMobile';
import Footer from '../components/Footer';
import axios from 'axios'; 
import User from '../components/User';

export default function Home() {
  const [user, setUser] = useState<UserType | null>(null);
  const [error, setError] = useState(false);

  const loadUser = async (userName: string) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${userName}`);
      const data = response.data;
      console.log(data)
      const { avatar_url, id, name, login, location, followers, following } = data;
      const userData: UserType = {
        avatar_url,
        id,
        name,
        login,
        location,
        followers,
        following,
      };
      setUser(userData);
    } catch (error) {
      console.error('Erro: ', error);
    }
  };

  return (
    <>
      <MenuMobile />
      <h1>HUBusca - Site de busca de usuários e repositórios</h1>
      <Search loadUser={loadUser} />
      {user && <User {...user}/>}      
      <Footer />
    </>
  );
}
