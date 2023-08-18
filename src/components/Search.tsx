import React, {useState, KeyboardEvent} from 'react';
import { Css } from './styles'; 
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
        <Css.Button onClick={() => loadUser(userName)}>Pesquisar! </Css.Button>
    </Css.Container>
    </Css.SearchContent>
    )
}


