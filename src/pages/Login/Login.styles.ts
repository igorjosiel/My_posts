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

const InputsContainer = styled.div`
    width: 80%;
    margin: auto;
    height: 40%;
`;

const Input = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid #d9d9d9;

    & > .input-label {
        font-family: Poppins-Regular;
        font-size: 1rem;
        line-height: 1.5;
    }

    & > .input-icon {
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        pointer-events: none;

        &::before {
            content: "";
            display: block;
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 0;
            height: 2px;
            background: #7f7f7f;
            transition: all 0.4s;
        }

        &::after {
            content: attr(data-symbol);
    font-family: Material-Design-Iconic-Font;
    color: #adadad;
    font-size: 22px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: calc(100% - 20px);
    bottom: 0;
    left: 0;
    padding-left: 13px;
    padding-top: 3px
        }
    }

    & input {
        font-family: Poppins-Medium;
        font-size: 1.1rem;
        line-height: 1.2;
        height: 40px;
        background: transparent;
        padding: 0 7px 0 43px;
        border: none;
        border-radius: 7px;
    }

    & input:focus {
        border: none;
        outline: none;
    }
`;

export {
    Container,
    TitleContainer,
    InputsContainer,
    Input,
}