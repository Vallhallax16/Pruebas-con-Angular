function Borrador()
{
    let clave_escogida = document.getElementById("id_a_borrar");
    let clave_txt = clave_escogida.value.toLowerCase();
    let objeto_a_emplear;

    if(XML_en_uso)
    {
        let XML = Regresar_XML();
        let tags_alumno = XML.getElementsByTagName("alumno");

        objeto_a_emplear = Volver_JSON(tags_alumno);
    }
    else
    {
        objeto_a_emplear = Regresar_JSON();
    }

    let borrado = false;

    for(let i = 0; i < objeto_a_emplear.alumno.length; i++)
    {
        let celda = objeto_a_emplear.alumno[i]["Clave"];

        if(celda.toString().toLowerCase() === clave_txt.toString())
        {
            if(XML_en_uso)
            {
                nuevo_XML = Volver_XML_actualizado(i);
                XML_lleno = true;
            }
            else
            {
                objeto_a_emplear.alumno.splice(i,1);
                nuevo_JSON = objeto_a_emplear;
                JSON_lleno = true;
            }

            borrado = true;

            break;
        }
    }

    let banner_exito = document.getElementById("banner_b_exito");
    let banner_fallo = document.getElementById("banner_b_fallo");

    if(borrado)
    {
        banner_fallo.style.display = "none"
        banner_exito.style.display = "block";
    }
    else
    {
        banner_fallo.style.display = "block";
        banner_exito.style.display = "none";
    }

    setTimeout(() =>{
        banner_fallo.style.display = "none";
        banner_exito.style.display = "none";

        clave_escogida.value = "";
    }, 3000);
}