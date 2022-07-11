import styled from "styled-components";

const Container = styled.div`
    width: 40%;
    height: 600px;
    background: white;
    margin: 5vh auto 0px;
    border-radius: 10px;
`;

const TitleContainer = styled.div`
    width: 30%;
    margin: auto;
    height: 15%;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;

    & > h1 {
        text-align: center;
    }
`;

export {
    Container,
    TitleContainer,
}