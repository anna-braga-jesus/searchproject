import { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer";
import { MenuMobile } from "../components/MenuMobile";
import { GlobalContext } from "../App";
import axios from "axios";
import { RepoType } from "../types/repo";
import { useParams } from "react-router-dom";
import RepositoryList from "../components/RepositoryList";
import { Css } from "../components/styles";
    
export default function Repos(){
    const [repos, setRepos] = useState<RepoType[]>([]);
    const global = useContext(GlobalContext);
    const param = useParams();

   
    const getAllRepositories = () => {
        if(global.global) {
            axios.get(global.global.repos_url).then(el => {
                setRepos(el.data);
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
                <Css.RepoInfo>
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
                </Css.RepoInfo>
            }
            <Css.Body>
                <RepositoryList list={repos} refreshList={getAllRepositories} />
            </Css.Body>
            <Footer />
        </>
    );
}

