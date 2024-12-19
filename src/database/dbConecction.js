import mongoose from "mongoose";
import "dotenv/config";

const stringConnection = process.env.PORT || "mongodb://localhost/inventory";

mongoose.connect(stringConnection);

const db = mongoose.connection;

db.once("open", () =>{
    console.log("Conectado a la base de datos");
})