import { connect } from "react-redux";
import QuestionItem from "./QuestionItem";
import { Row } from "react-bootstrap";
import "../../css/Dashboard.css"

const Dashboard = (props) => {
  // console.log(props.newQuestionIds);
  // console.log(props.doneQuestionIds);
  return (
    <div className="container">
      <h1 className="title">New Question</h1>
        <Row xs={1} md={4}>
          {
            props.newQuestionIds.map((id) => (
              <QuestionItem key={id} id={id}/>
            ))
          }
        </Row>
      <h1 className="title">Done</h1>
        <Row xs={1} md={4}>
          {
            props.doneQuestionIds.map((id) => (
              <QuestionItem key={id} id={id}/>
            ))
          }
        </Row>
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
    if (votesOptionOne.includes(authedUser.id) || votesOptionTwo.includes(authedUser.id)) {
      doneQuestions.push(question);
    } else {
      newQuestions.push(question);
    }
  };

  // sort the question
  const newQuestionSorted = newQuestions.sort(
    (a, b) => b.timestamp - a.timestamp
  )
  const doneQuestionSorted = doneQuestions.sort(
    (a, b) => b.timestamp - a.timestamp
  )

  // get question id.
  const newQuestionIds = newQuestionSorted.map(question => question.id)
  const doneQuestionIds = doneQuestionSorted.map(question => question.id)

  return {
    newQuestionIds,
    doneQuestionIds
  };

};

export default connect(mapStateToProps)(Dashboard);