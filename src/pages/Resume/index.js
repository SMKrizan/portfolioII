import React, { useState, useMemo } from "react";
import { Document, Page, pdfjs } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import smkres from "../../utils/smkres.pdf";
import "./index.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// const options = {
//   cMapUrl: "cmaps/",
//   cMpaPacked: true,
// };

function Resume() {
  const [numPages, setNumPages] = useState(null);

  const [pageNumber, setPageNumber] = useState(1);

  let file = useMemo(() => ({ url: smkres, withCredentials: true }), []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <div id="Resume" class="pdf-container">
      <h1 className="res-title">
        <span className="res-reg">current </span>
        <span className="res-bold"> Resume</span>
      </h1>
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        // options={{ cMapUrl: "cmaps/", cMapPacked: true }}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
          Previous
        </button>
        {"    "}
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Resume;
