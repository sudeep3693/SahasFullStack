import { Container, Row, Col } from "react-bootstrap";
import MessageBox from "./MessageBox";
import messages from '../Data/MessageFromTeam';

function MessageContainer() {
  return (
 <Container
  fluid
  className="py-4 px-3 rounded-4"
  style={{
    backgroundColor: "#F5F5F5", // Light Gray BG
    border: "1px solid #ddd",
  }}
>
  <Row className="mb-3 px-2">
    <Col>
      <h4
        className="fw-bold"
        style={{
          color: "#002B5B", // Navy Blue
          borderBottom: "2px solid #FFA500", // Accent
          display: "inline-block",
          paddingBottom: "4px",
        }}
      >
        Message from Our Team
      </h4>
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
