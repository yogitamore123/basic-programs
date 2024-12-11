import pool from "../db/dbConfig.js";
export default class product{
    constructor(subproduct_id,subproduct_name ,id,price,image){
         this.subproduct_id=subproduct_id;
         this.subproduct_name=subproduct_name;
         this.id=id;
         this.price=price;
         this.image=image;
    }
    addproduct(){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(!err){
                   let sql = "insert into subproduct(subproduct_id, subproduct_name,id,price,image) values(?,?,?,?,?)";
                   con.query(sql,[this.subproduct_id,this.subproduct_name,this.id,this.price,this.image],(err,result)=>{
                    con.release();
                    if(!err)
                       resolve(result);
                    else
                     reject(err);
                   });
                }
                else
                  reject(err);
            })
        });
    }
    category(){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(!err){
                   let sql = "select * from viewproduct";
                   con.query(sql,(err,result)=>{
                    con.release();
                    if(!err)
                       resolve(result);
                    else
                     reject(err);
                   });
                }
                else
                  reject(err);
            })
        });
    }
    viewproduct(){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(!err){
                   let sql = "select * from subproduct";
                   con.query(sql,(err,result)=>{
                    con.release();
                    if(!err)
                       resolve(result);
                    else
                     reject(err);
                   });
                }
                else
                  reject(err);
            })
        });
    }
    deleteproduct(id){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(!err){
                   let sql = "delete from subproduct where subproduct_id=?";
                   con.query(sql,[id],(err,result)=>{
                    con.release();
                    if(!err)
                       resolve(result);
                    else
                     reject(err);
                   });
                }
                else
                  reject(err);
            })
        });
    }

    static getProductById(id){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(!err){
                   let sql = "select * from subproduct where subproduct_id = ?";
                   con.query(sql,[id],(err,result)=>{
                    con.release();
                    if(!err)
                       resolve(result);
                    else
                     reject(err);
                   });
                }
                else
                  reject(err);
            })
        });
    }

    edit(id){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(!err){
                   let sql = "update subproduct set subproduct_name=?,price=? where subproduct_id=?";
                   con.query(sql,[this.subproduct_name,this.price,id],(err,result)=>{
                    con.release();
                    if(!err)
                       resolve(result);
                    else
                     reject(err);
                   });
                }
                else
                  reject(err);
            })
        });
    }
}
