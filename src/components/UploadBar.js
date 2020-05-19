import React, {useState} from 'react';
import { Button, Form, FormGroup, Input, Spinner, Container, Row, Col } from 'reactstrap';

const UploadBar = (props) => {
    const [imageSource, setImageSource] = useState('');
    const [imageUploaded, setImageUploaded] = useState(false); 
    const [image, setImage] = useState('');
    const [spinner, setSpinner] = useState(false);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setSpinner(true);
        setImageUploaded(true);
        setImage(imageSource);
        setSpinner(false);
    }

    const handleBrokenImage = (e) => {
        e.preventDefault();
        setImage(process.env.PUBLIC_URL + '/care-emoji.png');
    }

    return (
        <div>
            <Container id="uploadBar">
                <Row>
                    <Col xs="0.5">
                        {spinner ? <Spinner color="primary" /> : <div></div>}
                    </Col>
                    <Col xs="auto">
                        <Form inline onSubmit={handleSubmit}>
                            <FormGroup>
                                <Button>Submit</Button>
                                <Input placeholder='Enter an image url...' value={imageSource} onChange={e => setImageSource(e.target.value)}/>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
            {imageUploaded ? <img src={image} onError={handleBrokenImage} alt="Care Emoji" /> : <div></div>}
        </div>
    );
}

export default UploadBar;