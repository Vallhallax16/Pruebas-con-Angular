function Buscar_alumno()
{
    let caja_param = document.getElementById("param_busqueda");
    let valor_param = caja_param.value;

    let a_buscar = document.getElementById("id_a_buscar");
    let valor_busqueda = a_buscar.value

    let encontrado = Buscar_en_XML(valor_param, valor_busqueda);

    let banner = document.getElementById("banner_busq_fallo");
    let tabla = document.getElementById("tabla_busqueda");

    if(encontrado)
    {
        banner.style.display = "none";
        tabla.style.display = "block"
    }
    else
    {
        banner.style.display = "block";
        tabla.style.display = "none";

        let txt_param = caja_param.options[valor_param].text;

        let txt_parametro = document.getElementById("txt_parametro");
        txt_parametro.innerText = txt_param.toString().toLowerCase() + " = " + valor_busqueda.toString();
    }
}

function Buscar_en_XML(posicion, valor)
{
    let XML = Regresar_XML();
    let alumno_XML = XML.getElementsByTagName("alumno");

    let encontrado = false;

    let arreglo_resultados = []

    for(let i = 0; i < alumno_XML.length; i++)
    {
        if(alumno_XML[i].childNodes[posicion].childNodes[0].nodeValue == valor)
        {
            arreglo_resultados.push(i);

            encontrado = true;
        }
    }

    if(encontrado)
    {
        Desplegar_resultados(arreglo_resultados, alumno_XML);
    }

    return encontrado;
}

function Desplegar_resultados(arreglo_resultados, alumno_XML)
{
    let tabla = document.getElementById("tabla_busqueda");

    Borrar_renglones(tabla);
    Llenar_encabezados(tabla);

    for(let k = 0; k < arreglo_resultados.length; k++)
    {
        Llenar_tabla(tabla,alumno_XML,arreglo_resultados[k],(arreglo_resultados[k] + 1));
    }

    Cerrar_tabla(tabla);
}