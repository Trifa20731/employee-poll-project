import { connect } from "react-redux";
import Question from "./Question";

const Dashboard = (props) => {
  console.log(props)
  return (
    <div>
      <h1 className="diaplay-1">Dashboard</h1>
      {
        props.questionIds.map((id) => (
          <Question key={id} id={id}/>
        ))
      }
    </div>
  );
};

const mapStateToProps = ({ questions }) => ({
  questionIds: Object.keys(questions).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  ),
});

export default connect(mapStateToProps)(Dashboard);