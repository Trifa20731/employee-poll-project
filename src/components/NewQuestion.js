import { useState } from "react";
import { connect } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { handleSaveQuestion } from "../actions/shared";

const NewQuestion = (props) => {
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
      author: props.authedUser,
    };
    props.dispatch(handleSaveQuestion(question));
    setOptionOneText("");
    setOptionTwoText("");
  };

  return (
    <div>
      <h1>Would You Rather</h1>
      <h2>Create Your Own Poll</h2>
      <Form onSubmit={handleSubmit}>
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
        <Button variant="primary" type="submit" disabled={isButtonDisable()}>
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
