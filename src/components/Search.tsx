import React, {useState, KeyboardEvent} from 'react';
import{BsSearch} from 'react-icons/bs';
import { Css } from './styles'; 
import indexedDBCrud from '../utils/indexeddb';

type SearchType = {
    loadUser: (userName: string) => Promise<void>
}


export default function Search({loadUser}: SearchType) {
    const [ userName, setUserName] = useState("");
    const handleKeyDown = (e:KeyboardEvent ) => {
        if(e.key === "Enter"){
            loadUser(userName);
        }
    }
    return (
    <Css.SearchContent>
       <h1> Busque por um usuário: </h1>
    <Css.Container>
    <Css.Input 
    type="text" 
    placeholder='Digite o nome do usuário' 
    onChange={(e)=> setUserName(e.target.value)} 
    onKeyDown={handleKeyDown}
    />
        <Css.Button onClick={() => loadUser(userName)}>
            <BsSearch />
        </Css.Button> 
    </Css.Container>
    </Css.SearchContent>
    )
}


