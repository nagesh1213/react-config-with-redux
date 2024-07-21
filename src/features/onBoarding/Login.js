import * as React from "react";
import Form from "@cloudscape-design/components/form";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import FormField from "@cloudscape-design/components/form-field";
import Input from "@cloudscape-design/components/input";
import "../../index.css";
import { Checkbox } from "@cloudscape-design/components";

const Login = () => {
  return (
    <div className="login-container">
      <form onSubmit={(e) => e.preventDefault()}>
        <Form
          actions={
            <SpaceBetween direction="horizontal" size="xs">
              <Button variant="primary">Login</Button>
            </SpaceBetween>
          }
          header={<Header variant="h1">Login</Header>}
        >
          <Container>
            <SpaceBetween direction="vertical" size="l">
              <FormField label="Username">
                <Input value={""} onChange={() => {}} />
              </FormField>
              <FormField label="Password">
                <Input value={""} onChange={() => {}} />
              </FormField>
              <FormField>
                <Checkbox checked={false}>Remember Me</Checkbox>
              </FormField>
            </SpaceBetween>
          </Container>
        </Form>
      </form>
    </div>
  );
};
export default Login;
