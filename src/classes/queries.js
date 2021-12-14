const getClasses = "SELECT * FROM classes";
const getClassesId = "SELECT * FROM classes WHERE class_id=$1";
const addClasses ="INSERT INTO classes (class_id, name, description, price, learning_material,start_date, end_date) VALUES ($1, $2, $3, $4,$5,$6,$7)";
  const updateClasses = "UPDATE classes SET price = $1 WHERE class_id = $4";
  const deleteClasses="DELETE FROM classes WHERE class_id=$1";




module.exports ={
   getClasses,
   getClassesId,
   addClasses,
   updateClasses,
   deleteClasses,
};