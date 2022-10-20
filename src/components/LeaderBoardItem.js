import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/LeaderBoardItem.css"

const LeaderBoardTd = (props) => {
  return (
    <td colSpan={2}>
      <Container>
        <Row xs="auto">
          <Col>
            <img src={props.url} alt="user icon" className="icon"/>
          </Col>
          <Col>
            <Row className="userName">{props.name}</Row>
            <Row className="userId">{props.id}</Row>
          </Col>
        </Row>
      </Container>

    </td>
  );
};

export default LeaderBoardTd;