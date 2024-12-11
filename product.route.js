import express from "express";
import { addProductAction,addProductPage,viewproduct,addcategory,categoryproduct,deleteproduct,getproduct,editproduct} from "../controller/product.controller.js";
import { verify } from "../middleware/auth.js";
const router = express.Router();
router.get("/add-product",verify,addProductPage);
router.post("/add-product",verify,addProductAction);
router.get("/view-pro",verify,viewproduct);
router.get("/addcategory",verify,addcategory);
router.get("/viewcategory",verify,categoryproduct);
router.get("/delete/:deleteId",verify,deleteproduct);
router.get("/edit/:id",verify,getproduct);
router.post("/edit",verify,editproduct)
export default router;
