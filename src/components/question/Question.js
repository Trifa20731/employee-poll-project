import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { formateQuestion, isQuestionAnsweredByUser } from "../../utils/helpers";
import { handleAnswerQuestion } from "../../actions/shared";
import { useLocation, useNavigate, useParams, Navigate } from "react-router-dom";

import UnansweredQuestionCard from "./UnansweredQuestionCard";
import AnsweredQuestionCard from "./AnsweredQuestionCard";

import "../../css/Question.css";

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
  console.log(props);
  console.log(props.isAnswered);

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
  };
  if(!props.question) {
    return <Navigate to = '/404/' />
  } else {
    return (
      <div>
        <h1 className="title">Poll By {props.question.author}</h1>
        <img
          className="questionAuthorIcon"
          src={props.questionAuthor.avatarURL}
          alt="question author icon"
        />
        <h2 className="subtitle">Would You Rather</h2>
        {
          props.isAnswered === true 
            ? (      
              <Container>
                <Row className="questionRow">
                  <Col>
                    <AnsweredQuestionCard
                      optionText = {props.question.optionOneText}
                      optionVotePeopleAmount = {props.question.optionOneVoteAmount}
                      totalVoteAmount = {props.question.totalVoteAmount}
                    />
                  </Col>
                  <Col>
                    <AnsweredQuestionCard
                      optionText = {props.question.optionTwoText}
                      optionVotePeopleAmount = {props.question.optionTwoVoteAmount}
                      totalVoteAmount = {props.question.totalVoteAmount}
                    />
                  </Col>
                </Row>
              </Container>
            )
            : (
              <Container>
                <Row className="questionRow">
                  <Col>
                    <UnansweredQuestionCard
                      optionText = {props.question.optionOneText}
                      handlePickOption = {(e) => handlePickOption("optionOne", e)}
                    />
                  </Col>
                  <Col>
                    <UnansweredQuestionCard
                      optionText = {props.question.optionTwoText}
                      handlePickOption = {(e) => handlePickOption("optionTwo", e)}
                    />
                  </Col>
                </Row>
              </Container>
            )
        }
      </div>
    );
  }
};

const mapStateToProps = ({ authedUser, questions, users }, props) => {
  const { id } = props.router.params;
  const questionItem = questions[id];
  const questionAuthor = questionItem ? users[questionItem.author] : '';
  const user = users[authedUser.id];
  const question = questionItem ? formateQuestion(questionItem) : '';
  
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
