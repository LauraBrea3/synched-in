import React from 'react'
import Card from 'react-bootstrap/Card'


function Person(props) {
    let fullName = props.person.fullName
    let company = props.person.company
    let devLevel = props.person.devLevel

  return (
    <Card className="person-card col-2">
      <Card.Body>
        <Card.Title>{fullName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{devLevel}</Card.Subtitle>
        <Card.Text>
          Currently working for {company}
        </Card.Text>
        <Card.Link href="#">Portfolio</Card.Link>
        <Card.Link href="#">Contact Me</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Person;
