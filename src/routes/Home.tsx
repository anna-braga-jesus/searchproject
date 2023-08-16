import React,{ useState } from 'react';
import { UserType } from '../types/User';
import Search from '../components/Search';
import { MenuMobile } from '../components/MenuMobile';
import Footer from '../components/Footer';
import axios from 'axios'; 

export default function Home() {
  const [user, setUser] = useState<UserType | null>(null);

  const loadUser = async (userName: string) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${userName}`);
      const data = response.data;

      const { avatar_url, id, nome, login, location, followers, following } = data;
      const userData: UserType = {
        avatar_url,
        id,
        nome,
        login,
        location,
        followers,
        following,
      };
      setUser(userData);
    } catch (error) {
      console.error('Error loading user:', error);
    }
  };

  return (
    <>
      <MenuMobile />
      <h1>HUBusca - Site de busca de usuários e repositórios</h1>
      <Search loadUser={loadUser} />
      {user && <p>{user.login}</p>}
      <Footer />
    </>
  );
}
