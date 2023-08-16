import styled from 'styled-components';

export const Css = {
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
    `
};