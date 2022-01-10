const config = {
    user: 'dev',
    password: 'test',
    server: 'localhost',
    database: 'prueba',
    options:{
        trustedConnection: true,
        enableArithAbort: true,
        instancename:'',
        encrypt: false,
        trustServerCertificate: true
    },
    port: 1433
}

module.exports = config;