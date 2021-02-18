import Sequelize from 'sequelize';
import {sequelize} from '../database/database';
import project from './Project';

const Task = sequelize.define('tasks', {
    id:{
        primaryKey:true,
        type: Sequelize.INTEGER,
        
    },
    name:{
        type:Sequelize.TEXT,
    },
    done:{
        type:Sequelize.BOOLEAN,
    },
    projectId:{
        type:Sequelize.INTEGER,
              references: 'projects', // <<< Note, its table's name, not object name
              referencesKey: 'id'
    }
},{
    timestamps:false
});


export default Task;