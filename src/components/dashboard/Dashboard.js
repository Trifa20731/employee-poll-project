import React, { useState } from "react";
import { connect } from "react-redux";
import QuestionItem from "./QuestionItem";
import { Row, ButtonGroup, ToggleButton } from "react-bootstrap";
import "../../css/Dashboard.css";

const Dashboard = (props) => {
  // console.log(props.newQuestionIds);
  // console.log(props.doneQuestionIds);
  const [radioValue, setRadioValue] = useState("0");

  const radios = [
    { name: "New Question", value: "0" },
    { name: "Done", value: "1" },
    { name: "Both", value: "2" },
  ];

  return (
    <div className="container">
      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant="outline-primary"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      {
        radioValue === "1" ? (<br />) : (
          <div>
            <h1 className="title">New Question</h1>
            <Row xs={1} md={4}>
              {props.newQuestionIds.map((id) => (
                <QuestionItem key={id} id={id} />
              ))}
            </Row>
          </div>
        )
      }
      {
        radioValue === "0" ? (<br />) : (
          <div>
            <h1 className="title">Done</h1>
            <Row xs={1} md={4}>
              {props.doneQuestionIds.map((id) => (
                <QuestionItem key={id} id={id} />
              ))}
            </Row>
          </div>
        )
      }
    </div>
  );
};

// TODO: Change the state conversion.
const mapStateToProps = ({ authedUser, questions }) => {
  // Get the done questions and new question.
  const newQuestions = [];
  const doneQuestions = [];
  for (const questionId in questions) {
    const question = questions[questionId];
    const votesOptionOne = question.optionOne.votes;
    const votesOptionTwo = question.optionTwo.votes;
    if (
      votesOptionOne.includes(authedUser.id) ||
      votesOptionTwo.includes(authedUser.id)
    ) {
      doneQuestions.push(question);
    } else {
      newQuestions.push(question);
    }
  }

  // sort the question
  const newQuestionSorted = newQuestions.sort(
    (a, b) => b.timestamp - a.timestamp
  );
  const doneQuestionSorted = doneQuestions.sort(
    (a, b) => b.timestamp - a.timestamp
  );

  // get question id.
  const newQuestionIds = newQuestionSorted.map((question) => question.id);
  const doneQuestionIds = doneQuestionSorted.map((question) => question.id);

  return {
    newQuestionIds,
    doneQuestionIds,
  };
};

export default connect(mapStateToProps)(Dashboard);
