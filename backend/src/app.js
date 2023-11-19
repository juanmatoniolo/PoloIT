//Express es el que nos permite crear el servidor
const  express = require('express'); 
require('dotenv').config();
const cors = require('cors'); 

//Inicializamos el servidor, el servidor devuelve un objeto, que guardamos en app (se suele llamar asi siempre)
const app = express();

//SETTINGS 
app.set('port', process.env.REACT_APP_PORT || 4002);



//MIDDLWARE o funciones ej.: cors para que los servidores cambien datos entre ellso 
app.use(cors()); 
app.use(express.json());


//ROUTES

app.use('/api/user', require("./routes/user") )
app.use('/api/notes', require("./routes/notes") )



module.exports = app; 
