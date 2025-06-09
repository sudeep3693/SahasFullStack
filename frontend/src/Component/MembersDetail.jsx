import { Container, Row, Col } from 'react-bootstrap';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import financialData from '../Data/CompanyFinancialDetails';
import '../Css/CustomFinancialDetail.css';

function MembersDetail() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const color = '#85193C';
  return (
    <div className="py-5 px-xs-1 px-sm-1 px-3" style={{ backgroundColor: '#f8f9fa' }}>
      <Container fluid>
        {/* Date and Title */}
        <Row className="mb-4 mb-sm-2 align-items-center justify-content-between px-2 px-sm-1 px-sm-1">

          <Col xs={12} md="auto" className="text-center mx-auto">
            <h2 className="fw-bold pb-2 d-inline-block" style={{ color: color }}>
              -Institutional Profile-
            </h2>
          </Col>

          <p className="d-flex align-items-center text-muted fs-6">Updated as per 2080/81 report</p>

        </Row>

        {/* Info Cards */}
        <Row className="justify-content-center " ref={ref}>
          {financialData.map((item, idx) => (
            <Col
              key={idx}
              xs={6}
              sm={6}
              md={4}
              lg={2}
              className="text-center p-3 p-xs-1 p-sm-2"
            >
              <div
                className="p-3 p-sm-2 p-md-3 p-lg-4 rounded-4 shadow-sm bg-white h-100 d-flex flex-column justify-content-center align-items-center border border-2"
                style={{
                  borderColor: '#0d6efd',
                  transition: 'transform 0.3s ease-in-out',
                }}
              >
                {item.icon}
                <div className="fw-bold fs-5 fs-md-4 fs-lg-3 text-wrap-break" style={{ color: color }}>
                  {inView ? <CountUp end={item.count} duration={2} /> : 0}+
                </div>

                <div className="fs-6 fw-light text-secondary text-wrap-break">{item.label}</div>

              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default MembersDetail;
