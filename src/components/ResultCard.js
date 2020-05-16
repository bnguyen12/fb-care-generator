import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


class ResultCard extends Component {
  render() {
    return(
      <div>
        <Card>
          <CardImg className="img-fluid" top src="https://i.pinimg.com/236x/5a/4f/e6/5a4fe6d3b2dc74852e1f2665fdfc995f.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default ResultCard;
