import { connect } from "react-redux";
import Question from "./Question";


const Dashboard = (props) => {
  return (
    <div>
      <h1>New Question</h1>
      {
        props.newQuestions.map((question) => (
          <Question key={question.id} id={question.id}/>
        ))
      }
      <h1>Done</h1>
      {
        props.newQuestions.map((question) => (
          <Question key={question.id} id={question.id}/>
        ))
      }
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions }) => {

  const newQuestions = [];
  const doneQuestions = [];
  for (const questionId in questions) {
    const question = questions[questionId];
    const votesOptionOne = question.optionOne.votes;
    const votesOptionTwo = question.optionTwo.votes;
    if (votesOptionOne.includes(authedUser) || votesOptionTwo.includes(authedUser)) {
      doneQuestions.push(question);
    } else {
      newQuestions.push(question);
    }
  };
  const newQuestionIds = newQuestions.sort(
    (a, b) => b.timestamp - a.timestamp
  )
  const doneQuestionIds = doneQuestions.sort(
    (a, b) => b.timestamp - a.timestamp
  )
  return {
    newQuestions,
    doneQuestions
  };
};

export default connect(mapStateToProps)(Dashboard);