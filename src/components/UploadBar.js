import React, {useState} from 'react';
import { Button, Form, FormGroup, Input, Spinner, Container, Row, Col } from 'reactstrap';

const UploadBar = (props) => {
    const [image, setImage] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(image);
    }

    return (
        <div>
            <Container>
                <Row id="uploadBar">
                    <Col xs="0.5">
                        <Spinner color="primary" />
                    </Col>
                    <Col xs="auto">
                        <Form inline onSubmit={handleSubmit}>
                            <FormGroup>
                                <Button>Submit</Button>
                                <Input id="imageUpload" placeholder='Upload an image' value={image} onChange={e => setImage(e.target.value)}/>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
            {/* {
                if (imageUploaded != '') {
                    console.log("hi")
                }
            } */}
        </div>
    );
}

export default UploadBar;