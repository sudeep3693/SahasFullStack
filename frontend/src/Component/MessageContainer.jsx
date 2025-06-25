import { Container, Row, Col } from "react-bootstrap";
import MessageBox from "./MessageBox";
import { useState, useEffect } from "react";
import config from "../Constants/config";
import axios from 'axios';
function MessageContainer() {

   const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        try {
            const res = await axios.get(`${config.baseUrl}/messages/all`);
            setMessages(res.data);
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };

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
