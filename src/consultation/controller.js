const {pool} = require("../../dbConfig");
const queries = require ("./queries");

const getConsultations = (req, res) =>{
    pool.query(queries.getConsultations, (error, results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
        pool.end;
    })
    pool.connect;
};

const addConsultations = (req, res) =>{
    const {consultation_id, price, phone_number} = req.body;
  
    //CHECK IF THE CONSULTATION  EXISTS
    pool.query(queries.getConsultationId, [consultation_id], (error, results)=>{
        console.log(req.body)
        if(results.rows.length){
            res.send("Consultation already exists")
           
         
            return
        }

    //ADD 
    pool.query(queries.addConsultations, [consultation_id, price, phone_number], (error, results)=>{
        if(error) throw error;
        res.status(201).send("Consultation created Successfully")

    })
})
}

const deleteConsultations = async (req, res) => {
    const id = parseInt(req.params.id);
    pool.query("SELECT * FROM consultation WHERE consultation_id=$1", [id], (error, results) => {
      const noConsultation = !results.rows.length;
      if (noConsultation) {
        res.send("Consultation does not exist");
      }
      pool.query("DELETE FROM consultation WHERE consultation_id=$1", [id], (error, results) => {
        if (error) throw error;
        res.status(200).send("Consultation Deleted Successful");
      });
    });
  };
const updateConsultations = (req, res) => {
    const id = parseInt(req.params.id);
    const { price } = req.body;

  
    pool.query(queries.getConsultationByIdQuery, [id], (error, results) => {
      const noConsultationFound = !results.rows.length;
      if (noConsultationFound) {
        res.send("Consultation does not exist");
      }
      pool.query(queries.updateConsultations, [price, id], (error, results) => {
        if (error) throw error;
        res.status(200).send("Consultation updated successfully");
      });
    });
  };
module.exports={
    getConsultations,
    addConsultations,
    deleteConsultations,
    updateConsultations,
};