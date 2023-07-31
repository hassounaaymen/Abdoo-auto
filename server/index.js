import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/clients.js';
import postRoutesa from './routes/agents.js';
import postRoutesuser from './routes/user.js';
import postRoutesvoiture from './routes/voitures.js';
import postRoutesStock from './routes/stocks.js';
import postRoutesordermision from './routes/ordremision.js';
import postRoutesdevis from './routes/devis.js';
import postRoutesFacture from './routes/facture.js';

const app = express()

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));



app.use(cors());

app.use('/client',postRoutes);
app.use('/agents',postRoutesa);
app.use('/user',postRoutesuser);
app.use('/voiture',postRoutesvoiture);
app.use('/stock',postRoutesStock);
app.use('/ordermision',postRoutesordermision);
app.use('/devis',postRoutesdevis);
app.use('/facture',postRoutesFacture);
app.patch('/client',postRoutes );
app.delete('/client',postRoutes );
app.patch('/agents',postRoutesa );
app.delete('/agents',postRoutesa );
app.patch('/user',postRoutesuser );
app.delete('/user',postRoutesuser );
app.patch('/voiture',postRoutesvoiture );
app.delete('/voiture',postRoutesvoiture );
app.patch('/stock',postRoutesStock );
app.delete('/stock',postRoutesStock );
app.patch('/ordermision',postRoutesordermision );
app.delete('/ordermision',postRoutesordermision );
app.patch('/devis',postRoutesdevis );
app.delete('/devis',postRoutesdevis );
app.patch('/facture',postRoutesFacture );
app.delete('/facture',postRoutesFacture );

const   CONNECTION_URL ='mongodb+srv://abdoo_auto:xxxxxxxx@cluster0.si6ly.mongodb.net/abdooauto?retryWrites=true&w=majority';
const PORT = 5000;
mongoose.connect(CONNECTION_URL,  {useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT,()=> console.log('Server run on port: 5000')))
.catch((error)=>console.log(error.message))
 



mongoose.set('useFindAndModify',false);
