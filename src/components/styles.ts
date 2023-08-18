import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Css = {
  UserImage: styled.img`
  border-radius: 50%;
  
  `,
  Input: styled.input<{ $inputColor?: string }>`
    padding: 0.5em;
    margin: 0.5em;
    color: ${props => props.$inputColor || '#BF4F74'};
    background: papayawhip;
    border: none;
    border-radius: 3px;
  `,
  Button: styled.button`
    background-color: black;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
      background-color: red;
    }
  `,
    SearchContent: styled.div`
        background-color: purple;
        padding: 2rem;
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        margin: 1.5rem;
    `,
    Paragraph : styled.p`
        color: lightblue;
    `,
  Container : styled.div`
    display: flex;
    gap: 0.5rem;
  `,
  Footer : styled.footer`
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 1rem;
    position: fixed;
    bottom: 0;
    width: 100%;
  `,
  LinkStyle: styled(Link)`
    color: #eee;
    &:focus{
      color: red;
    };
  `,
  };