import express from 'express';
import { createRoom, deleteRoom, getRoom, getRooms, updateRoomAvailability, updatedRoom } from '../controllers/roomControlller.js';
import { verifyAdmin } from '../utils/verifyToken.js';


const router = express.Router();

// router.get('/', (req, res) => {
//   res.send('Auth endpoint');
// });
// router.get('/register', (req, res) => {
//   res.send('Auth register endpoint');
// });


// CREATE
router.post('/:hotelid', verifyAdmin, createRoom)

// UPDATE
router.put('/:id', verifyAdmin, updatedRoom)
router.put('/availability/:id', updateRoomAvailability);

// DELETE
router.delete('/:id/:hotelid', verifyAdmin, deleteRoom);

// GET ALL
router.get('/:id', getRoom);

// GET
router.get('/', getRooms);

export default router;