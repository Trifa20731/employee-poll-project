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

  // Get the done questions and new question.
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