
import styled from "styled-components";

export const FormStyled = styled.form`
    max-width: 600px;
    width: 100%;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    text-align: right;
    gap: 6px;
    background-color: rgba(240,168,155,1);
    /* background:var(--header-bg-color); */
    border-radius: 8px;
    padding:  32px 12px; 

    & h2{
        text-align: center;
        padding-bottom: 30px;
    }
    & label{
        font-size: 1rem;
        margin-right: 8px;
    }
    & .input {
        max-width: 400px;
        width: 100%;
        padding: 6px;
        border-radius: 4px;
        border:1px solid #BDBDBD;
        font-size: 1rem;
    }

    & .divTextarea {
      display: flex;   
    }

    & textarea {
        max-width: 580px;
        width: 100%;
        padding: 6px;
        border-radius: 4px;
        border:1px solid #BDBDBD;
        font-size: 1rem;
    }
    & p {
        color: red;
        font-size: .8rem;
    }

    & .divCheckbox{
        display: flex;
        text-align: left;
    }
    & .checkbox {
        width: 20px;
        height: 20px;
        margin-right: 10px;
    }
    & button {
        max-width: 600px;
        width: 100%;
        background-color: var(--menu-bg-color);
        border:none;
        color: white;
        padding: 14px;
        border-radius: 10px;
        cursor: pointer;
    }
`