import {pool} from '../db.js'

export const ping = async (req,res) => {
    const [result] = await pool.query('select "PONG" AS Result')
    console.log(result[0])
    res.json(result[0])}