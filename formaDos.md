const config = require('./dbconfig');
const sql = require('mssql');

(async function () {
    try {
        let pool = await sql.connect(config)
        let result1 = await pool.request()
            //.input('input_parameter', sql.Int, 2)
            .query('select * from [dbo].[prueba]')
            //.query('select * from [dbo].[prueba] where id = @input_parameter')

        console.dir(result1.recordset);
    }catch (err) {
        console.log(err.message);
    }
})()

sql.on('error', err => {
    // ... error handler
})