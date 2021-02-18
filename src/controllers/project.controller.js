import Project from '../models/Project';

export async  function createProject(req,res){

    try {
        const {name,priority,description,deliverydate} = req.body;
        const result=await  Project.create({
             name,
             priority,
             description,
             deliverydate
         });
     
         if(result){
             return res.json({
                 message:'creado',
                 data:result
             });
         }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:'error',
        });
    }
   
    
}


export async  function getProjects(req,res){

    try {
       
        const result= await  Project.findAll();
     
         if(result){
             return res.json(result);
         }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:'error',
        });
    }
   
    
}




export async  function getProjectId(req,res){

    try {
       
        const {id} = req.params;
        const result= await  Project.findOne({
            where:{
                id
            }
        });
     
         if(result){
             return res.json(result);
         }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:'error',
        });
    }
   
    
}

export async function deleteProject(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await Project.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Project deleted successfully',
            count: deleteRowCount
        });
    } catch (e) {
        console.log(e);
    }
}


export async function updateProject(req, res) {
   
    try{
        const { id } = req.params;
        const { name,priority,description,deliverydate } = req.body;

        const result= await  Project.findOne({
            
            where:{
                id
            }
        });

        if (!result) {
            throw Error('no existen registros');
        }

        result.name = name;
        result.priority = priority;
        result.description = description;
        result.deliverydate = deliverydate;
        await result.save();

        return res.json({
            message:'actualizado',
            data:result
        });

    }

    catch(error){
        console.log(error);
    }

 }