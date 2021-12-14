const { pool } = require("../../dbConfig");
const queries = require("./queries");

const getAccounts = (req, res) => {
  pool.query(queries.getAccountsQuery, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
    pool.end;
  });
  pool.connect();
};

const getAccountByID = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getAccountByIdQuery, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

//query to add account to the db
const addAccount = (req, res) => {
  const { username, password, email } = req.body;
  //checking if  email exist in the db
  pool.query(queries.checkEmailExists, [email], (error, results) => {
    if (results.rows.length) {
      res.send("Email already exist");
    }
    //add account to db
    pool.query(
      queries.addAccount,
      [username, password, email],
      (error, results) => {
        if (error) throw error;
        console.log(error);
        res.status(201).send("Account Created Successfully");
      }
    );
  });
};

const deleteAccount = (req, res) => {
  const id = parseInt(req.params.id);
  //check if the account exist
  pool.query(queries.getAccountByIdQuery, [id], (error, results) => {
    const noAccountFound = !results.rows.length;
    if (noAccountFound) {
      res.send("Account does not exist");
    }
    pool.query(queries.deleteAccount, [id], (error, results) => {
      if (error) throw error;
      res.status(200).send("Account Deleted Successful");
    });
  });
};

const updateAccount = (req, res) => {
  const id = parseInt(req.params.id);
  const { username } = req.body;
  //Check if the student axists

  pool.query(queries.getAccountByIdQuery, [id], (error, results) => {
    const noAccountFound = !results.rows.length;
    if (noAccountFound) {
      res.send("Account does not exist");
    }
    pool.query(queries.updateAccount, [username, id], (error, results) => {
      if (error) throw error;
      res.status(200).send("account updated successfully");
    });
  });
};

module.exports = {
  getAccounts,
  getAccountByID,
  addAccount,
  deleteAccount,
  updateAccount,
};
