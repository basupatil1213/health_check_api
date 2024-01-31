// server.js
import express from 'express';
import initialize from './app.js';
import dotenv from 'dotenv';
import sequelize from './database/database_connection.js';

dotenv.config();

// sequelize.authenticate()
//     .then(() => {
//         console.log("Database connected successfully");
//     })
//     .catch((error) => {
//         console.log("Error: ", error);
//     })

const app = express();

const port = process.env.PORT;



initialize(app);

app.listen(port, () => console.log(`Server is listening at port ${port}`));

export default app;
