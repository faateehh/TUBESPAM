const express = require('express');
const swaggerUI = require('swagger-ui-express');
var cors = require('cors');

const PORT = process.env.PORT || 8000;

const app = express();

const swaggerJSON = require('./swagger.json');


app.use(express.static('public'));
app.set('view engine', 'ejs');


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerJSON));

app.use(cors());

const router = require('./src/router');
app.use(router);



app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});

