import {pool} from '../db.js'

//Obtener todos los empleados
export const getEmployees = async (req,res) => {
    try{
         const [rows] = await pool.query('SELECT * FROM employee')
    console.log(rows)    
    res.json(rows)
  } catch{
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

//Obtener solo 1 empleado
export const getEmployee = async (req,res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM employee WHERE Id = ?', [req.params.id])
        
        return (rows.length <=0 ? res.status(404).json({message:'Not Found'}): res.json(rows[0]) )
        //no enviar arreglo sino el primer objeto json

    } catch (error) {
        return res.status(500).json({
                message: 'Something goes wrong'
    })
    }
}


//crear 1 empleado
export const createEmployees = async (req,res) => {
    const {name, salary} = req.body //desde front end(thubderClient) se enva un json
    //y aqui se rescata del cuerpo del mensaje
    //Aqui s epodrian hacer validaciones//
    try {
     const [rows] = await pool.query('INSERT INTO employee(name,salary) VALUES(?,?)',[name,salary])
    res.send({
        id: rows.insertId,
        name,
        salary
    }) //entre llaves para devolverlo como json
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

/*Actualizar empleado.*/
export const updateEmployees = async (req,res) => {
    const {id} = req.params.id //viene por url
    const {name, salary} = req.body //viene en el boody como json
    try {
        const [result] = await pool.query('UPDATE employee SET name = IFNULL(?,name),salary = IFNULL(?,salary) WHERE id = ?', [name,salary,id])
        console.log(result)

        if(result.affectedRows === 0) return res.status(404).json({
            message: 'Employee not found'
        })
        res.json('received')
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}





//eliminar 1 empleado
export const deleteEmployees = async (req,res) => { 
try {
    const [result] = await pool.query('DELETE FROM employee WHERE id =?',[req.params.id])
    
    if(result.afecterdRows <=0){
        return res.status(404).json({message:'Employee not found'})
    }
    res.sendStatus(204)
    res.send('employee deleted')
} catch (error) {
    return res.status(500).json({
        message: 'Something goes wrong'
    })
}
}