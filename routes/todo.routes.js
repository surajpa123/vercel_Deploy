import express from 'express';
import { createTodo, deleteTodo, getTodo, getTodoById, updateTodo } from '../controller/createTodo.controller.js';
const router = express.Router();

router.post("/createtodo", createTodo)
router.get("/gettodo", getTodo)
router.get("/gettodo/:id",getTodoById )

router.delete("/deletetodo/:id", deleteTodo)
router.patch("/updatetodo/:id", updateTodo)


export default router
