import { useEffect, useState } from 'react';
import { MenuMobile } from '../components/MenuMobile';
import Footer from '../components/Footer';
import indexedDBCrud, { SearchType } from '../utils/indexeddb';
import { Css } from '../components/styles';
import { FaTrash } from 'react-icons/fa';

export default function Historic() {
    const [historic, setHistoric] = useState<SearchType[]>([]);

    useEffect(() => {
        indexedDBCrud.getSearchs()
            .then(el => {
                setHistoric(el);
            });
    }, []);

    const handleDeleteSearch = async (id: number) => {
        try {
            await indexedDBCrud.deleteSearch(id);
            // Atualizar o estado do histórico após a exclusão
            setHistoric(historic.filter(item => item.id !== id));
        } catch (error) {
            console.error('Erro ao excluir pesquisa:', error);
        }
    };

    return (
        <>
            <MenuMobile />
            <Css.HistoricStyle>
                <Css.StyledBox>
                    <Css.Paragraph> Usuários pesquisados: </Css.Paragraph>
                    <div>
                        {historic.map((hist: SearchType) => (
                            <Css.HistoricBox key={hist.id}>
                                <Css.StyledList>
                                    <Css.StyledListItem>
                                        <Css.LinkStyle to={`/repos/${hist.search}`}>{hist.search}</Css.LinkStyle>
                                    </Css.StyledListItem>
                                </Css.StyledList>
                                <Css.Trash onClick={() => handleDeleteSearch(hist.id)}>
                                    <FaTrash />
                                </Css.Trash>
                            </Css.HistoricBox>
                        ))}
                    </div>
                </Css.StyledBox>
            </Css.HistoricStyle>
            <Footer />
        </>
    );
}
