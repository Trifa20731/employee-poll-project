import React from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import { formateUser } from "../../utils/helpers";
import LeaderBoardItem from "./LeaderBoardItem";
import "../../css/LeaderBoard.css"

const LeaderBoard = (props) => {
  return (
    <Table striped bordered hover size="sm" className="rankingTable">
      <thead>
        <tr className="tableHead">
          <th colSpan={2}>Users</th>
          <th>Answered</th>
          <th>Created</th>
        </tr>
      </thead>
      <tbody>
        {props.newUsersSorted.map((user) => (
          <LeaderBoardItem
            key={user.id}
            name={user.name}
            id={user.id}
            url={user.avatarURL}
            numOfAnswered={user.numOfAnswered}
            numOfCreated={user.numOfCreated}
          />
        ))}
      </tbody>
    </Table>
  );
};

const mapStateToProps = ({ authedUser, users }) => {
  const newUsers = [];
  Object.entries(users).forEach(([userId, user]) => {
    const newUser = formateUser(userId, user);
    newUsers.push(newUser);
  });
  const newUsersSorted = newUsers.sort(
    (a, b) =>
      b.numOfAnswered + b.numOfCreated - (a.numOfAnswered + a.numOfCreated)
  );
  return {
    authedUser,
    newUsersSorted,
  };
};

export default connect(mapStateToProps)(LeaderBoard);
