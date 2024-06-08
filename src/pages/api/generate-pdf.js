import fs from 'fs';
import path from 'path';
import pdf from 'html-pdf';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const text = req.body;

    // Extract the first letter of the PDF name
    const firstLetter = text.charAt(4).toUpperCase();
    const pdfName = `${firstLetter}_t2p.pdf`;

    // Generate HTML content from plain text
    const html = `
      <html>
        <head>
          <meta charset="utf-8">
          <style>
          @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            body {
              font-family: 'Roboto', sans-serif;
              font-weight: 300;
              font-size: 12pt;
              margin: 40px;
              white-space: pre-wrap; /* Preserve whitespace and line breaks */
            }
            .poppins{
              font-family: "Poppins", sans-serif;
              font-weight: 400;
              font-style: normal;
            }
            #paragraph {
              position: absolute;
              top: 5px;
              font-size: 11px;
              color: black;
              font-weight: 600;
              right: 2px;
              opacity: .5;
              text-shadow: 2px 2px 2px gray;
              width: 100vw;
            }
          </style>
        </head>
        <body>
        <p id="paragraph" class="poppins">PDF Generated using T2p :- By Hazim Bhat</p>
         ${text}
        </body>
      </html>
    `;

    const filePath = path.join(process.cwd(), 'public/pdfs',`${pdfName}`);  // Save in the public directory

    // Create PDF from HTML and save to file
    pdf.create(html).toFile(filePath, function(err, result) {
      if (err) {
        res.status(500).json({ message: 'Error generating PDF', error: err.message });
      } else {
        res.status(200).json({ message: 'PDF generated successfully', filePath: `pdfs/${pdfName}` });
      }
    });

  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
