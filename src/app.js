import express from "express";
import employeesRoutes from './routes/employes.routes.js' //.js porque son modulos ecma6
//nombre cualquiera porque es un export default
import indexRoutes from './routes/index.routes.js'




const app = express()

//antes q llegue a la ruta, reciba dato a json
app.use(express.json())

app.use('/api',employeesRoutes) //utilizar archivo de employeess
app.use(indexRoutes)

//manejar rutas que no existen
app.use((req,res,next) => {
    res.status(404).json({
        message:'endpoint not found'
    })
})

export default app;