import {
  Col,
  Container,
  Row,
} from 'react-bootstrap';

export default function Footer() {
  return (
    <Container
      as="footer"
      fluid
      className="site-footer"
    >
      <Container>
        <Row>
          {/* Lunch column */}
          <Col
            xs={12}
            md={4}
            className="mb-3 footer-column"
          >
            <p className="fw-bold footer-heading">
              Lunch
            </p>

            <hr />

            <p>
              Monday - Friday: 11:00am - 2:30pm
            </p>

            <p>
              Saturday - Sunday: Not open
            </p>
          </Col>

          {/* Bar column */}
          <Col
            xs={12}
            md={4}
            className="mb-3 footer-column"
          >
            <p className="fw-bold footer-heading">
              Bar
            </p>

            <hr />

            <p>
              Monday - Friday: From 11:00am to closing
            </p>

            <p>
              Saturday - Sunday: Not open
            </p>
          </Col>

          {/* Dinner column */}
          <Col
            xs={12}
            md={4}
            className="mb-3 footer-column"
          >
            <p className="fw-bold footer-heading">
              Dinner
            </p>

            <hr />

            <p>
              Monday - Friday: 5:00pm - 9:00pm
            </p>

            <p>
              Saturday - Sunday: Not open
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}