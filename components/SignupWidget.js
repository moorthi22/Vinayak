import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

function SignupWidget(props) {
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
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" />
        </FormGroup>
        <FormGroup>
          <Label for="firstName">FirstName</Label>
          <Input type="text" name="fName" id="firstName" />
        </FormGroup>
        <FormGroup>
          <Label for="lastName">LastName</Label>
          <Input type="text" name="lName" id="lastName" />
        </FormGroup>
        <Button>Sign In</Button>
        <Button>Cancel</Button>
      </Form>
    </>
  );
}

export default SignupWidget;
