import React, { useState } from 'react';
import {
  Button,
  ButtonGroup,
  Card,
  CardImg,
  CardText,
  CardTitle,
  CardBody,
  Col,
  Container,
  Row
} from 'reactstrap';

const ResultCard = (props) => {
  const [finished, setFinished] = useState(true);

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <CardBody>
              <CardTitle>Original Image</CardTitle>
              <CardImg src="https://www.thedogdigest.com/wp-content/uploads/2019/01/28430872_1354897571322537_7929861486552285184_n-1.jpg.webp" alt="Original" />
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            {finished ? 
              <CardBody>
                <CardTitle>Resulting Image</CardTitle>
                {/* <ButtonGroup id="button-group">
                  <Button>Small</Button>
                  <Button>Medium</Button>
                  <Button>Large</Button>
                  <Button color="primary">download</Button>
                </ButtonGroup> */}
                <CardImg top width="100%" src="https://www.thedogdigest.com/wp-content/uploads/2019/01/28430872_1354897571322537_7929861486552285184_n-1.jpg.webp" alt="Result" />
              </CardBody> :
              <CardBody>
                <CardTitle>Resulting Image</CardTitle>
                <CardText>Your resulting image will appear here.</CardText>
              </CardBody>
              }
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ResultCard;
