const {pool} = require("../../dbConfig");
const queries = require ("./queries");

const getQuestions = (req, res) =>{
    pool.query("SELECT * FROM questions", (error, results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
        pool.end;
    })
    pool.connect;
};

const addQuestions = (req, res) =>{
    const {question_id, question, answer} = req.body;
  
    //CHECK IF THE QUESTION  EXISTS
    pool.query(queries.getQuestionsId, [question_id], (error, results)=>{
        console.log(req.body)
        if(results.rows.length){
            res.send("Question already exists")
           
         
            return
        }

    //ADD 
    pool.query(queries.addQuestions, [question_id, question, answer], (error, results)=>{
        if(error) throw error;
        res.status(201).send("Question added Successfully")

    })
})
}

const deleteQuestions = async (req, res) => {
    const id = parseInt(req.params.id);
    pool.query("SELECT * FROM questions WHERE question_id=$1", [id], (error, results) => {
      const noQuestion = !results.rows.length;
      if (noQuestion) {
        res.send("Question does not exist");
      }
      pool.query("DELETE FROM questions WHERE question_id=$1", [id], (error, results) => {
        if (error) throw error;
        res.status(200).send("Question Deleted Successful");
      });
    });
  };
  const updateQuestions = (req, res) => {
    const id = parseInt(req.params.id);
    const { answer } = req.body;
    //Check if the question axists
  
    pool.query("SELECT * FROM questions WHERE question_id = $1", [id], (error, results) => {
      const noQuestionFound = !results.rows.length;
      if (noQuestionFound) {
        res.send("Question does not exist");
      }
      pool.query("UPDATE questions SET answer = $1 WHERE answer_id = $4", [answer, id], (error, results) => {
        if (error) throw error;
        res.status(200).send("Answer updated successfully");
      });
    });
  };
module.exports={
    getQuestions,
    addQuestions,
    deleteQuestions,
    updateQuestions,
};