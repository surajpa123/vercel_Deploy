import Todo from "../model/todo.model.js";

export const createTodo = async(req,res) =>{
    const {title,description,status} = req.body;
    try{
        if(!title){
            return res.status(400).json({message:"title is required"})    
        }
        const newTodo = new Todo({
            title,
            description,
            status
        })
        await newTodo.save();
        res.status(201).json({message:"Todo created successfully",data:newTodo})
    }
    catch(err){
        res.status(500).json({message:"failed to create todo",error:err})
    }
   
}

export const getTodo = async(req,res) =>{
    try{
        const todo = await Todo.find();
        console.log(todo)
        if(!todo){
            return res.status(404).json({message:"No todo found"})
        }
        res.status(200).json({message:"Todo fetched successfully",data:todo})
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:"failed to fetch todo",error:err})
    }   
}

export const deleteTodo = async(req,res) =>{
    const {id} = req.params;
    try{
        const todo = await Todo.findByIdAndDelete(id);
        if(!todo){
            return res.status(404).json({message:"No todo found"})
        }
        res.status(200).json({message:"Todo deleted successfully",data:todo})
    }
    catch(err){
        res.status(500).json({message:"failed to delete todo",error:err})
    }
}

export const updateTodo = async(req,res) =>{
    const {id} = req.params;
    try{
        const todo = await Todo.findByIdAndUpdate(id,req.body,{new:true});
        if(!todo){
            return res.status(404).json({message:"No todo found"})
        }
        res.status(200).json({message:"Todo updated successfully",data:todo})
    }
    catch(err){
        res.status(500).json({message:"failed to update todo",error:err})
    }
}

export const getTodoById = async (req, res) => {
    const { id } = req.params;
    try {
        const todo = await Todo.findById(id);
        if (!todo) {
            return res.status(404).json({ message: "Todo not found" });
        }
        res.status(200).json({ message: "Todo found", data: todo });
    } catch (err) {
        res.status(500).json({ message: "Failed to get todo", error: err });
    }
};
