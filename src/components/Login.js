import { useState } from "react";
import { connect } from "react-redux";
import { Button, Form } from "react-bootstrap";

const Login = (props) => {
  const [userText, setUserText] = useState("");
  const [passwordText, setPasswordText] = useState("");

  const isButtonDisable = () => userText === "" || passwordText === "";

  const handleChange = (e, setText) => {
    const text = e.target.value;
    setText(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserText("");
    setPasswordText("");
  };

  return (
    <div>
      <h1>Employee Poll</h1>
      <h2>Log In</h2>
      <Form onSubmit={() => {}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            value={userText}
            onChange={(e) => handleChange(e, setUserText)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            placeholder="Password"
            value={passwordText}
            onChange={(e) => handleChange(e, setPasswordText)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={isButtonDisable()}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users }) => {
  return {
    authedUser,
    users
  }
};

export default connect(mapStateToProps)(Login);
