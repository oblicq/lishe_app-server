const getReviews = "SELECT * FROM review";
const getReviewsId = "SELECT * FROM review WHERE review_id=$1";
const addReviews ="INSERT INTO review (review_id, comment) VALUES ($1, $2)";
  const updateReviews = "UPDATE review SET comment = $1 WHERE review_id = $4";
  const deleteReviews="DELETE FROM review WHERE review_id=$1";




module.exports ={
   getReviews,
   getReviewsId,
   addReviews,
   updateReviews,
   deleteReviews,
};