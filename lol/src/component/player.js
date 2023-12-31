import React from "react";
import Card from "react-bootstrap/Card";
import "./playerr.css";

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  Player.defaultProps = {
    name: "Unknown",
    team: "Not specified",
    nationality: "Unknown",
    jerseyNumber: "N/A",
    age: "N/A",
    imageUrl: "https:noway",
  };
  return (
    <Card className="card-container">
      <Card.Img
        variant="top"
        src={imageUrl}
        alt={name}
        className="card-image"
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Team: {team}
          <br />
          Nationality: {nationality}
          <br />
          Jersey Number: {jerseyNumber}
          <br />
          Age: {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default Player;
