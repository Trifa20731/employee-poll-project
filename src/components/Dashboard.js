import { connect } from "react-redux";
import QuestionItem from "./QuestionItem";


const Dashboard = (props) => {
  // console.log(props.newQuestionIds);
  // console.log(props.doneQuestionIds);
  return (
    <div>
      <h1>New Question</h1>
      {
        props.newQuestionIds.map((id) => (
          <QuestionItem key={id} id={id}/>
        ))
      }
      <h1>Done</h1>
      {
        props.doneQuestionIds.map((id) => (
          <QuestionItem key={id} id={id}/>
        ))
      }
    </div>
  );
};

// TODO: Change the state conversion.
const mapStateToProps = ({ authedUser, questions, users }) => {

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