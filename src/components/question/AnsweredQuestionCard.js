import React from "react";
import { Card } from "react-bootstrap";

const AnsweredQuestionCard = (props) => {
  const isNoPersonVote = (totalVoteAmount) =>
    totalVoteAmount === 0 ? true : false;
  const getVotePercent = (optionVoteAmount, totalVoteAmount) => {
    return ((optionVoteAmount / totalVoteAmount) * 100).toFixed(2);
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.optionText}</Card.Title>
        {isNoPersonVote(props.totalVoteAmount) ? (
          <Card.Text>Vote Number: 0 Persentage: 0%</Card.Text>
        ) : (
          <Card.Text>
            Vote Number: {props.optionVotePeopleAmount} Persentage:{" "}
            {getVotePercent(
              props.optionVotePeopleAmount,
              props.totalVoteAmount
            )}
            %
          </Card.Text>
        )}
      </Card.Body>
    </Card>
  );
};

export default AnsweredQuestionCard;
