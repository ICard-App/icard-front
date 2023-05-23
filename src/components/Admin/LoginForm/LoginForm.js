import React from "react";
import { Button, Form } from "semantic-ui-react";
import "./LoginForm.scss";

export function LoginForm() {
  return (
    <Form ClassName="login-form-admin">
      <Form.Input 
      name="email"
      placeholder="Correo Electrónico"
      />
      <Form.Input 
      name="password"
      type="password"
      placeholder="Contraseña"
      />
      <Button 
      type="submit"
      content="Iniciar Sesión"
      primary fluid
      />
    </Form>
  )
}
