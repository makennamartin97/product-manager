const express = require('express');
const cors = require('cors');
const app = express();
const dbname = "productdb";
const port = 8000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./server/config/mongoose')(dbname);
require('./server/routes/product.routes')(app);

//require('./server/routes/productmanager.routes')(app);
app.listen(port, () => console.log(`Listening on port: ${port}`) );