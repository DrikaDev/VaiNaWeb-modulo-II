import styled from "styled-components";
import Recipes from '../../../../Assets/Recipes-Background.png'
import MenuHamburguer from "../../../../Assets/MenuHamburguer.png"

export const Container = styled.header`
    width: 100%;
    height: 864px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Box = styled.div`
    background-image: url(${Recipes});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    width: 96%;
    height: 96%;
    
    h1{
        position: absolute;
        text-align: center;
        top: 50%;
        font-size: 5.5rem;
        width: 100%;
    } 

    @media only screen and (min-width: 360px) and (max-width: 800px){  
        background-position: right;

        h1{
            font-size: 2rem;
        }

        div{
            width: 100%;
        }

        figure{
            width: 3rem;
            height: 3rem;
            margin-left: 85%;
            background-image: url(${MenuHamburguer});
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
        }
}

    @media only screen and (min-width: 412px) and (max-width: 780px){
        background-position: right;

        h1{
            font-size: 2rem;
        }

        div{
            width: 100%;
        }

        figure{
            width: 3rem;
            height: 3rem;
            margin-left: 85%;
            background-image: url(${MenuHamburguer});
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
        }
}
`
export const BoxMenu = styled.div`
    position: absolute;
    height: 20vh;
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media only screen and (min-width: 360px) and (max-width: 800px){  
        display: none;
}

    @media only screen and (min-width: 412px) and (max-width: 780px){
        display: none;
}
`
export const MenuLeft = styled.div`
    margin: 2rem;
`
export const MenuRight = styled.div`
    width: 40%;
    display: flex;
    align-items: center;

    ul{
        width: 100%;
        list-style: none;
        display: flex;
        justify-content: space-around;
    }
    li{
        font-size: 1.5rem;
        transition: all 1s;
    
    &:hover{
        text-decoration: none;
        transform: scale(1.1);
        cursor: pointer;
        color: black;
        font-weight: 600;
        border: solid;
    }
}
`   