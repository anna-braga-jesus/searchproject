import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Css = {
  UserImage: styled.img`
  border-radius: 50%;
  width: 50px;
  `,
  ListMenu: styled.button`
    display: none; 
    background-color: transparent;
    border: none;
    color: var(--color-white);
    cursor: pointer;
    width: 20px;
    height: 20px;
`,
  Header:styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:#101220;
    height: 3.5em;
    padding: 0 10%;
    width: 100%;
    box-shadow: 0px 5px 20px #000;
    flex-wrap: wrap;
  `,
  Nav:styled.div`
  display: flex;
  align-items: center;
  gap: 3em;

  a{color: var(--color-white);  
  transition: 0.1s;
  font-weight: bold;}
  `,
  LogoHeader:styled.div`
    width: 45px;
      img{
        width: 45px;
      }
  `,
  SearchResult: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
      img{
        width: 150px;
        border-radius: 50%;
      }
      flex-wrap: wrap;


  `,
  SearchResultRight: styled.div`
    display: flex;
    flex-direction: column;
   padding: 1rem;
    width: 50%;
    background-color: #0005;
    border-radius: 6px;
    `,
  SearchResultLeft: styled.div`
  img{    width: 100px;
}
  `,

Content:styled.div`
  display: flex;
  
`,
HistoricStyle: styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 100px);
  overflow-y: scroll; 

`,
 StyledBox : styled.div`
  border-radius: 10px;
  padding: 20px;
  max-width: 400px;
  width: 100%;
  max-height: 600px;
`,

 StyledList: styled.ul`
  list-style: none;
  padding: 0;
  text-decoration: none;

`,

 StyledListItem : styled.li`
  margin: 5px 0;
`,
  Input: styled.input`
    padding: 0.5em;
    margin: 0.5em;
    color: black;
    border: none;
    border-radius: 3px;
    margin-right: 20px;
  `,
  Button: styled.button`  
   background: rgb(96,9,240);
    background: linear-gradient(0deg, rgba(96,9,240,1) 0%, rgba(129,5,240,1) 100%);
    border: none;
    width: 100px;
    cursor: pointer;
    &::before {
      height: 0%;
}
&:hover {
  box-shadow:  4px 4px 6px 0 rgba(255,255,255,.5),
              -4px -4px 6px 0 rgba(116, 125, 136, .5), 
    inset -4px -4px 6px 0 rgba(255,255,255,.2),
    inset 4px 4px 6px 0 rgba(0, 0, 0, .4);
    
}

  `,
  SearchContent: styled.div`
        background-color: #0005;
        padding: 2rem;
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        border: 1px solid black;
        margin: 50px 20px;

    `,
  Paragraph : styled.p`
        color: #eee;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        text-align: center;

    `,
  Container : styled.div`
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;

  `,
  Footer : styled.footer`
    background-color: #0005;
    color: white;
    text-align: center;
    padding: 1rem;
    position: fixed;
    bottom: 0;
    width: 100%;
  `,
  LinkStyle: styled(Link)`
    color: #eee;
    display: flex;
    &:hover{
      color: black;
    };
  `,


RepoInfo : styled.div`
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
  `, Body: styled.ul`
    width: 100%;
    box-sizing: border-box;
    list-style: none;
    padding: 1rem;
`,
  };
  