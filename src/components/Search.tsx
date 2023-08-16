import React, {useState} from 'react';
import{BsSearch} from 'react-icons/bs';

type SearchType = {
    loadUser: (userName: string) => Promise<void>
}

export default function Search({loadUser}: SearchType) {
    const [ userName, setUserName] = useState("");

    return (
    <>
    <h2> Busque por um usuário: </h2>
    <p>Conheça os principais repositórios</p>
    <div>
        <input type="text" 
        placeholder='Digite o nome do usuário' 
        onChange={(e)=> setUserName(e.target.value)} 
        />
        <button onClick={() => loadUser(userName)}>
            <BsSearch />
        </button> 
    </div>
    </>
    )
}
