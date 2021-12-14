const getAccountsQuery = "SELECT * FROM accounts";
const getAccountByIdQuery = "SELECT * FROM accounts WHERE user_id=$1";
const checkEmailExists = "SELECT s FROM accounts s WHERE s.email=$1";
const addAccount =
  "INSERT INTO accounts (username, password, email, created_on) VALUES ($1, $2, $3, now())";
const deleteAccount = "DELETE FROM accounts WHERE user_id=$1";
const updateAccount = "UPDATE accounts SET username = $1 WHERE user_id = $2";

module.exports = {
  getAccountsQuery,
  getAccountByIdQuery,
  checkEmailExists,
  addAccount,
  deleteAccount,
  updateAccount,
};
