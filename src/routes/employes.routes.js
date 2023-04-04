import { Router } from "express"; //grupos de rutas 
import { createEmployees, getEmployees,getEmployee, updateEmployees, deleteEmployees } from "../controllers/employees.controller.js";

const router = Router() //crear enrutador. tiene metodos get, post...

//funciones q pueden ser reutilizables.
router.get('/employess',getEmployees )
router.get('/employess/:id',getEmployee )
router.post('/employess',createEmployees)
router.patch('/employess/:id',updateEmployees) //igual se puede utilizar put
router.delete('/employess/:id',deleteEmployees)


export default router

