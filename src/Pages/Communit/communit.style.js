import styled from "styled-components";

export const MainCommunitStyled = styled.main`
    width: 70%;
    background: var(--body-bg-color);
    padding: 50px;  
    margin:  auto;
    min-height: 100vh;
    
    & .firstSection {
        width: 90%;
        margin: auto;       
    }

    & .firstSection h2{
        text-align: center;
        font-size: 2.5rem;
        padding-bottom: 50px;
    }
    & .inputSearch{
        margin: auto;
        text-align: center;
        max-width: 600px;
        width: 100%;
        padding: 6px;
        border-radius: 4px;
        border:1px solid #BDBDBD;
        font-size: 1rem;
       
    }

`