import { 
    Col, 
    Container, 
    Row,
} from 'react-bootstrap';

export default function MiddleSection() {
  return (
    <Container
      fluid
      className="grad-background"


    >

        {/* had to manually retrieve background image from original site 
        because link didn't work. therefore the text is baked into the background image 
        and the code below is I would have included otherwise.  */}
      {/* <Row className="middle-row align-items-center">
        <Col className="text-center text-white middle-text">
          <h3 className="fw-bold">
            Now accepting reservations for St Patrick&apos;s Day
          </h3>

          <h3 className="fw-bold">
            Please call 808-531-0422 for reservations
          </h3>

          <h3 className="fw-bold">
            St Patrick&apos;s Day To-Go Orders can be ordered on
            <br />
            our website menu.
          </h3>
        </Col>
      </Row> */}
    </Container>
  );
}
