import React from "react"
import { connect } from "react-redux";
import { Button, Card, Col } from "react-bootstrap";
import { formatDate } from "../../utils/helpers";
import { useNavigate } from "react-router-dom";
import "../../css/QuestionItem.css"

const QuestionItem = (props) => {

  const navigate = useNavigate();

  const handleGoToQuestion = (event, id) => {
    event.preventDefault();
    navigate(`/questions/${id}`);
  };

  return (
    <Col>
      <Card border="primary" style={{ width: '18rem' }}  className="item">
        <Card.Body>
          <Card.Title>{props.question.author}</Card.Title>
          <Card.Text>
            {formatDate(props.question.timestamp)}
          </Card.Text>
          <Button 
            variant="primary"
            onClick={(event) => handleGoToQuestion(event, props.id)}
          >
            Show
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

const mapStateToProps = ({ authedUser, questions }, { id }) => {
  const question = questions[id];
  return { 
    id,
    authedUser,
    question
  }
}

export default connect(mapStateToProps)(QuestionItem);