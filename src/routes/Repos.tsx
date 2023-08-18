import { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer";
import { MenuMobile } from "../components/MenuMobile";
import { GlobalContext } from "../App";
import axios from "axios";
import { styled } from "styled-components";
import { RepoType } from "../types/repo";
import { useParams } from "react-router-dom";
import RepositoryList from "../components/RepositoryList";
import indexedDBCrud, { SearchType } from "../utils/indexeddb";

export default function Repos(){
    const [repos, setRepos] = useState<RepoType[]>([]);
    const global = useContext(GlobalContext);
    const param = useParams();

   
    const getAllRepositories = () => {
        if(global.global) {
            axios.get(global.global.repos_url).then(el => {
                setRepos(el.data);
                console.log(el.data)
            })
        }
    }
    
    useEffect(() => {
        if(param) {
            axios.get(`https://api.github.com/users/${param.userName}`)
            .then(el => {
                global.setGlobal( el.data );
                
            });
        } else {
            getAllRepositories()
        }
        
    }, []);

    return (
        <>
            <MenuMobile />
            {global.global && 
                <RepoInfo>
                    <div className="RepoInfo_left">
                        <div className="RepoInfo_left_perfilBackground">
                            <img src={global.global.avatar_url} alt="picture" /> 
                        </div>
                        
                    </div>
                    <div className="RepoInfo_right">
                        <h3>{global.global.name}</h3> 
                        <h3>Login: {global.global.login}</h3>
                        <h3>{global.global.location}</h3>
                        <h3>Id: {global.global.id}</h3>
                        <h3>Seguidores: {global.global.followers}</h3>
                        <h3>Quantd. de repositórios públicos: {global.global.public_repos} </h3>
                        <h3></h3>

                    </div>
                </RepoInfo>
            }
            <Body>
                <RepositoryList list={repos} refreshList={getAllRepositories} />
            </Body>
            <Footer />
        </>
    );
}
    // let linkdogit = https://github.com/anna-braga-jesus/searchproject;

const RepoInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    margin: 10px;
    .RepoInfo_left {
        width: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .RepoInfo_right {
        padding: 1rem;
        margin-top: 2rem;
        width: 50%;
        background-color: #0005;
        border-radius: 6px;
    }
    .RepoInfo_left_perfilBackground {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 150px;
        border-radius: 50%;
        background-color: #eee;  

    }
    .RepoInfo_left_perfilBackground img{
        width: 150px;
        border-radius: 50%;


    }


`;
const Body = styled.ul`
    width: 100%;
    box-sizing: border-box;
    list-style: none;
    padding: 1rem;
`;  