import React from 'react';
import { UserType } from "../types/user"
import {MdLocationPin} from 'react-icons/md';
import { Link } from 'react-router-dom';
const User = ({ id, name, avatar_url, login, location, followers, following }: UserType) => {
    return (
        <div>
             <Link to={`/repos/${login}`}>
            <img src={avatar_url} alt={login} />
             </Link>
           {name && <h2>{name}</h2>}
            <h2>{login}</h2>
            {location &&   
                <p>
                    <MdLocationPin />
                    <span>{location}</span>
                </p>
            }
            <div>
                <p>Seguidores: </p>
                <p>{followers}</p>
            </div>
            <div>
                <p>Seguindo: </p>
                <p>{following}</p>
            </div>
           
        </div>
    );
}

export default User;
