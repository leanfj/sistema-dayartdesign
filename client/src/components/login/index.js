import React from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Container
} from 'reactstrap';
import './index.css';

import logo from '../../assets/img/logo.png';

const Login = ({ login }) => {
  return (
    <div className="Login">
      <Container className="mt-5">
        <img src={logo} className="mx-auto d-block" alt="logo" />
        <h1 className="text-center">Day Art Design</h1>
        <Form onSubmit={login}>
          <FormGroup row>
            <Label htmlFor="email" sm={2}>
              Email
            </Label>
            <Col sm={10}>
              <Input type="email" id="email" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="password" sm={2}>
              Senha
            </Label>
            <Col sm={10}>
              <Input type="password" id="password" />
            </Col>
          </FormGroup>

          <Button type="submit" color="primary" className="mx-auto d-block">
            Login
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
