import swal from "sweetalert2";
import Swal from "sweetalert2";

// validar la fechas de las tareas asigandas mostrando 

export const tareasRetrasadas = () => {

    if (tareas.length) {

        // seleccionar el elemento
        const tareaRetrasada = document.querySelectorAll('li.tarea');
        
        // detectar el valores
        const fechaInicial = document.getElementById('fechaInicial').innerHTML;
        const fechaFinal = document.getElementById('fechaFinal').innerHTML;
        const mostrarAdvettencia = document.querySelector('#{tarea.fechaFinal}');


        // Validar los tiempos
        if(fechaInicial > fechaFinal)
        {
            mostrarAdvettencia
            Swal.fire(
                'warning',
                'Tarea retrasada',
                'Esta tarea no se ha terminado'
            )

        } else {
            
            return 0;
        }


        
    }
        
    
    
    
}