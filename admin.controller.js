// import pool from "../db/dbConfig.js";
import Admin from "../model/Admin.js";
export const dashboardPageAction = (request, response, next) => {
  response.render('dashboard.ejs');
}
export const singInPage = (request, response, next) => {
  response.render("sign-in.ejs");
};

//         if(!err){
//           let sql = "select * from admin where email =? and password =?";
//           con.query(sql,[email,password],(err,result)=>{
//             con.release();
//             if(!err){
//               if(result.length!=0)
//               return response.end("Sign in success....");
//               return response.end("Sing in failed...");
//             }
//               else{
//                 console.log(err);
//                 return response.end("Something wrong...");  
//           }
//           });         
//         }
//         else
//          console.log(err);
//     })
// }
export const signInAction = (request, response, next) => {
  let { email, password } = request.body;
  pool.getConnection((err, con) => {
    let admin = new Admin(null, email, password); // admin:{id:null,email:'test@gmail.com',password:12345}
    admin.authenticate()
      .then(result => {
        if (result.length != 0) {
          request.session.currentUserId = result[0].id;
          request.session.currentUserEmail = result[0].email;
          request.session.isLoggedIn = true;
          response.redirect("/admin/dashboard");
        }
        else
          response.redirect("/admin/sign-in");
      }).catch(err => {
        console.log(err);
      });
  })

}
