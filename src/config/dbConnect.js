import mongoose from "mongoose";

mongoose.connect("mongodb+srv://user:senac@projetofinal.ydzysdn.mongodb.net/projetofinal");

let db = mongoose.connection;

export default db;