import React from 'react';
import { Link } from 'react-router-dom';
import{BsSearch} from 'react-icons/bs';


export default function Search() {
    return (
    <>
    <h2> Busque por um usuário: </h2>
    <p>Conheça os principais repositórios</p>
    <div>
        <input type="text" placeholder='Digite o nome do usuário' />
        <button>
            <BsSearch />
            </button> 
    </div>
    </>
    )
}
