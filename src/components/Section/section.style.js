

import styled from "styled-components";

export const SectionStyled = styled.section`
    padding: 20px;
    border-radius: 10px;    
    background-color: aliceblue;
    display: flex;  
    width: 100%;
    margin: 50px auto;   
    box-shadow: 0 0 10px rgba(0,0,0, 0.3);     
   
    & img {
        max-width: 150px;
        width: 100%;
        max-height: 150px;
        height: 100%;
        padding: 10px;
    }
    & .content{
        max-width: 800px;
        width: 100%;
        display: flex;
        flex-direction: column;  
        padding: 12px;  
    }
   
    & h2{
        margin-top: 10px;
        font-size: 1.3rem;
        text-align: center;
    }
    & h3{
        margin-top: 10px;
    }
    
    & p{
        margin-top: 10px;
        
    }
    .card {
        height: 100px;
        overflow: hidden;
        font-size: .9rem;
    }
    .cardActive{
        height: auto;
    }  
    & button {
        border: none;
        margin: 10px 0 0 550px;
        color: #313131;
        font-weight: bold;
        background: none;
        cursor: pointer;
        font-size: .9rem;   
        align-items: center;
        
    }
   
  

`