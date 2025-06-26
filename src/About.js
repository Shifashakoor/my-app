import React from 'react';

function About() {
  // Inline CSS styles
  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '30px',
    backgroundColor: '#fff0f5', // light pink background
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
    color: '#333',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#8e44ad', // purple
    textAlign: 'center',
  };

  const subHeadingStyle = {
    fontSize: '1.5rem',
    marginTop: '20px',
    color: '#e91e63', // dark pink
  };

  const paragraphStyle = {
    fontSize: '1.1rem',
    lineHeight: '1.7',
    marginBottom: '15px',
    color: '#333',
  };

  const listItemStyle = {
    fontSize: '1rem',
    color: '#34495e', // dark bluish grey
    marginBottom: '8px',
  };

  const featureHighlight = {
    color: '#00bcd4', // sky blue
    fontWeight: 'bold',
  };

  const quoteStyle = {
    fontStyle: 'italic',
    color: '#4caf50', // green
    marginTop: '20px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>✨ About TextUtils ✨</h1>
      <p style={paragraphStyle}>
        <span style={featureHighlight}>TextUtils</span> is your friendly text utility tool, designed to make working with text quick and effortless. Whether you're a writer, student, developer, or content creator — it's made for everyone.
      </p>

      <h2 style={subHeadingStyle}>🌈 Features:</h2>
      <ul>
        <li style={listItemStyle}>🔠 Convert text to <span style={featureHighlight}>UPPERCASE</span></li>
        <li style={listItemStyle}>🔡 Convert text to <span style={featureHighlight}>lowercase</span></li>
        <li style={listItemStyle}>🧹 <span style={featureHighlight}>Clear your text</span> instantly</li>
        <li style={listItemStyle}>📊 Get <span style={featureHighlight}>word & character count</span></li>
        <li style={listItemStyle}>⏳ See <span style={featureHighlight}>estimated reading time</span></li>
        <li style={listItemStyle}>🌗 <span style={featureHighlight}>Dark Mode</span> for eye comfort</li>
      </ul>

      <h2 style={subHeadingStyle}>🎯 Purpose:</h2>
      <p style={paragraphStyle}>
        The goal of TextUtils is to give you a smooth and beautiful text processing experience — fast, easy, and reliable, all within your browser.
      </p>

      <p style={quoteStyle}>
        "TextUtils — your handy companion for all your text editing needs ✨"
      </p>
    </div>
  );
}

export default About;
