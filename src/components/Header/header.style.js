import styled from "styled-components";

export const HeaderStyled = styled.header `
    width: 100%;
    height: 420px;
    background: rgb(255,236,233);
    background: var(--header-bg-color);
    color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    padding: 100px 0 30px;

    & h2 {
        font-size: 3rem;        
    }    

    & img {       
        background-size:contain;
        max-width: 400px;
        width: 100%;
        max-height: 400px;
        height: 100%; 
    }
`

   

