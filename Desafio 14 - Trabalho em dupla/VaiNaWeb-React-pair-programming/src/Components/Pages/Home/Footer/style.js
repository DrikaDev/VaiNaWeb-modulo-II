import styled from "styled-components";

export const Container = styled.div`
    background-color: #F2F4F1;
    width: 100%;
    height: 250px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;

    @media only screen and (min-width: 360px) and (max-width: 800px){
        flex-direction: column-reverse;
        height: 380px;
        padding-bottom: 2rem;
    }

    @media only screen and (min-width: 412px) and (max-width: 780px){
        flex-direction: column-reverse;
        height: 350px;
        padding-bottom: 2rem;
    }
`
export const MenuLeft = styled.div`
    height: 3rem;
    width: 50%;
    display: flex;
    flex-direction: row;
    
    div{
        display: flex;
        justify-content: space-around;
        margin-left: 4rem;
        width: 40%;
    }

    img{
        object-fit: contain;
        width: 3rem;
        transition: 1s all;

        &:hover{
        transform: scale(1.2);
        }
    }

    @media only screen and (min-width: 360px) and (max-width: 800px){  
        margin-bottom: 3.5rem;
        width: 100%;

        div{
            margin: 0 auto;
            width: 80%;
        }
    }

    @media only screen and (min-width: 412px) and (max-width: 780px){
        width: 100%;

        div{
            margin: 0 auto;
            width: 80%;
        }
    }
`
export const MenuRight = styled.div`
    height: 3rem;
    width: 50%;
    display: flex;
    flex-direction: row;

    ul{
        display: flex;
        justify-content: space-around;
        margin-left: 4rem;
        width: 80%;
    }
    
    li{
        font-size: 1.5rem;
        list-style: none;
        text-align: center;
        transition: all 1s;
        width: 30%;

        &:hover{
        transform: scale(1.2);
        }
    }

    @media only screen and (min-width: 360px) and (max-width: 800px){
        height: 15rem;
        width: 100%;
        align-items: center;

        ul{
            
            flex-direction: column;
            justify-content: space-around;
            height: 11rem;
            margin: 0 auto;
        }

        li{
            font-size: 1.5rem;
            height: 2rem;
            width: 100%;
        }
    }

    @media only screen and (min-width: 412px) and (max-width: 780px){
        height: 15rem;
        width: 100%;
        align-items: center;

        ul{
            
            flex-direction: column;
            justify-content: space-around;
            height: 11rem;
            margin: 0 auto;
        }

        li{
            font-size: 1.5rem;
            height: 2rem;
            width: 100%;
        }
    }
`
export const Rodape = styled.div`
    background-color: #446061;
    width: 100%;
    height: 40px;
    text-align: center;
    padding-top: 10px;
    
    p{
        font-size: 0.8rem;
        color: #FFFFFF;
    }  
`