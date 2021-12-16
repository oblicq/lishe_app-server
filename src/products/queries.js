const getProducts = "SELECT * FROM product";
const getProductsId = "SELECT * FROM product WHERE product_id=$1";
const addProducts ="INSERT INTO product (product_id, product_name, price, description, category) VALUES ($1,$2, $3, $4,$5)";
  const updateProducts = "UPDATE product SET price = $1 WHERE product_id = $1";
  const deleteProducts="DELETE FROM product WHERE product_id=$1";




module.exports ={
   getProducts,
   getProductsId,
   addProducts,
   updateProducts,
   deleteProducts,
};