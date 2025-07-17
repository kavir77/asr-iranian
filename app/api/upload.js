import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const form = new formidable.IncomingForm();
  form.uploadDir = './public/pdfs';
  form.keepExtensions = true;

  if (!fs.existsSync('./public/pdfs')) {
    fs.mkdirSync('./public/pdfs', { recursive: true });
  }

  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: 'Upload failed' });
    }

    const { date, number } = fields;
    const pdfFile = files.pdf;

    const fileName = `${date}-${number}.pdf`;
    const newPath = path.join('./public/pdfs', fileName);

    fs.renameSync(pdfFile.filepath, newPath);

    // بعداً تو مرحله بعد اینجا عکس‌سازی رو انجام می‌دیم

    return res.status(200).json({ message: 'PDF uploaded successfully' });
  });
}
