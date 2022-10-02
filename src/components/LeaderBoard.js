import React from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import { formateUser } from "../utils/helpers";

const LeaderBoard = (props) => {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th colSpan={2}>Users</th>
          <th>Answered</th>
          <th>Created</th>
        </tr>
      </thead>
      <tbody>
        {props.newUsersSorted.map((user) => (
          <tr key={user.id}>
            <td colSpan={2}>{user.name}</td>
            <td>{user.numOfAnswered}</td>
            <td>{user.numOfCreated}</td>
          </tr>
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
