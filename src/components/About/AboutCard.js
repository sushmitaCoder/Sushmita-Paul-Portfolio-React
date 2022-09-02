import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sushmita Paul </span>
            from <span className="purple"> Kolkata, West Bengal, India</span>.
            <br />I am a <span className="purple">B.Tech Graduate</span> (JIS -
            IT - 2022) and currently working as a
            <span className="purple"> Software Developer</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Social Media Engagement
            </li>
            <li className="about-activity">
              <ImPointRight /> Studying Finace Books
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
