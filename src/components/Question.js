import React from "react"
import { connect } from "react-redux";
import { Button, Card } from "react-bootstrap";
import { formatDate } from "../utils/helpers";

const Question = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.author}</Card.Title>
        <Card.Text>
          {formatDate(props.timestamp)}
        </Card.Text>
        <Button variant="primary">Show</Button>
      </Card.Body>
    </Card>
  );
};

const mapStateToProps = ({ authedUser, users, questions }, { id }) => {
  const question = questions[id];

  return question;
}

export default connect(mapStateToProps)(Question);