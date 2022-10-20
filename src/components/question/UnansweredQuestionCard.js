import React from "react";
import { Button, Card } from "react-bootstrap";

const UnansweredQuestionCard = (props) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.optionText}</Card.Title>
        <Button
          variant="primary"
          onClick={props.handlePickOption}
        >
          Click
        </Button>
      </Card.Body>
    </Card>
  );
};

export default UnansweredQuestionCard;