const getUsers = "SELECT * FROM users";
const getUsersId = "SELECT * FROM users WHERE user_id=$1";
const addUsers ="INSERT INTO users (user_id, email,fullname,password, role, date_created) VALUES ($1,$2, $3, $4,$5,$6)";
  const updateUsers = "UPDATE users SET email = $1 WHERE user_id = $1";
  const deleteUsers="DELETE FROM users WHERE user_id=$1";




module.exports ={
   getUsers,
   getUsersId,
   addUsers,
   updateUsers,
   deleteUsers,
};