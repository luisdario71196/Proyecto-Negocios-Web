// Importar los modelos
const Proyecto = require('../models/Proyecto');
const Tarea = require('../models/Tarea');

exports.agregarTarea = async (req, res, next) => {
    
    // Obtenemos el proyecto actual mediante la URL
    const proyecto = await Proyecto.findOne({
        where : {
            url : req.params.url
        }
    });

    // Leer el valor del input de la tarea mediante destructuring
    const { tarea } = req.body;

    // Leer los nuevos valores de la tabla Tareas mediante el destructuring
    const { descripcion } = req.body;
    const { fechaInicio } = req.body;
    const { fechaFinal } = req.body;
 
    // Mapear los valores del modelo para almacenarlos
    const estado = 0;
    const proyectoId = proyecto.id;

    // Insertando en la base de datos y redireccionando
    const resultado = await Tarea.create({
        tarea,
        descripcion,
        fechaInicio,
        fechaFinal,
        estado,
        proyectoId
    });

    // Si se produce algún error
    if (!resultado) {
        return next();
    }

    // Redireccionando
    res.redirect(`/proyectos/${req.params.url}`);

    res.send('Enviado');
}

/**------------------------------------------------------------- */
// Actualizar los datos de las tareas
exports.actualizarTarea = async (req, res) => {
    
    // Obtener todos los proyectos del usuario actual
    const usuarioId = res.locals.usuario.id;
    const proyecto = await Proyecto.findOne({
        where: {
            url: req.params.url
        }
    });
    const { tareaEditar } = req.body;
    const { descripcionEditar } = req.body;
    const { fechaInicioEditar } = req.body;
    const { fechaFinalEditar } = req.body;
    let errores = [];

    if (!tareas) {
        errores.push({ 'texto': 'Las tareas no pueden ser vacias' });

    }
    if (errores.length > 0) {
        res.render('editarTarea', {
            nombrePagina: 'Editar Tarea',
            tareas,
            errores
        });
    } else {
        await Tarea.update(
            { tareaEditar },
            { descripcionEditar },
            { fechaInicioEditar },
            { fechaFinalEditar },
            {where: {
                id: req.params.id  
            }}
        );

        res.redirect('/');
    }

    


};


/**------------------------------------------------------------- */
exports.formularioEditarTarea = async (req, res) => {
    
    
    // Obtener todos los proyectos del usuario actual
    const tareasPromesi = await Proyecto.findAll({
        where: {
            id : req.params.id
        }
    });

    const tareaPromise = Tarea.findOne({
        where: {
            id:req.params.id
        }
    });
    
    const [tareas, tarea] = await Promise.all([tareasPromesi, tareaPromise]);
    res.render('editarTarea', {
        nombrePagina: 'Editar Tarea',
        tareas,
        tarea
    })
};


exports.actualizarEstadoTarea = async (req, res, next) => {
    // Obtener el id de la tarea
    // Patch solamente obtiene valores a través de req.params y no de req.query
    const {id} = req.params;

    // Buscar la tarea con el obtenido
    const tarea = await Tarea.findOne({
        where : {
            id : id
        }
    });

    // Cambiar el estado
    let estado = tarea.estado == 0 ? 1 : 0;

    tarea.estado = estado;

    // Actualizar la tarea
    const resultado = await tarea.save();

    if (!resultado){
        next();
    }

    res.status(200).send('Actualizado');
}

exports.eliminarTarea = async (req, res, next) => {
    // Obtener el id de la tarea mediante query o params
    const { id } = req.params;

    // Eliminar la tarea
    const resultado = await Tarea.destroy({
        where : {
            id : id
        }
    });

    if(!resultado) {
        return next();
    }

    res.send(200).send('La tarea ha sido eliminada correctamente');
}