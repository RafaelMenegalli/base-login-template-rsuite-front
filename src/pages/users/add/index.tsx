import { useState } from "react";
import { Button, Form, Modal, Toggle } from "rsuite";

interface AddUserModalProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

type AddUserType = {
    name: string;
    email: string;
    password: string;
    active: boolean;
}

export function AddUserModal({ open, setOpen }: AddUserModalProps) {
    const [formValue, setFormValue] = useState<AddUserType>({
        name: '',
        email: '',
        password: '',
        active: false
    });

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <>
            <Modal size="lg" open={open} onClose={handleClose}>
                <Modal.Header>
                    <Modal.Title>Adicionar Usuário</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form
                        fluid
                        onChange={(value: Partial<AddUserType>, _) => setFormValue(prev => ({ ...prev, ...value }))}
                        formValue={formValue}
                    >
                        <Form.Group controlId="name">
                            <Form.ControlLabel>Nome</Form.ControlLabel>
                            <Form.Control name="name" />
                            <Form.HelpText>Obrigatório</Form.HelpText>
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.ControlLabel>Email</Form.ControlLabel>
                            <Form.Control name="email" type="email" />
                            <Form.HelpText>Obrigatório</Form.HelpText>
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.ControlLabel>Senha</Form.ControlLabel>
                            <Form.Control name="password" type="password" autoComplete="off" />
                            <Form.HelpText>Obrigatório</Form.HelpText>
                        </Form.Group>
                        <Form.Group controlId="active">
                            <Form.ControlLabel>Ativo</Form.ControlLabel>
                            <Form.Control
                                name="active"
                                accepter={Toggle}
                                unCheckedChildren="Inativo"
                                checkedChildren="Ativo"
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose} appearance="subtle">
                        Cancelar
                    </Button>
                    <Button onClick={handleClose} appearance="primary" color="green">
                        Gravar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}