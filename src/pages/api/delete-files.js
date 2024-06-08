import fs from 'fs';
import path from 'path';

const PDF_DIRECTORY = path.join(process.cwd(), 'public/pdfs');

export default function handler(req, res) {
  if (req.method === 'DELETE') {
    fs.readdir(PDF_DIRECTORY, (err, files) => {
      if (err) {
        res.status(500).json({ message: 'Error reading PDF directory', error: err.message });
        return;
      }

      const deletePromises = files.map(file => {
        const filePath = path.join(PDF_DIRECTORY, file);
        return new Promise((resolve, reject) => {
          fs.unlink(filePath, err => {
            if (err) {
              console.error('Error deleting file:', err);
              reject(err);
            } else {
              resolve();
            }
          });
        });
      });

      Promise.all(deletePromises)
        .then(() => {
          res.status(200).json({ message: 'All files deleted successfully' });
        })
        .catch(error => {
          res.status(500).json({ message: 'Error deleting some files', error: error.message });
        });
    });
  } else {
    res.setHeader('Allow', ['DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
