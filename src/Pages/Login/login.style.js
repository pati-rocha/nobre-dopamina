import styled from "styled-components";

export const MainLoginStyled = styled.main`
    width: 50%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    background-image: var( --header-bg-color);
    font-size: 1rem;
    padding-top: 70px;

    & img {
        max-width: 150px;
        width: 100%;
        margin:2rem;
    }    
    & p {
        text-align: center;
    }

`
export const FormStyled = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    gap: 14px;
    

    input {
        max-width: 400px;
        width: 100%;
        border:none;
        color: #000;
        padding: 14px;
        border-radius: 10px;
    }
    & p {
        font-size: .8rem;
        color: red;
    }
    & button {
        max-width: 400px;
        width: 100%;
        background-color: var(--menu-bg-color);
        border:none;
        color: white;
        padding: 14px;
        border-radius: 10px;
        cursor: pointer;

    }
   
`

export const RegisterStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    
    & p{
        color: black;
        text-align: center;
    }
    & a {
        text-decoration: none;
    }


`
