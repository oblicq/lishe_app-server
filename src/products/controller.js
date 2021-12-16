const {pool} = require("../../dbConfig");
const queries = require ("./queries");

const getProducts = (req, res) =>{
    pool.query(queries.getProducts, (error, results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
        pool.end;
    })
    pool.connect;
};

const addProducts = (req, res) =>{
    const {product_id, product_name, price, description, category} = req.body;
  
    //CHECK IF THE product EXISTS
    pool.query(queries.getProductsId, [product_id], (error, results)=>{
        console.log(req.body)
        if(results.rows.length){
            res.send("Product already exists")
           
         
            return
        }

    //ADD 
    pool.query(queries.addProducts, [product_id, product_name, price, description, category], (error, results)=>{
        if(error) throw error;
        res.status(201).send("Product created Successfully")

    })
})
}
const deleteProducts = async (req, res) => {
  const id = parseInt(req.params.id);
  pool.query("SELECT * FROM product WHERE product_id=$1", [id], (error, results) => {
    const noProduct = !results.rows.length;
    if (noProduct) {
      res.send("Product does not exist");
    }
    pool.query("DELETE FROM product WHERE product_id=$1", [id], (error, results) => {
      if (error) throw error;
      res.status(200).send("Product Deleted Successful");
    });
  });
};
const updateProducts = (req, res) => {
    const id = parseInt(req.params.id);
    const { price } = req.body;

  
    pool.query(queries.getProductByIdQuery, [id], (error, results) => {
      const noProductFound = !results.rows.length;
      if (noProductFound) {
        res.send("Product does not exist");
      }
      pool.query(queries.updateProducts, [price, id], (error, results) => {
        if (error) throw error;
        res.status(200).send("Product updated successfully");
      });
    });
  };
module.exports={
    getProducts,
    addProducts,
    updateProducts,
    deleteProducts,
};