import React, { useRef, useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const FormComponent = () => {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('BTech'); 
  const pdfRef = useRef();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCourseChange = (e) => {
    setCourse(e.target.value);
  };

  const handleGeneratePDF = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas)=>{
        const pdf = new jsPDF('p' , 'mm' , 'a4' . true);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        

    })
    
  };



  return (
    <div ref={pdfRef}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <label>
        Course:
        <select value={course} onChange={handleCourseChange}>
          <option value="BTech">BTech</option>
          <option value="MTech">MTech</option>
        </select>
      </label>
      <button onClick={handleGeneratePDF}>Generate PDF</button>
    </div>
  );
};

export default FormComponent;
