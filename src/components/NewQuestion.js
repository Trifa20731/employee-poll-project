import { useState } from "react";
import { connect } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { handleSaveQuestion } from "../actions/shared";
import { useNavigate } from "react-router-dom";

const NewQuestion = (props) => {

  const navigate = useNavigate();
  const [optionOneText, setOptionOneText] = useState("");
  const [optionTwoText, setOptionTwoText] = useState("");

  const isButtonDisable = () => optionOneText === "" || optionTwoText === "";

  const handleChange = (e, setText) => {
    const text = e.target.value;
    setText(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const question = {
      optionOneText: optionOneText,
      optionTwoText: optionTwoText,
      author: props.authedUser.id,
    };
    props.dispatch(handleSaveQuestion(question));
    setOptionOneText("");
    setOptionTwoText("");
    navigate("/home");
  };

  return (
    <div>
      <h1 className="title">Would You Rather</h1>
      <h2 className="subtitle">Create Your Own Poll</h2>
      <Form onSubmit={handleSubmit} className="form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>First Option</Form.Label>
          <Form.Control
            type="text"
            placeholder="Option One"
            value={optionOneText}
            onChange={(e) => handleChange(e, setOptionOneText)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Second Option</Form.Label>
          <Form.Control
            type="text"
            placeholder="Option Two"
            value={optionTwoText}
            onChange={(e) => handleChange(e, setOptionTwoText)}
          />
        </Form.Group>
        <Button 
          className="button"
          variant="primary" 
          type="submit" 
          disabled={isButtonDisable()}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  };
};

export default connect(mapStateToProps)(NewQuestion);
