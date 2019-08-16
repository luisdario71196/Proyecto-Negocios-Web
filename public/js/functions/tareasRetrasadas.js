import swal from "sweetalert2";
import Swal from "sweetalert2";

// validar la fechas de las tareas asigandas mostrando 

export const tareasRetrasadas = () => {

    if (tareasRetrasadas.length) {

        // seleccionar el elemento
        const tareaRetrasada = document.querySelectorAll('i.atrasado');
        
        // detectar el valores
        const fechaInicial = document.getElementById('fechaInicial').innerHTML;
        const fechaFinal = document.getElementById('fechaFinal').innerHTML;
        const mostrarAdvettencia = document.querySelector('#{tarea.fechaFinal}');


        // Validar los tiempos
        if(fechaInicial > fechaFinal)
        {
            mostrarAdvettencia
            
        } else {
            
            return 0;
        }

        if (mostrarAvertencia > fechaFinal) {

            Swal.fire(
                'warning',
                'Tarea retrasada',
                'Esta tarea no se ha terminado'
            )
        }


        
    }
        
    
    
    
}