import React from "react";
import { Button, Card } from "react-bootstrap";

const Option = ({ text }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{text}</Card.Title>
          <Button variant="primary" onClick={() => {}}>
            Click
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Option;
