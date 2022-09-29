import { connect } from "react-redux";
import Question from "./Question";

const Dashboard = (props) => {
  return (
    <div>
      <h1>New Question</h1>
      {
        props.newQuestionIds.map((id) => (
          <Question key={id} id={id}/>
        ))
      }
      <h1>Done</h1>
      {
        props.doneQuestionIds.map((id) => (
          <Question key={id} id={id}/>
        ))
      }
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions }) => {

  const newQuestionIds = [];
  const doneQuestionIds = [];
  for (const questionId in questions) {
    const question = questions[questionId];
    const votesOptionOne = question.optionOne.votes;
    const votesOptionTwo = question.optionTwo.votes;
    if (votesOptionOne.includes(authedUser) || votesOptionTwo.includes(authedUser)) {
      doneQuestionIds.push(questionId);
    } else {
      newQuestionIds.push(questionId);
    }
  };
  return {
    newQuestionIds,
    doneQuestionIds
  };
};

export default connect(mapStateToProps)(Dashboard);