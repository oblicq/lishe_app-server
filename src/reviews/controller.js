const {pool} = require("../../dbConfig");
const queries = require ("./queries");

const getReviews = (req, res) =>{
    pool.query(queries.getReviews, (error, results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
        pool.end;
    })
    pool.connect;
};

const addReviews = (req, res) =>{
    const {review_id, comment} = req.body;
  
    //CHECK IF THE REVIEW  EXISTS
    pool.query(queries.getReviewId, [review_id], (error, results)=>{
        console.log(req.body)
        if(results.rows.length){
            res.send("Review already exists")
           
         
            return
        }

    //ADD 
    pool.query(queries.addReviews, [review_id, comment], (error, results)=>{
        if(error) throw error;
        res.status(201).send("Review added Successfully")

    })
})
}

const deleteReviews = async (req, res) => {
    const id = parseInt(req.params.id);
    pool.query("SELECT * FROM reviews WHERE review_id=$1", [id], (error, results) => {
      const noReview = !results.rows.length;
      if (noReview) {
        res.send("Review does not exist");
      }
      pool.query("DELETE FROM reviews WHERE review_id=$1", [id], (error, results) => {
        if (error) throw error;
        res.status(200).send("Review Deleted Successful");
      });
    });
  };
const updateReviews = (req, res) => {
    const id = parseInt(req.params.id);
    const { comment } = req.body;

  
    pool.query(queries.getReviewByIdQuery, [id], (error, results) => {
      const noReviewFound = !results.rows.length;
      if (noReviewFound) {
        res.send("Review does not exist");
      }
      pool.query(queries.updateReviews, [comment, id], (error, results) => {
        if (error) throw error;
        res.status(200).send("Review updated successfully");
      });
    });
  };
module.exports={
    getReviews,
    addReviews,
    deleteReviews,
    updateReviews,
};