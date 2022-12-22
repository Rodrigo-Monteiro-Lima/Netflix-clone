const express = require('express');
const path = require('path');
const port = 3333;

const initialPath = path.join(__dirname, 'public');
const app = express();
app.use(express.static(initialPath));
app.get('/', (req, res) => {
  res.sendFile(path.join(initialPath, 'index.html'));
});

app.listen(port, () => console.log(`Server up on localhost:${port}`));
