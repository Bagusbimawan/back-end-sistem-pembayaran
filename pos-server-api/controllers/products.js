const dbConnection = require("../configs/database"); 

exports.fetchProduct = async () => {
    const query = dbConnection.query("SELECT * FROM products")
    return query
};

exports.addProduct = async (data) => {
    const query = await dbConnection.query("INSERT INTO products SET ?", [data])
    return { id: query.insertId }
};