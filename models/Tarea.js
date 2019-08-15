// Importar sequelize
const Sequelize = require('sequelize');
// Importar la configuración de la base de datos
const db = require('../config/db');
// Importar el modelo de Proyecto
const Proyecto = require('./Proyecto');

const Tarea = db.define('tarea', {
    id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tarea: Sequelize.STRING,

    // Nuevos campos agregados
    descripcion: Sequelize.STRING,
    fechaInicio: Sequelize.DATE,
    fechaFinal: Sequelize.DATE,
    estado : Sequelize.INTEGER(1)
});
Tarea.belongsTo(Proyecto);

// Exportar el modelo
module.exports = Tarea;