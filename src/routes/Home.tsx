import React,{ useContext, useState } from 'react';
import { UserType } from '../types/user';
import Search from '../components/Search';
import { MenuMobile } from '../components/MenuMobile';
import Footer from '../components/Footer';
import axios from 'axios'; 
import User from '../components/User';
import { RepoType } from '../types/repo';
import { GlobalContext } from '../App';
import indexedDBCrud, { SearchType } from '../utils/indexeddb';

export default function Home() {
  const [user, setUser] = useState<UserType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const global = useContext(GlobalContext);
  

  // useEffect(()=>{
  //   axios.get(`https://api.github.com/orgs/google/repos`).then(res => res.data())
  //   .then((data)=> {
  //     setRepos(data);
  //   })
  // },[])

  const loadUser = async (userName: string) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${userName}`);
      const data = response.data;
      const { avatar_url, id, name, login, location, followers, following } = data;
      if(login) {
        const newSearch: SearchType = {
            search: login,
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
