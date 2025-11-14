import React from "react";
import pdfToText from "react-pdftotext";

const TestingUI = () => {
  function extractText(event) {
    const file = event.target.files[0];
    pdfToText(file)
      .then((text) => console.log(text))
      .catch((error) =>
        console.error("Failed to extract text from pdf", error)
      );
  }

  return (
    <div>
      <input type="file" accept="application/pdf" onChange={extractText} className="file-input" />
    </div>
  );
};

export default TestingUI;
