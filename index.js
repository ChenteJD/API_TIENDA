import express from 'express';
import morgan from 'morgan';
import mongoose from "mongoose";
//Importing routes
const app=express();



//Setting
app.set('port',process.env.PORT||3000);
//Middlewares
app.use(express.json());//Entiende json 
app.use(morgan('dev'));//Log de peticiones
app.use(express.urlencoded({extended:false}));//Entiende informacion de formularios 

//Database connection
mongoose.connect("mongodb+srv://chente:influencer55@cluster0.ojcwmbw.mongodb.net/groceries_db?retryWrites=true&w=majority&appName=Cluster0")
  .then(db=>console.log("mongodb is connected"))
  .catch(err => console.error(err));
//Routes
app.post("/insertOne",(req,res)=>{
    // Procesamiento de la petición
    console.log(req.body); 
    //Respuesta
    res.json({message:"Producto insertado"});
});

app.get("/getAll",(req, res)=> {
    //procesamiento de la peticion
    //Respuesta
    res.jso({data:"Lista de productos"})
});

//Start server
app.listen(app.get('port'),
()=> console.log("Server listening on port" + app.get('port')));


//nodemon es para desarrollo, actualiza los cambios sin reiniciar el servidor
//morgan es un middleware que muestra las peticiones que llegan al servidor
//Mongoose es para interactuar con la base de datos MongoDB