function Ocultar_excepto(opcion)
{
    let secciones = []
    secciones.push(document.getElementById("forma_registro"));
    secciones.push(document.getElementById("mostrar_tabla"));
    secciones.push(document.getElementById("borrar_alumno"));

    for(let i = 0; i < secciones.length; i++)
    {
        if(i != opcion)
        {
            secciones[i].style.display = "none";
        }
        else
        {
            secciones[i].style.display = "";
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