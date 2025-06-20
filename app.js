const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { convertFile } = require('./server/convert');
const { viewFile } = require('./server/viewer');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.static('public'));

app.post('/convert', upload.single('docfile'), async (req, res) => {
  const target = req.body.target;
  const convertedPath = await convertFile(req.file.path, target);
  res.download(convertedPath);
});

app.post('/view', upload.single('viewfile'), async (req, res) => {
  const content = await viewFile(req.file.path);
  res.send(`<pre>${content}</pre>`);
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
