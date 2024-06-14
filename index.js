import express from 'express';
import connectDB from './config/db.js';
import todoRoutes from './routes/todo.routes.js';
import cors from "cors";
// import path from "path";


const app = express();

app.use(express.json());
app.use(cors())

// const __dirname = path.resolve();


app.use("/todo",todoRoutes)

// app.use(express.static(path.join(__dirname, "Excercise-2/Client/todo/dist")));

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "Excercise-2", "Client", "todo", "dist", "index.html"));
// })

app.listen(3000, async()=>{
    try{
        await connectDB()
        console.log("connected to database successfully");
        console.log("server is running on port 3000");
    }
    catch(err){
        console.log(err,"failed to connect to database");
    }
   
})

app.get("/",(req,res)=>{
    console.log("server is running on port 3000");
    res.send("server is running on port 3000");
})

export default app


