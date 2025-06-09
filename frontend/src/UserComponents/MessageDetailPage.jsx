import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import messages from "../Data/MessageFromTeam"
import MessageBox from "../Component/MessageBox";
import '../Css/MessageDetailPage.css'

function MessageDetailPage() {
 const { id } = useParams();

  const message = messages.find((s) => s.id.toString() === id);

  if (!message) {
    return <p className="text-center mt-5">Message not found.</p>;
  }

  return (
    <div className="message-detail-bg py-5">
      <Container>
        <Row>
          <Col sm={12} md={4}>
            <div>
              <MessageBox
                position={message.position}
                image={message.image}
                descriptionList={message.descriptionList}
                
              />
            </div>
          </Col>

          <Col sm={12} md={8}>
            <div className="message-oath-box p-4">
              <h4 className="mb-3">Team Message</h4>
              <p className="text-muted" style={{ whiteSpace: 'pre-line' }}>
                {message.oath}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MessageDetailPage;
