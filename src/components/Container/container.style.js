import styled from "styled-components";

export const ContainerStyled = styled.section`
        min-height: 40vh;
        width: 760px;
        margin: 30px auto;        
        display: flex;
        justify-content: space-around;
        background-color: #dfe6e9;        
        border-radius: 12px 12px 12px;

        & img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin-bottom: 20px;
        }

        & .containerAvatar{
            background-color: #00cec9;
            width: 200px;                      
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border-radius: 124px 0 0  ;
        }

        & .containerText {
            width: 560px;
            padding: 16px;
            font-size: .9rem;
            
        }

`