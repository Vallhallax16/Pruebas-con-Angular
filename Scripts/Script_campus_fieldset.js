function Seleccionar_solo_este(opcion)
{
    let opciones = document.getElementById("Campus_editable").getElementsByTagName("input");

    for(let i = 0; i < opciones.length; i++)
    {
        if(i != opcion)
        {
            opciones[i].checked = false;
        }
    }

}