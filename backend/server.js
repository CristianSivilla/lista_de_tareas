import express from 'express';

const app = express();


app.get("/", (requ, res) =>{
    res.send("Server is ready");
})

 app.listen(5000, () => {
    console.log('Servidor iniciado en http://localhost:5000 hello');
    
 });