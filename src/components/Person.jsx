import React from 'react'
import Card from 'react-bootstrap/Card'


function Person(props) {
    let fullName = props.person.fullName
    let company = props.person.company
    let devLevel = props.person.devLevel
    let favoriteColor = props.person.favoriteColor
    let bio = props.person.bio

  return (
    <Card style={ {backgroundColor:"antiquewhite"} } className="person-card col-2" >
      <Card.Body>
        <Card.Subtitle style={{borderBottom: "1px solid black"}}>{props.person.devLevel}</Card.Subtitle>
        <Card.Title style={ {color: favoriteColor} }>{ fullName }</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{ company }</Card.Subtitle>
        <Card.Text>
          { bio }
        </Card.Text>
        <Card.Link href="#">Portfolio</Card.Link>
        <Card.Link href="#">Contact Me</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Person;
