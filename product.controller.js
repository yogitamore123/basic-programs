import product from "../model/product.js";
export const addProductPage = (request, response, next) => {
  response.render("add-product.ejs");
}
export const addProductAction = (request, response, next) => {
  let Product = new product(request.body.subproduct_id, request.body.subproduct_name, request.body.id, request.body.price, request.body.image);
  Product.addproduct()
    .then((result) => {
      if (result.length != 0) {
        response.render("dashboard.ejs")
      }
    }).catch(err => {
      console.log(err);
      response.end("failed.. ")
    })
}


export const addcategory = (request, response, next) => {
  response.render("addcategory.ejs");
}

export const viewproduct = (request, response, next) => {
  let Product = new product();
  // Product.addproduct();
  Product.viewproduct()
    .then((result) => {
      if (result.length != 0) {
        response.render("view-pro.ejs", { Product: result })
      }
    }).catch(err => {
      console.log(err);
      response.end("cannot fetch data.. ")
    })
}
export const categoryproduct = (request, response, next) => {
  let Product = new product();
  // Product.addproduct();
  Product.category()
    .then((result) => {
      if (result.length != 0) {
        response.render("viewcategory.ejs", { Product: result })
      }
    }).catch(err => {
      console.log(err);
      response.end("can't fetch.. ")
    })
}
export const deleteproduct = (request, response, next) => {
  let Product = new product();
  Product.deleteproduct(request.params.deleteId)
    .then((result) => {
      if (result.length != 0) {
        response.redirect("/product/view-pro")
      }
    }).catch(err => {
      console.log(err);
      response.end("can't fetch.. ")
    })
}
export const getproduct = (request, response, next) => {
let {id}= request.params;
  // let Product = new product(id);
  product.getProductById(id)
    .then((result) => {
      if (result.length != 0) {
        console.log(result[0]);
        response.render("edit.ejs"  , {item : result[0]})
      }
    }).catch(err => {
      console.log(err);
      response.end("can't fetch.. ")
    })
}
export const editproduct = (request, response, next) => {
  // let {id}= request.params;
    let Product = new product(request.body.id,request.body.subproduct_name,null,request.body.price );
    Product.edit(request.body.id)
      .then((result) => {
        if (result.length != 0) {
          console.log(result[0]);
          response.render("edit.ejs"  , {item : result[0]})
        }
      }).catch(err => {
        console.log(err);
        response.end("can't fetch.. ")
      })
  }
  
  


