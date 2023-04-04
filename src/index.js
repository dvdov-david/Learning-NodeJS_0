import app from './app.js'
import {PORT } from "./config.js";

app.listen(PORT)
console.log('Server running on port', PORT)

//IDENX ES EL ARCHIVO Q ARRANCA TODO, inicializa el puerto
//Index llama a app -> tiene todas las configuraciones de express y llama las rutas

