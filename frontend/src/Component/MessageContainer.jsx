import { Container, Row, Col } from "react-bootstrap";
import MessageBox from "./MessageBox";
import messages from '../Data/MessageFromTeam';
function MessageContainer() {
  
  return (
    <Container
      fluid
      className="py-2 px-2 rounded-4"
      style={{
        background: "linear-gradient(to bottom right,#5409DA)",
      }}
    >
      <Row className="mb-1 px-2">
        <Col>
          <h4 className="fw-bold text-white">Message from Our Team</h4>
        </Col>
      </Row>

      {messages.map((msg, idx) => (
        <MessageBox
          key={idx}
          position={msg.position}
          image={msg.image}
          descriptionList={msg.descriptionList}
          id={msg.id}
        />
      ))}
    </Container>
  );
}

export default MessageContainer;
