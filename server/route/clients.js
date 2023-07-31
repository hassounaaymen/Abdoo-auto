import express from 'express';

//http://localhost:5000/client


import { getclient,createclient,updateclient ,deleteclient } from '../controllers/clients.js'
const router =express.Router();
router.get('/', getclient);
router.post('/', createclient);
router.patch('/:_id',updateclient);
router.delete('/:_id' ,deleteclient)
export default router;