const getQuestions = "SELECT * FROM questions";
const getQuestionsId = "SELECT * FROM questions WHERE question_id=$1";
const addQuestions ="INSERT INTO questions (question_id, question, answer) VALUES ($1, $2, $3)";
  const updateQuestions = "UPDATE questions SET answer = $1 WHERE answer_id = $4";
  const deleteQuestions="DELETE FROM questions WHERE question_id=$1";




module.exports ={
   getQuestions,
   getQuestionsId,
   addQuestions,
   updateQuestions,
   deleteQuestions,
};