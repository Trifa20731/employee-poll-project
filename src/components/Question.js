import React from "react";
import { connect } from "react-redux";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { formatDate, isQuestionAnsweredByUser } from "../utils/helpers";
import { handleAnswerQuestion } from "../actions/shared";

const Question = (props) => {

  const handlePickOption = (option, e) => {
    e.preventDefault();
    const  { dispatch, authedUser, question } = props;
    dispatch(
      handleAnswerQuestion({
        authedUser: authedUser,
        qid: question.id,
        answer: option,
      })
    );
  };

  return (
    <Container>
      <Row>
        <h1>Poll By {props.question.author}</h1>
      </Row>
      <Row>Avatar</Row>
      <Row>Would You Rather</Row>
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{props.question.optionOne.text}</Card.Title>
              <Button variant="primary" onClick={(e) => handlePickOption("optionOne", e)}>
                Click
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{props.question.optionTwo.text}</Card.Title>
              <Button variant="primary" onClick={(e) => handlePickOption("optionTwo", e)}>
                Click
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = ({ authedUser, questions, users }, { id }) => {
  const TMP_QUESTION_ID = "8xf0y6ziyjabvozdd253nd";
  const question = questions[TMP_QUESTION_ID];
  const user = users[authedUser];
  var isAnswered = isQuestionAnsweredByUser(user, TMP_QUESTION_ID);
  return {
    authedUser,
    question,
    isAnswered,
  };
};

export default connect(mapStateToProps)(Question);
