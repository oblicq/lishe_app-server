const express = require("express");
const accountsRoutes = require("./src/accounts/routes");
const agentsRoutes = require ("./src/agents/routes");
const classesRoutes=require ("./src/classes/routes");
const usersRoutes=require ("./src/users/routes");


const app = express();

const PORT = 3000;

//MIDDLE WARE
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});


app.use("/api/agents", agentsRoutes);
app.use("/api/accounts", accountsRoutes);
app.use("/api/classes", classesRoutes);
app.use("/api/users", usersRoutes);

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
