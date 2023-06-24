import express from 'express';
import cors from 'cors';
import { crearApi } from './routes';
import { conectar } from './db/config';

const PORT = process.env.PORT || 3005;
const app = express();
conectar();
app.use(cors());
app.use(express.json());
crearApi(app);


app.get('/', async (req, res)=>{
    res.json({message:'Hola :)'});
});

app.listen(PORT);