import React from "react";
import { connect } from "react-redux";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { isQuestionAnsweredByUser } from "../utils/helpers";
import { handleAnswerQuestion } from "../actions/shared";
import { Link} from "react-router-dom";

import { useLocation, useNavigate, useParams } from "react-router-dom";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };
  return ComponentWithRouterProp;
}

const Question = (props) => {

  const navigate = useNavigate();

  const handlePickOption = (option, e) => {
    e.preventDefault();
    const  { dispatch, authedUser, question } = props;
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

const mapStateToProps = ({ authedUser, questions, users }, props) => {
  const { id } = props.router.params;
  const question = questions[id];
  const user = users[authedUser.id];
  var isAnswered = isQuestionAnsweredByUser(user, id);
  return {
    id,
    authedUser,
    question,
    isAnswered,
  };
};

export default withRouter(connect(mapStateToProps)(Question));
