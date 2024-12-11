import express from "express";
import bodyParser from "body-parser";
import AdminRouter from "./routes/admin.route.js";
import session from "express-session";
import ProductRouter from "./routes/product.route.js";
const app = express();

app.set("view engine","ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret:"flkdfdjvriuweiurweiourbvbvnm"}));

app.use("/admin",AdminRouter);
app.use("/product",ProductRouter);

app.listen(4000,()=>{
    console.log("Server started...");})