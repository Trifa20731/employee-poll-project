import React from "react";
import { connect } from "react-redux";

const NewPoll = (props) => {
  return (
    <div>This is the New Poll Page.</div>
  );
};

const mapStateToProps = ({ authedUser, users, questions }) => {

};

export default connect(mapStateToProps)(NewPoll);