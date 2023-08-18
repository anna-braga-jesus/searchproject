import { useEffect, useState } from 'react';
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
        <Css.HistoricStyle>
            <Css.StyledBox >
            <Css.Paragraph>Últimos pesquisados: </Css.Paragraph>
        <h3>{historic?.map((hist: any, index: number)=>{ 
            return (
                <>
                <Css.StyledList>        
                <Css.StyledListItem key={index}>
                <Css.LinkStyle to={`/repos/${hist.search}`}>{hist.search}</Css.LinkStyle>
                </Css.StyledListItem>
                </Css.StyledList>
                </>
                )
                })}
        </h3>
            </Css.StyledBox>
        </Css.HistoricStyle>
        <Footer />
    </>
    )
}
