import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function TextControlsExample() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const convertToUpper = () => {
    setText(text.toUpperCase());
  };

  const convertToLower = () => {
    setText(text.toLowerCase());
  };

  const clearText = () => {
    setText('');
  };

  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  const charCount = text.length;
  const readingTime = (wordCount / 200).toFixed(2); // in minutes

  return (
    <Form>
      <div className="container">

        {/* 📝 Textarea */}
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Textarea</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={8} 
            value={text}
            onChange={handleChange}
            placeholder="Enter your text here..."
          />
        </Form.Group>

        {/* 🔘 Buttons */}
        <div className="mb-3">
          <Button variant="primary" className="me-2" onClick={convertToUpper}>
            Convert to UPPERCASE
          </Button>
          <Button variant="secondary" className="me-2" onClick={convertToLower}>
            Convert to lowercase
          </Button>
          <Button variant="danger" onClick={clearText}>
            Clear Text
          </Button>
        </div>
      </div>

      {/* 📊 Summary */}
      <div className="container">
        <h2>Your text summary</h2>
        <p>{wordCount} words &nbsp;&nbsp;&nbsp; {charCount} characters</p>
        <p>Estimated Reading Time: {readingTime} minutes</p>
      </div>

      {/* 🔍 Preview */}
      <div className="container mt-4">
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview..."}</p>
      </div>
    </Form>
  );
}

export default TextControlsExample;


           