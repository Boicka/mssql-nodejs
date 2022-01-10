const Prueba = require('./prueba');
const dboperations = require('./dboperations');

dboperations.getTable()
    .then(msg => {
        const mio = msg.recordset;
        console.log(mio);
    })