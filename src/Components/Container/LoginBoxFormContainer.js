import { Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import { useState } from "react";
import Modal from 'react-modal';
import Main from "../../Main";

const FormControl = styled(Form.Control)`
    width: 400px;
`

const Modal2 = styled(Modal)`
    width: 100%;
    height: 100%;
    background-color:white;
`

const LoginBoxFormContainer = () => {
    const [ID, setID] = useState('');
    const [PW, setPW] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const LoginButtonClick = () => {
        console.log('loginButtonClick : ' + ID + '/' + PW);
        setIsOpen(true);
    }

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>ID</Form.Label>
                <FormControl type="text" placeholder="Enter ID" onChange={(e) => setID(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>PW</Form.Label>
                <FormControl type="password" placeholder="Enter PW" onChange={(e) => setPW(e.target.value)} />
            </Form.Group>
            <Button variant="primary" onClick={LoginButtonClick}>
                Submit
            </Button>
            <Modal2 isOpen={isOpen}>
                <Main />
            </Modal2>
        </Form>
    )
}

export default LoginBoxFormContainer;