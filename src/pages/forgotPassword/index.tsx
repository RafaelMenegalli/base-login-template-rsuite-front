import {
    Button,
    Container,
    Content,
    Form,
    Panel,
    Stack,
    VStack
} from 'rsuite';
import styles from "./styles.module.scss";

export default function ForgotPassword() {
    return (
        <>
            <Container className={styles.container}>
                <Content>
                    <Stack alignItems="center" justifyContent="center" style={{ height: '100%' }}>
                        <Panel header="Esqueceu a Senha" bordered style={{ width: 400 }}>
                            <Form fluid>
                                <Form.Group>
                                    <Form.ControlLabel>Email</Form.ControlLabel>
                                    <Form.Control name="email" placeholder="Email para envio de troca de senha..." />
                                </Form.Group>

                                <VStack spacing={10}>
                                    <Button appearance="primary" block>
                                        Enviar
                                    </Button>
                                    <a href="/">Voltar para Login</a>
                                </VStack>
                            </Form>
                        </Panel>
                    </Stack>
                </Content>
            </Container>
        </>
    )
}