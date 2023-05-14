import express from 'express';
import { deleteUser, getUser, getUsers, updatedUser } from '../controllers/userControlller.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

// router.get('/', (req, res) => {
//   res.send('Auth endpoint');
// });

router.get('/register', (req, res) => {
  res.send('Auth register endpoint');
});


router.get("/checkauth", verifyToken, (req, res, next) => {
  res.send("User logged in")
})

router.get('/checkuser/:id', verifyUser, (req, res, next) => {
  res.send('User logged in and can edit account');
});

router.get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
  res.send('Admin logged in and can edit accounts');
});

// UPDATE
router.put('/:id', updatedUser)

// DELETE
router.delete('/:id', deleteUser);

// GET ALL
router.get('/:id', getUser);

// GET
router.get('/', getUsers);

export default router;