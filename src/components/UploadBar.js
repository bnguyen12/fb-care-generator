import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { Button, Form, FormGroup, Input} from 'reactstrap';

const UploadBar = (props) => {
    return (
        <div>
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
            <Form inline>
                <FormGroup>
                    <Button>Submit</Button>
                    <Input type="something" name="something" id="imageUpload" placeholder="Upload an image" />
                </FormGroup>
            </Form>
        </div>
    );
}

export default UploadBar;