import { Container, Row, Col } from 'react-bootstrap';
import AdminNavBar from '../AdminComponents/AdminNavbar';
import { Outlet } from 'react-router-dom';

function Admin() {
  return (
    <div>
      <AdminNavBar />
      <Container fluid>
        <Row>
          <Col>
            <Outlet /> {/* Nested routes render here */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Admin;
