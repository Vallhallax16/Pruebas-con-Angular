function Borrador()
{
    let clave_escogida = document.getElementById("id_a_borrar");
    let clave_txt = clave_escogida.value.toLowerCase();

    let XML = Regresar_XML();
    let tags_alumno = XML.getElementsByTagName("alumno");

    let borrado = false;

    for(let i = 0; i < tags_alumno.length; i++)
    {
        let celda = tags_alumno[i].childNodes[3].childNodes[0].nodeValue;

        console.log("Celda " + celda.toLowerCase() + " vs clave_txt " + clave_txt);

        if(celda.toString().toLowerCase() === clave_txt.toString())
        {
            tags_alumno[i].parentNode.removeChild(tags_alumno[i]);

            borrado = true;

            XML_lleno = true;
            nuevo_XML = XML;

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
}