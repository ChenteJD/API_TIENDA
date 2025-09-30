import express from 'express';
import morgan from 'morgan';
import mongoose from "mongoose";
import Product from './Product.js';
import Customer from './Customer.js';
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
app.post("/insertOne",async(req,res)=>{

    // Procesamiento de la petición
    const productInserted=await Product.create(req.body);//req.body recibe un arreglo js y lo inserta en la databases
    
    //Respuesta
    res.json({data:{
      message:"Producto insertado",
      product:productInserted
    }});
});


app.get("/getAll",async(req, res)=> {
    //procesamiento de la peticion
    const products=await Product.find();//regresa un arreglo js

    //Respuesta
    res.json({data:products})
});

//Customers.js


app.post("/customers/insertOne", async (req, res) => {
    // Procesamiento de la petición
    const customerInserted = await Customer.create(req.body); // Inserta un nuevo cliente

    // Respuesta
    res.json({
        data: {
            message: "Cliente insertado",
            customer: customerInserted
        }
    });
});

app.get("/customers/getAll", async (req, res) => {
    // Procesamiento de la petición
    const customers = await Customer.find(); // Obtiene todos los clientes

    // Respuesta
    res.json({ data: customers });
});


//Start server
app.listen(app.get('port'),
()=> console.log("Server listening on port" + app.get('port')));


//nodemon es para desarrollo, actualiza los cambios sin reiniciar el servidor
//morgan es un middleware que muestra las peticiones que llegan al servidor
//Mongoose es para interactuar con la base de datos MongoDB
//async nos ayuda a mandar a traer muchas tareas y que se realizen al mismo tiempo, si no lo ponemos tenemos que esperar a que termine una tarea para iniciar la siguiente