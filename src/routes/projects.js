import {Router} from 'express';
import {createProject, getProjects,getProjectId,deleteProject,updateProject} from '../controllers/project.controller';

const router = Router();


router.post('/',createProject);
router.get('/',getProjects);
router.get('/:id',getProjectId);
router.delete('/:id',deleteProject);
router.put('/:id',updateProject);



export default router;