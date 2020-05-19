import React, { Component } from 'react';
import {
  Button,
  ButtonGroup,
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardBody
} from 'reactstrap';


class ResultCard extends Component {
  constructor() {
    super();
    this.state = {
      finished: true
    }
  }

  render() {
    let cardBody;
    if (this.state.finished) {
      cardBody = (
        <CardBody>
          <Button color="primary">download</Button>
          <ButtonGroup>
            <Button>Small</Button>
            <Button>Medium</Button>
            <Button>Large</Button>
          </ButtonGroup>
        </CardBody>
      );
    } else {
      cardBody = (
        <CardBody>
          <CardTitle>Resulting Image</CardTitle>
          <CardText>Your finished care emoji will be shown here</CardText>
        </CardBody>
      );
    }

    return(
      <div>
        <CardDeck>
          <Card>
            <CardBody>
              <CardTitle>Original Image</CardTitle>
            </CardBody>
            <CardImg top width="100%" src="https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e.jpg" alt="Card image cap" />
          </Card>
          <Card>
            {cardBody}
            <CardImg top width="100%" src="https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e.jpg" alt="Card image cap" />
          </Card>
        </CardDeck>
      </div>
    );
  }
}

export default ResultCard;
