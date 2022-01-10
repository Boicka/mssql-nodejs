const config = require('./dbconfig');
const sql = require('mssql');

async function getTable(){
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query('select * from [dbo].[prueba]')
        return result;
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    getTable
};