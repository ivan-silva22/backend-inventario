import express from "express";
import cors from "cors"
import * as dotenv from "dotenv";
import morgan from "morgan";
import path from "path";
import "./src/database/dbConecction";
import routerProducts from "./src/routes/products.routes";
import routerUsers from "./src/routes/users.routes";
import routerSuppliers from "./src/routes/supplier.routes";
import routerInventoryMovement from "./src/routes/inventoryMovement.routes";

dotenv.config();

const app = express();

app.set('PORT', process.env.PORT || 4000);

app.listen(app.get('PORT'), () =>{
    console.log("Estoy en el puerto " + app.get('PORT'));
})

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "/public")));


app.use("/api", routerProducts);
app.use("/api/auth", routerUsers);
app.use("/api", routerSuppliers);
app.use("/api", routerInventoryMovement);
