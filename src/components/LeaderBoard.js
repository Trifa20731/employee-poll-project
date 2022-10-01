import React from "react";
import { connect } from "react-redux";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

const LeaderBoard = (props) => {
  console.log(props.authedUser);
  console.log(props.newUsersSorted);
  return (
    <div>This is the leaderboard page.</div>
  );
};

const mapStateToProps = ({ authedUser, users }) => {
  const newUsers = []
  Object.entries(users).forEach(([userid, user]) => {
    const numOfAnswered = Object.keys(user.answers).length
    const numOfCreated = user.questions.length
    const avatarURL = user.avatarURL
    const name = user.name
    const newUser = {
      id: userid,
      name: name,
      avatarURL: avatarURL,
      numOfAnswered: numOfAnswered,
      numOfCreated: numOfCreated
    }
    newUsers.push(newUser);
  });
  const newUsersSorted = newUsers.sort(
    (a, b) => (b.numOfAnswered+b.numOfCreated) - (a.numOfAnswered+a.numOfCreated)
  )
  return {
    authedUser,
    newUsersSorted
  };

};

export default connect(mapStateToProps)(LeaderBoard);