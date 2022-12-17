import styled from "styled-components";

export const NavStyled = styled.nav `
    width: 100%;   
    background-color: var(--menu-bg-color); 
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: fixed;

    .divLogo{
        display: flex;
        align-items: center;
        gap: 20px;
    }
    & img {
        max-height: 55px;
        height: 100%;
        max-width: 55px;
        width: 100%;
    }
    .title{
        font-size: 2rem;
        font-weight: 600;
        color: #fff;
        text-decoration: none;
    }
    & .menu {
        color: #fff;    
        text-decoration: none;
        font-size: 1.5rem;
        transition: background-color 0.4s;
    }
    & .menu:hover {
        border-bottom: 3px solid #00cec9;       
    }
  
    & ul{
        display: flex;
        justify-content: space-around;  
        align-items: center; 
        list-style: none;
        width: 50%;
        height: 4rem;            
    }
   
    
    /* @media screen and (max-width:480px) {
        flex-direction: column;  
        height: 200px;
        
        .title {
            font-size: 1.5rem;
        }
        .menu {
            font-size: .8rem;
            background-color: aqua;
            color: #000;
            padding: 8px;
            
        }
        ul {
            flex-direction: column;
            height: 100%;
        }
    } */

`
