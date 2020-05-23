import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

function LoginWidget(props) {
  return (
    <>
      <Form>
        <FormGroup>
          <Label for="usrName">UserName</Label>
          <Input type="text" name="userName" id="usrName" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" />
        </FormGroup>
        <Button>Sign In</Button>
        <Button>Cancel</Button>
      </Form>
    </>
  );
}

export default LoginWidget;
