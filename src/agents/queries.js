const getAgents = "SELECT * FROM agent";
const getgetAgentsId = "SELECT * FROM agent WHERE phone_number=$1";
const addAgent =
  "INSERT INTO agent (agent_id, name, region, phone_number, location) VALUES ($1, $2, $3, $4, $5)";
  const updateAgent = "UPDATE agent SET location = $1 WHERE agent_id = $2";

const deleteAgent="DELETE FROM agent WHERE agent_id=$1";

module.exports ={
    getAgents,
    getgetAgentsId,
    addAgent,
    updateAgent,
    deleteAgent,
};