import React from 'react';
import { UserType } from "../types/user"
import {MdLocationPin} from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Css } from './styles';
const   User = ({ id, name, avatar_url, login, location, followers, following }: UserType) => {

    return (
        <Css.SearchResult>
        <Css.SearchResultLeft>
             <Link to={`/repos/${login}`}>
            <Css.UserImage src={avatar_url} alt={login} />
             </Link>
             </Css.SearchResultLeft>

             <Css.SearchResultRight>
            {name &&  
           <Css.Paragraph> {name}</Css.Paragraph>} 
            <Css.Paragraph>Login: {login}</Css.Paragraph>
            {location &&   
                <p>
                    <MdLocationPin />
                    <Css.Paragraph>{location}</Css.Paragraph>
                </p>
            }
            <div>
                <Css.Paragraph>Seguidores: </Css.Paragraph>
                <Css.Paragraph>{followers}</Css.Paragraph>
            </div>
             </Css.SearchResultRight>
        </Css.SearchResult>
       
    );
}

export default User;
