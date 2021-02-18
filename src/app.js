import express from 'express';
import morgan from 'morgan';
import projectRoutes from './routes/projects';
import taskRoutes from './routes/tasks';

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/projects',projectRoutes);
app.use('/api/tasks',taskRoutes);





export default app;