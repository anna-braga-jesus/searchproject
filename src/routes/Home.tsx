import { useContext, useState } from 'react';
import { UserType } from '../types/user';
import Search from '../components/Search';
import { MenuMobile } from '../components/MenuMobile';
import Footer from '../components/Footer';
import axios from 'axios'; 
import User from '../components/User';
import { GlobalContext } from '../App';
import indexedDBCrud, { SearchType } from '../utils/indexeddb';
import loading from '../loading.gif';

export default function Home() {
  const [user, setUser] = useState<UserType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const global = useContext(GlobalContext);

  const loadUser = async (userName: string) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${userName}`).finally(() => {
        setIsLoading(true);
      });;
      const data = response.data;
      const { avatar_url, id, name, login, location, followers, following } = data;
      if(login) {
        const newSearch: SearchType = {
            search: login, id
          };

        indexedDBCrud.addSearch(newSearch);
    }
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
      global.setGlobal(response.data);
    } catch (error) {
        alert('Usuário não encontrado!')    
      }
      finally {
        setIsLoading(false); 
      }
  };
  
  return (
    <>
      <MenuMobile />
      <Search loadUser={loadUser} />
      {isLoading && {loading}}
      {user && <User {...user}/>}  
      <Footer />
    </>
  );
}
