import express from 'express';

import { productRoute } from './Product.routes.js';
const app = express();

app.use(express.json());

app.use("/products", productRoute);

app.listen(3333, () => console.log("server is running on port 3333"));
