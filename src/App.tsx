import { forwardRef, useState } from 'react';
import { FaGoogle, FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Container,
  Content,
  Divider,
  Form,
  Input,
  InputGroup,
  Panel,
  Stack,
  VStack,
  type InputGroupProps
} from 'rsuite';
import styles from "./styles/app.module.scss";

const Password = forwardRef<HTMLDivElement, InputGroupProps>((props, ref) => {
  const [visible, setVisible] = useState(false);

  const handleChange = () => {
    setVisible(!visible);
  };

  return (
    <InputGroup inside ref={ref} {...props}>
      <Input type={visible ? 'text' : 'password'} />
      <InputGroup.Button onClick={handleChange}>
        {visible ? <FaRegEye /> : <FaRegEyeSlash />}
      </InputGroup.Button>
    </InputGroup>
  );
});

function App() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    navigate('/dashboard');
  }

  return (
    <>
      <Container className={styles.container}>
        <Content>
          <Stack alignItems="center" justifyContent="center" style={{ height: '100%' }}>
            <Panel header="Login" bordered style={{ width: 400 }}>
              <Form fluid>
                <Form.Group>
                  <Form.ControlLabel>Email</Form.ControlLabel>
                  <Form.Control name="name" />
                </Form.Group>
                <Form.Group>
                  <Form.ControlLabel>Senha</Form.ControlLabel>
                  {/* @ts-ignore */}
                  <Form.Control name="password" autoComplete="off" accepter={Password} />
                </Form.Group>

                <VStack spacing={10}>
                  <Button appearance="primary" block onClick={handleLogin}>
                    Entrar
                  </Button>
                  <a href='/forgotpassword'>Esqueceu a Senha?</a>
                </VStack>
              </Form>

              <Divider>Entrar com</Divider>

              <Button endIcon={<FaGoogle />} block href="/">
                Continuar com Google
              </Button>
            </Panel>
          </Stack>
        </Content>
      </Container>
    </>
  )
}

export default App
