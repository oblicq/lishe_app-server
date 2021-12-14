const {pool} = require("../../dbConfig");
const queries = require ("./queries");

const getClasses = (req, res) =>{
    pool.query(queries.getClasses, (error, results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
        pool.end;
    })
    pool.connect;
};

const addClasses = (req, res) =>{
    const {class_id, name, description, price, learning_material,start_date, end_date} = req.body;
  
    //CHEXK IF THE CLASS EXISTS
    pool.query(queries.getClassesId, [class_id], (error, results)=>{
        console.log(req.body)
        if(results.rows.length){
            res.send("Class already exists")
           
         
            return
        }

    //ADD 
    pool.query(queries.addClasses, [class_id, name, description, price, learning_material,start_date, end_date], (error, results)=>{
        if(error) throw error;
        res.status(201).send("Class created Successfully")

    })
})
}
  
const deleteClasses=(req,res)=>{
    const id=parseInt(req.params.id);

    pool.query(queries.getClassByIdQuery, [id],(error,results)=>{
        if(noClassFound){
            res.send("Class does not exist");
        }
        //DELETE CLASS HERE
        pool.query(queries.deleteClasses,[id], (error,results)=>{
            if(error) throw error;
            res.status(200).send("Class deleted Successfuly");
        })
    })

}
const updateClasses = (req, res) => {
    const id = parseInt(req.params.id);
    const { location } = req.body;

  
    pool.query(queries.getClassByIdQuery, [id], (error, results) => {
      const noClassFound = !results.rows.length;
      if (noClassFound) {
        res.send("Class does not exist");
      }
      pool.query(queries.updateClasses, [price, id], (error, results) => {
        if (error) throw error;
        res.status(200).send("Class updated successfully");
      });
    });
  };
module.exports={
    getClasses,
    addClasses,
    deleteClasses,
    updateClasses,
};