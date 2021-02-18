import {Router} from 'express';
import { createTask, getTasks, getOneTask, deleteTask, updateTask, getTasksByProject } from "../controllers/task.controller";

const router = Router();




// /api/tasks/
router.post('/', createTask);
router.get('/', getTasks);

// /api/tasks/:projectID
router.get('/:id', getOneTask);
router.delete('/:id', deleteTask);
router.put('/:id', updateTask);

// /api/tasks/project/:projectID
router.get('/project/:projectid', getTasksByProject);


export default router;