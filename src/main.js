import path from 'path';
import express from 'express';
import morgan from 'morgan';


import Routes from './Routes/index';

const app=  express()
const port = process.env.PORT || 4000;

app.listen(port,()=>{
    console.log(`servidor Iniciado correctamente en el puerto ${port}`)
})


//set the Middlewares:
app.use(morgan('dev'));
app.use(express.json());

//Set the app routes:
Routes(app);

//Template Engine Config:
app.set('views', path.join(__dirname,'Views'));
app.set('view engine','pug');

