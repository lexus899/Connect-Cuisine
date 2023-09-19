import express from "express"
import mysql from "mysql"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js"
import cookieParser from "cookie-parser"
import multer from "multer";

const app=express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "CCDev123",
    database: "blog"

})

'ALTER USER "root @ "localhost" IDENTIFIED WITH mysql_native_password BY "CCDev123"'

app.get("/", (req,res)=>{
    res.json("hello this is the backend")
})

app.get("/posts", (req,res)=>{
    const q = "SELECT * FROM posts"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/posts", (req,res)=>{
    const q = "INSERT INTO books ('title', 'desc', 'cover') VALUES (?)"
    const values = ["title from backend","desc from backend","cover pic from backend"]

    db.query(q,[values], (err,data)=>{
    if (err) return res.json(err);
    return res.json(data);

})
})

app.use(express.json())
app.use(cookieParser())

const upload = multer({ dest: 'uploads/'})




app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)

app.listen(8800,()=>{
    console.log("Connected!")
})