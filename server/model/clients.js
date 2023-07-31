import mongoose from 'mongoose';


const clients=mongoose.Schema({
    id:Number,
    nometpren:String,
    numcha: String,
    tel:Number,
    email:String,
    
});

const abdooauto =mongoose.model('clients',clients);
export default abdooauto;