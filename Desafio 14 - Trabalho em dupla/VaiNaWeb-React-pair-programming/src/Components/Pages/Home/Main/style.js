import styled from "styled-components";

export const ContainerGeral = styled.section`
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
`

export const Top = styled.section`
    background-color: #F2F4F1;
    height: auto;
    width: 100%;

    @media only screen and (min-width: 360px) and (max-width: 800px){
        height: 250vh;
    }

    @media only screen and (min-width: 412px) and (max-width: 780px){
        height: 250vh;
    }    
`

export const ContainerTitle = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    h1{
        color: #373737;
        font-family: 'Open Sans', sans-serif;
        font-size: 2rem;
        height: 12rem;
        padding-top: 9rem;
        text-align: center;
        text-transform: uppercase;
        width: 100%;
    }

    div{
        border-bottom: 5px solid #373737;
        margin: 0 auto;
        width: 5rem;
    }
`

export const ContainerReceitas = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 45rem;
    justify-content: space-around;
    padding-top: 5rem;
    width: 100%;
`
export const Bolo = styled.div`
    align-items: center;
    background-color: #FFFFFF;
    box-shadow: 5px 5px 5px 5px #00000029;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 30rem;
    margin-bottom: 3rem;
    transition: 1s all;
    width: 20rem;

    &:hover{
        transform: scale(1.1);
    }

    img{
        object-fit: contain;
        width: 20rem;
    }

    div{
        border: solid #373737;
        margin: 0 auto;
        margin-top: 3rem;
        width: 2rem;
    }

    p{
        text-align: center;
        margin-top: 2rem;
        width: 100%
    }
`
export const Pizza = styled.div`
    align-items: center;
    background-color: #FFFFFF;
    box-shadow: 5px 5px 5px 5px #00000029;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 30rem;
    margin-bottom: 3rem;
    transition: 1s all;
    width: 20rem;

    &:hover{
        transform: scale(1.1);
    }

    img{
        object-fit: contain;
        width: 20rem;
    }

    div{
        border: solid #373737;
        margin: 0 auto;
        margin-top: 3rem;
        width: 2rem;
    }

    p{
        text-align: center;
        margin-top: 2rem;
        width: 100%
    }
`
export const Smoothie = styled.div`
    align-items: center;
    background-color: #FFFFFF;
    box-shadow: 5px 5px 5px 5px #00000029;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 30rem;
    margin-bottom: 3rem;
    transition: 1s all;
    width: 20rem;

    &:hover{
        transform: scale(1.1);
    }

    img{
        object-fit: contain;
        width: 20rem;
    }

    div{
        border: solid #373737;
        margin: 0 auto;
        margin-top: 3rem;
        width: 2rem;
    }

    p{
        text-align: center;
        margin-top: 2rem;
        width: 100%
    }
`

export const Mid = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: auto;
    width: 100%;

    img{
        object-fit: cover;
        width: 50%;
    }

    @media only screen and (min-width: 360px) and (max-width: 800px){
        flex-direction: column;

        img{
            width: 100%;
            margin: 0 auto;
        }
    }

    @media only screen and (min-width: 412px) and (max-width: 780px){
        flex-direction: column;

        img{
            width: 100%;
            margin: 0 auto;
        }
    }
`
export const ContainerAbout = styled.div`
    padding: 7rem;
    width: 50%;

    h1{
        text-align: center;
        text-transform: uppercase;
    }

    div{
        border: solid #373737;
        margin: 0 auto;
        margin-top: 1rem;
        width: 2rem;
    }

    p{
        margin-top: 2rem;
    }

    @media only screen and (min-width: 360px) and (max-width: 800px){
        padding: 3rem 1rem 3rem 1rem;
        width: 100%
    }

    @media only screen and (min-width: 412px) and (max-width: 780px){
        padding: 3rem 1rem 3rem 1rem;
        width: 100%
    }
`

export const Bot = styled.div`
    background-color: #DFE4DE;
    display: flex;
    flex-direction: column;   
    align-items: center;
    height: 70vh;
    width: 100%;
    

    h1{
        height: 7rem;
        padding-top: 4rem;
        text-align: center;
        text-transform: uppercase;
        width: 100%;
    }

    h2{
        font-weight: lighter;
        padding-bottom: 2rem;
        text-align: center;
        width: 100%;
    }

    input{
        background-color: #EFF1EE;
        border: none;
        font-weight: bolder;
        height: 4rem;
        margin-bottom: 1rem;
        padding-left: 2rem;
        width: 40%;
    }

    div{
        border: 3px solid black;
        cursor: pointer;
        padding: .5rem 1rem;
        text-align: center;
        text-transform: uppercase;
        transition: 1s all;
        width: 8rem;

        &:hover{
            background-color: whitesmoke;
            transform: scale(1.1);
        }
    }

    @media only screen and (min-width: 360px) and (max-width: 800px){
        height: 50vh;

        h1{
            font-size: 2rem;
        }

        h2{
            font-size: 2rem;
        }

        input{
            width: 90%;
        }

        div{
            width: 90%;
        }
    }

    @media only screen and (min-width: 412px) and (max-width: 780px){
        height: 50vh;
        
        h1{
            font-size: 2rem;
        }

        h2{
            font-size: 2rem;
        }

        input{
            width: 90%;
        }

        div{
            width: 90%;
        }
    }
`