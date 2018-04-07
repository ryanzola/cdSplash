import express from 'express';
import path from 'path';

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static('./dist'));
app.use('/dist', express.static(__dirname + 'dist'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
})

app.listen(app.get('port'), () => {
  console.info(`Server is listening on port ${app.get('port')}`)
})

module.exports = app;