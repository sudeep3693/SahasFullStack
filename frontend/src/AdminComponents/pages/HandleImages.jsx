import React, { useState } from 'react';
import { Button, Card, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import AllImages from '../DetailImages';

function HandleImages({getLink, postLink, selectionHeader, displayHeader, usedIn}) {
  const [images, setImages] = useState([{ file: null}]);

  const handleAddNew = () => {
    setImages([...images, { file: null }]);
  };

  const handleRemove = (index) => {
    const updated = [...images];
    updated.splice(index, 1);
    setImages(updated);
  };

  const handleChange = (index, type, value) => {
    const updated = [...images];
    updated[index][type] = value;
    setImages(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    images.forEach((item, index) => {
      if (item.file) {
        formData.append(`images`, item.file);
      }
    });

    try {
      const response = await axios.post(postLink, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Upload successful!');
    } catch (error) {
      console.error(error);
      alert('Upload failed.');
    }
  };

  return (

    <>
    <div className="container my-5">
      <h2 className="mb-4 text-success">{selectionHeader}</h2>
      <Form onSubmit={handleSubmit}>
        {images.map((item, index) => (
          <Card key={index} className="mb-4 shadow-sm">
            <Card.Body>
              <Row className="align-items-center">
                <Col md={6}>
                  <Form.Group controlId={`formFile-${index}`}>
                    <Form.Label><strong>Select Image</strong></Form.Label>
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleChange(index, 'file', e.target.files[0])}
                      required
                    />
                    {item.file && (
                      <img
                        src={URL.createObjectURL(item.file)}
                        alt="Preview"
                        className="img-thumbnail mt-2"
                        style={{ width: '100%', maxHeight: '250px', objectFit: 'cover' }}
                      />
                    )}
                  </Form.Group>
                </Col>


                <Col md={2} className="text-end">
                  {images.length > 1 && (
                    <Button
                      variant="outline-danger"
                      className="mt-4"
                      onClick={() => handleRemove(index)}
                    >
                      Remove
                    </Button>
                  )}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))}

        <div className="d-flex justify-content-between align-items-center">
          <Button variant="success" onClick={handleAddNew}>
            + Add New
          </Button>

          <Button variant="primary" type="submit">
            Submit All
          </Button>
        </div>
      </Form>
    </div>

<hr/>

<AllImages usedIn={usedIn} getLink = {getLink} postLink={postLink} displayHeader = {displayHeader}/>
    </>
  );
}

export default HandleImages;
