import express from 'express';
import { addUser, deleteUser, getUsers, updateUser } from '../controllers/user.js';

const router = express.Router();

router.get('/', getUsers);

router.get('/', addUser);

router.get('/:id', updateUser);

router.get('/:id', deleteUser);

export default router