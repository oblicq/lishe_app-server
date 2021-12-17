const getConsultations = "SELECT * FROM consultation";
const getConsultationsId = "SELECT * FROM cosultation WHERE consultation_id=$1";
const addConsultations ="INSERT INTO consultation (consultation_id, price, phone_number) VALUES ($1, $2, $3)";
  const updateConsultations = "UPDATE consultation SET price = $1 WHERE consultation_id = $4";
  const deleteConsultations="DELETE FROM consultation WHERE consultation_id=$1";




module.exports ={
   getConsultations,
   getConsultationsId,
   addConsultations,
   updateConsultations,
   deleteConsultations,
};