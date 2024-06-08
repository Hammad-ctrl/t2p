"use server"
import PDFDocument from 'pdfkit';
import fs from 'fs';

export function generatePdf(text) {
  const doc = new PDFDocument();
  const path = 'public/output.pdf';
  doc.pipe(fs.createWriteStream(path));

  // Embed the Roboto-Light font
  doc.font('public/Roboto/Roboto-Light.ttf')
     .fontSize(12);

  const lineHeight = doc.currentLineHeight();
  const pageHeight = doc.page.height - doc.page.margins.top - doc.page.margins.bottom;
  let y = doc.y;

  // Function to add text and handle page breaks
  const addTextWithPageBreaks = (text) => {
    const paragraphs = text.split('\n');
    paragraphs.forEach(paragraph => {
      const lines = doc.splitTextToSize(paragraph, doc.page.width - doc.page.margins.left - doc.page.margins.right);
      lines.forEach(line => {
        if (y + lineHeight > pageHeight) {
          doc.addPage();
          y = doc.page.margins.top;
        }
        doc.text(line, { continued: true });
        y += lineHeight;
      });
      doc.text('\n'); // Add a newline after each paragraph
      y += lineHeight;
    });
  };

  // Add the main text
  addTextWithPageBreaks(text);

  // Add a new page with "use client"
  doc.addPage()
     .fontSize(25)
     .text('use client', 100, 100);

  // Finalize PDF file
  doc.end();

  return path;
}
