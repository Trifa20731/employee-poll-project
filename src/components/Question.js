import React from "react"
import { connect } from "react-redux";
import { Button, Card } from "react-bootstrap";
import { formatDate } from "../utils/helpers";

const navigateToPoll = () => {

};

const Question = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.question.author}</Card.Title>
        <Card.Text>
          {formatDate(props.question.timestamp)}
        </Card.Text>
        <Button 
          variant="primary"
          onClick={() => {}}
        >
          Show
        </Button>
      </Card.Body>
    </Card>
  );
};

const mapStateToProps = ({ authedUser, questions }, { id }) => {
  const question = questions[id];
  return { 
    authedUser,
    question
  }
}

export default connect(mapStateToProps)(Question);