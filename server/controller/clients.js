import clients from '../models/clients.js';
import mongoose from 'mongoose'



export const getclient = async (req ,res )  => {
    try {
        const postclient = await clients.find();
        console.log(postclient);

        res.status(200).json(postclient);
    } catch (error) {
        res.status(404).json({message:error.message})
    }     
    }

    export const createclient = async (req ,res) => {
        const client = new clients(req.body)
        
        
        try {
          await  client.save();

          res.status(201).json(client);
        } catch (error) {
           res.status(409).json({message:error.message})
        }     

      
    }

    export const updateclient = async (req,res)=>{

     const id  =req.params._id; 
     console.log(id)
     const  client = new clients(req.body)
     console.log(client)
     try{
        
         if(!mongoose.Types.ObjectId.isValid(id)){
          return res.status(404).send('No client with that id');
         }
       
    
        const updateclient= await clients.findByIdAndUpdate(id , client, {new:true});
      res.status(200).send(updateclient);}
      catch(error){

        res.status(409).json({message:error.message})
      }
    }
   
    export  const deleteclient = async(req,res) => {

      const id  =req.params._id; 
      console.log(id)
      const  client = new clients(req.body)
      console.log(client)
      try{
         
          if(!mongoose.Types.ObjectId.isValid(id)){
           return res.status(404).send('No client with that id');
          }
        
     
         const deleteclient= await clients.findByIdAndRemove(id);
       res.status(200).send(deleteclient);}

       catch(error){
 
         res.status(409).json({message:error.message})
       }
     }