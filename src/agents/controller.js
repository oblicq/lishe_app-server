const {pool} = require("../../dbConfig");
const queries = require ("./queries");


const getAgents = (req, res) =>{
    pool.query(queries.getAgents, (error, results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
        pool.end;
    })
    pool.connect;
}

const addAgent = (req, res) =>{
    const {agent_id, name, location, phone_number} = req.body;
    //CHEXK IF THE AGENT EXISTS
    pool.query(queries.getgetAgentsId, [phone_number], (error, results)=>{
        if(results.rows.length){
            res.send("Agent already exists")
            return
        }

    //ADD 
    pool.query(queries.addAgent, [agent_id, name, location, phone_number], (error, results)=>{
        if(error) throw error;
        res.status(201).send("Agent created Successfully")

    })
})
}
const deleteAgent = async (req, res) => {
    const id = parseInt(req.params.id);
    pool.query('DELETE FROM agent WHERE agent_id = $1', [id ]);
  
    res.status(200).send({ Message: 'Agent deleted successfully!', id });
  };
  
// const deleteAgent=(req,res)=>{
//     const id=parseInt(req.params.id);

//     pool.query(queries.getAgentByIdQuery, [id],(error,results)=>{
//         if(noAgentFound){
//             res.send("Agent does not exist");
//         }
//         //DELETE AGENT HERE
//         pool.query(queries.deleteAgent,[id], (error,results)=>{
//             if(error) throw error;
//             res.status(200).send("Agent deleted Successfuly");
//         })
//     })

// }
const updateAgent = (req, res) => {
    const id = parseInt(req.params.id);
    const { location } = req.body;
    //Check if the agent axists
  
    pool.query(queries.getAgentByIdQuery, [id], (error, results) => {
      const noAgentFound = !results.rows.length;
      if (noAgentFound) {
        res.send("Agent does not exist");
      }
      pool.query(queries.updateAgent, [location, id], (error, results) => {
        if (error) throw error;
        res.status(200).send("Agent updated successfully");
      });
    });
  };
  
module.exports={
    getAgents,
    addAgent,
    deleteAgent,
    updateAgent,
}