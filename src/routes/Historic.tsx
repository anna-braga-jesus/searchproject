import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuMobile } from '../components/MenuMobile';
import Footer from '../components/Footer';
import indexedDBCrud, { SearchType } from '../utils/indexeddb';
import { Css } from '../components/styles';

export default function Historic() {
    const [historic, setHistoric] = useState<SearchType[]>([]);
    useEffect(()=>{
        indexedDBCrud.getSearchs()
        .then(el => {
            setHistoric(el);
        })
    },[])
    return (
    <>
        <MenuMobile />
        <div>Histórico dos amiguinhos</div>
        <h3>{historic?.map((hist: any, index: number)=>{ return (
            <li key={index}>
                <Css.LinkStyle to={`/repos/${hist.search}`}>{hist.search}</Css.LinkStyle>
            </li>
        )})}</h3>


        {/* {list?.map((repo: any)=>{
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
            })} */}





        <Link to={"/"}>Vai pra algum lugar amigo ?</Link>
        <Footer />
    </>
    )
}
