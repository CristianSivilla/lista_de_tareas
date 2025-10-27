import express from 'express';
const app = express();
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';


dotenv.config();

app.get("/tareas", (requ, res) =>{

})

console.log(process.env.MONGO_URI);

 app.listen(5000, () => {
    connectDB();
    console.log('Servidor iniciado en http://localhost:5000');
    
 });