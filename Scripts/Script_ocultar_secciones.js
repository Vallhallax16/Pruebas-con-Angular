function Ocultar_excepto(opcion)
{
    let secciones = []
    secciones.push(document.getElementById("forma_registro"));
    secciones.push(document.getElementById("mostrar_tabla"));
    secciones.push(document.getElementById("borrar_alumno"));
    secciones.push(document.getElementById("buscar_alumno"));
    secciones.push(document.getElementById("editar_alumno"));

    for(let i = 0; i < secciones.length; i++)
    {
        if(i != opcion)
        {
            secciones[i].style.display = "none";
        }
        else
        {
            secciones[i].style.display = "block";
        }
    }

    switch (opcion)
    {
        case 1:
            Mostrar_tabla();
        break;

        default:
        break;
    }
}