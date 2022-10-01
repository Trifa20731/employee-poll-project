import React from "react";
import { connect } from "react-redux";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { formatDate } from "../utils/helpers";
import Option from "./Option";

const Poll = (props) => {

  return (
    <Container>
      <Row>
        <h1>Poll By {props.question.author}</h1>
      </Row>
      <Row>Avatar</Row>
      <Row>Would You Rather</Row>
      <Row>
        <Col>
          <Option text={props.question.optionOne.text}/>
        </Col>
        <Col>
          <Option text={props.question.optionTwo.text}/>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = ({ authedUser, questions }, { id }) => {
  const TMP_ID = "8xf0y6ziyjabvozdd253nd";
  const isAnswered = false;
  const question = questions[TMP_ID];
  const votesOptionOne = question.optionOne.votes;
  const votesOptionTwo = question.optionTwo.votes;
  if (
    votesOptionOne.includes(authedUser) ||
    votesOptionTwo.includes(authedUser)
  ) {
    isAnswered = true;
  }
  return {
    authedUser,
    question,
    isAnswered,
  };
};

export default connect(mapStateToProps)(Poll);
