const database = require('../database/database.js');
const Product = require('./Product.js');

class Model{
    constructor(table){
        this.table = table;
    } 

      querys(query){
        return new Promise((resolve, reject) => {
          database.query(`${query}`, async (err, result) => {
            if(err){
              reject(err)
            }else{
              resolve(result);
            }
          });
        });
      }

      getAll(){
        return this.querys(`SELECT * FROM ${this.table}`);
      }

     getById(id){
      return this.querys(`SELECT * FROM ${this.table} WHERE id = ${id}`);
     }
}

module.exports = Model;