import express from 'express';
import Hotel from '../models/Hotel.js';
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotelRooms, getHotels, updatedHotel } from '../controllers/hotelController.js';
import { verifyAdmin } from '../utils/verifyToken.js';


const router = express.Router();

// CREATE
router.post('/', verifyAdmin , createHotel)

// UPDATE
router.put('/:id',verifyAdmin, updatedHotel)

// DELETE
router.delete('/:id',verifyAdmin, deleteHotel);

// GET ALL
router.get('/get/:id', getHotel);

// GET
router.get('/', getHotels);
router.get('/countByCity', countByCity);
router.get('/countByType', countByType);
router.get('/rooms/:id', getHotelRooms);



export default router;