import {
  Container,
  TitleContainer,
  InputsContainer,
  Input,
} from "./Login.styles";

const Login = () => {
  return (
    <Container>
      <TitleContainer>
        <h1>Login</h1>
      </TitleContainer>
      <InputsContainer>
        <Input>
          <span className="input-label">Usuário</span>
          <input type={'text'} placeholder={'Digite o seu usuário'} />
          <span className="input-icon" data-symbol={'+'}></span>
        </Input>
        <Input>
          <span className="input-label">Senha</span>
          <input type={'text'} placeholder={'Digite o sua senha'} />
          <span className="input-icon" data-symbol={'+'}></span>
        </Input>
      </InputsContainer>
    </Container>
  );
};

export default Login;
