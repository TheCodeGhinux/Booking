import express from 'express';
import Hotel from '../models/Hotel.js';
import { createHotel, deleteHotel, getHotel, getHotels, updatedHotel } from '../controllers/hotelController.js';


const router = express.Router();

// CREATE
router.post('/', createHotel)

// UPDATE
router.put('/:id', updatedHotel)

// DELETE
router.delete('/:id', deleteHotel);

// GET ALL
router.get('/:id', getHotel);

// GET
router.get('/', getHotels);



export default router;