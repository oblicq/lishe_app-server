const {pool} = require("../../dbConfig");
const queries = require ("./queries");

const getUsers = (req, res) =>{
    pool.query(queries.getUsers, (error, results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
        pool.end;
    })
    pool.connect;
};

const addUsers = (req, res) =>{
    const {user_id, email,fullname,password, role, date_created} = req.body;
  
    //CHEXK IF THE USER EXISTS
    pool.query(queries.getUsersId, [user_id], (error, results)=>{
        console.log(req.body)
        if(results.rows.length){
            res.send("user already exists")
           
         
            return
        }

    //ADD 
    pool.query(queries.addUsers, [user_id, email, fullname,password, role, date_created], (error, results)=>{
        if(error) throw error;
        res.status(201).send("User created Successfully")

    })
})
}
  
const deleteUsers=(req,res)=>{
    const id=parseInt(req.params.id);

    pool.query(queries.getUserByIdQuery, [id],(error,results)=>{
        if(noClassFound){
            res.send("User does not exist");
        }
        //DELETE USER HERE
        pool.query(queries.deleteUsers,[id], (error,results)=>{
            if(error) throw error;
            res.status(200).send("User deleted Successfuly");
        })
    })

}
const updateUsers = (req, res) => {
    const id = parseInt(req.params.id);
    const { email } = req.body;

  
    pool.query(queries.getUserByIdQuery, [id], (error, results) => {
      const noUserFound = !results.rows.length;
      if (noUserFound) {
        res.send("User does not exist");
      }
      pool.query(queries.updateUsers, [price, id], (error, results) => {
        if (error) throw error;
        res.status(200).send("User updated successfully");
      });
    });
  };
module.exports={
    getUsers,
    addUsers,
    updateUsers,
    deleteUsers,
};