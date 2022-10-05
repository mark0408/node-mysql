import {Router} from "express";
import { getAllUsers, getFullNameUser } from "../controllers/user.controllers.js"
const router = new Router();

router.get('/users', getAllUsers)
router.post('/getFullNameUser', getFullNameUser)

export default router;