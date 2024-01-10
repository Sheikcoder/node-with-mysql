const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('sheik_db' , 'root' , 'root',{
    host: 'loaclhost',
    dialect : 'mysql'
}) ;
try {
sequelize.authenticate();
console.log("connected");
} catch (error) {
    console.log("not cconnect",error );
}