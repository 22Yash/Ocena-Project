import "./App.css"
import { useState } from "react";
import { BtechPDF, MtechPDF } from "./pdf.jsx";
import { PDFViewer } from "@react-pdf/renderer";

const App = () => {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [pdfContent, setPdfContent] = useState(null);
  const currentDate = new Date().toLocaleDateString();

  const generatePdf = () => {
    let content;
  
    if (course === 'B.tech') {
      content = <BtechPDF name={name} date={currentDate} />;
      console.log('===>>',content)
    } else if (course === 'M.tech') {
      content = <MtechPDF name={name} date={currentDate} />;
    }

    setPdfContent(content);
  };

  const handleInputChange = (e) => {
    setPdfContent(null);
    setName(e.target.value);
  };

  return (
    <div className="App">
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="course">Course:</label>
          <select id="course" value={course} onChange={(e) => setCourse(e.target.value)}>
            <option value="">Select Course</option>
            <option value="B.tech">B.tech</option>
            <option value="M.tech">M.tech</option>
          </select>
        </div>
        <div>
          <button type="button" onClick={generatePdf} className="p-10 w-40 h-20 pt-4 -pl-2">
            Generate PDF
          </button>
        </div>
      </form>
      {pdfContent && (
        <div style={{ marginTop: '20px' }}>
          <PDFViewer width="1000" height="600">
            {pdfContent}
          </PDFViewer>
        </div>
      )}
    </div>
  );
}

export default App;
