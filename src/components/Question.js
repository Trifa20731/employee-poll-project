import React from "react";
import { connect } from "react-redux";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { isQuestionAnsweredByUser } from "../utils/helpers";
import { handleAnswerQuestion } from "../actions/shared";
import { Link } from "react-router-dom";

import { useLocation, useNavigate, useParams } from "react-router-dom";

import "../css/Question.css";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };
  return ComponentWithRouterProp;
};

const Question = (props) => {
  const navigate = useNavigate();

  const handlePickOption = (option, e) => {
    e.preventDefault();
    const { dispatch, authedUser, question } = props;
    dispatch(
      handleAnswerQuestion({
        authedUser: authedUser.id,
        qid: question.id,
        answer: option,
      })
    );
    navigate("/home");
  };

  return (
    <Container>
      <Row>
        <h1 className="title">Poll By {props.question.author}</h1>
      </Row>
      <Row>
        <img
          className="questionAuthorIcon"
          src={props.questionAuthor.avatarURL}
          alt="question author icon"
        />
      </Row>
      <Row>
        <h2 className="subtitle">Would You Rather</h2>
      </Row>
      <Row className="questionRow">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>{props.question.optionOne.text}</Card.Title>
              <Button
                variant="primary"
                onClick={(e) => handlePickOption("optionOne", e)}
              >
                Click
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>{props.question.optionTwo.text}</Card.Title>
              <Button
                variant="primary"
                onClick={(e) => handlePickOption("optionTwo", e)}
              >
                Click
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = ({ authedUser, questions, users }, props) => {
  const { id } = props.router.params;
  const question = questions[id];
  const questionAuthor = users[question.author];
  const user = users[authedUser.id];
  var isAnswered = isQuestionAnsweredByUser(user, id);
  return {
    id,
    authedUser,
    question,
    questionAuthor,
    isAnswered,
  };
};

export default withRouter(connect(mapStateToProps)(Question));
