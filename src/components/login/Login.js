import { useState } from "react";
import { connect } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { handleSetAuthedUser } from "../../actions/shared";
import { useNavigate } from "react-router-dom";
import Logo from "../../images/school.png";
import "../../css/Login.css"

const Login = (props) => {
  const navigate = useNavigate();
  const [userText, setUserText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [loginErrorMessage, setLoginErrorMessage] = useState("");


  const isButtonDisable = () => userText === "" || passwordText === "";
  const isUserExist = () => props.users[userText] !== undefined;
  const isUserPasswordCorrect = () => props.users[userText].password === passwordText;

  const handleChange = (e, setText) => {
    const text = e.target.value;
    setText(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(isUserExist()) {
      if (isUserPasswordCorrect()) {
        props.dispatch(handleSetAuthedUser(props.users[userText]));
        navigate("/home");
      } else {
        console.log("wrong password");
        setLoginErrorMessage("wrong password");
      }
    } else {
      console.log("unexist user.");
      setLoginErrorMessage("unexist user.");
    }
    setUserText("");
    setPasswordText("");
  };

  return (
    <div>
      <h1 className="title">Employee Polls</h1>
      <img className="logo" src={Logo} alt="logo"/>
      <h2 className="subtitle">Log In</h2>
      <Form className="form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label >User</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            value={userText}
            onChange={(e) => handleChange(e, setUserText)}
            data-testid='username-input'
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={passwordText}
            onChange={(e) => handleChange(e, setPasswordText)}
            data-testid='password-input'
          />
          { 
            loginErrorMessage === "" 
              ? (
                <Form.Text></Form.Text>
              ) 
              : (
                <Form.Text>{loginErrorMessage}</Form.Text>
              )
          }
        </Form.Group>
        <Button 
          className="button" 
          variant="primary" 
          type="submit" 
          disabled={isButtonDisable()}
          
        >
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
  };
};

export default connect(mapStateToProps)(Login);
