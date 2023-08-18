import { useContext, useEffect } from "react";
import { styled } from "styled-components";
import { GlobalContext } from "../App";
import { RepoType } from "../types/repo";

interface RepoTypeList {
    list: RepoType[];
    refreshList: () => void;

}

export default function RepositoryList({ list, refreshList}: RepoTypeList){
    const { global } = useContext(GlobalContext);
    useEffect(() => {
        refreshList()
    }, [global]);

    const formatDate = (isoDate: any) => {
        const date = new Date(isoDate);
        const day = date.getDate();
        const month = date.getMonth() + 1; 
        const year = date.getFullYear();
        return `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`;
    };
    
    return (
        <Body>
            {list?.map((repo: any)=>{
            return (
            <li key={repo.id}>
                <a href={repo.html_url}>
                    <TopBody>
                        <h2>{repo.full_name}</h2>
                    </TopBody>
                    <MidBody>
                        <h3>{repo.description}</h3>
                    </MidBody>
                    <BottomBody>
                        {repo.language && <h3>{repo.language}</h3>}
                        <h3>Updated on {formatDate(repo.pushed_at)}</h3>
                        <h3>Created at {formatDate(repo.created_at)}</h3>
                    </BottomBody>
                </a>
            </li>) 
            })}
        </Body>
    );
}

const Body = styled.div`
    li {
        display: flex;
        border-radius: 1rem;
        background-color: #eee;
        padding: .8rem 1.2rem;
        font-size: x-small;
        margin-bottom: .7rem;
        * {
            color: black;   
        }
        h2 {
            color: #0969da;
        }
        h3 {
            font-weight: 400;
        }
    }
`;

const TopBody = styled.div`
    display: flex;
    padding: 0 0 1rem 0;
`;
const MidBody = styled.div`
    display: flex;
    padding: 0 0 .5rem 0;
`;
const BottomBody = styled.div`
    display: flex;
    width: 100%;
    h3 {
        margin-right: 1rem;
    }
`;