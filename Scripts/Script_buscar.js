function Buscar_alumno(opcion)
{
    let valor_param = Obtener_parametro(opcion);
    let valor_busqueda = Obtener_clave(opcion);

    let arreglo_informacion = false;

    if(XML_en_uso)
    {
        let XML = Regresar_XML();
        let xml_parseado = XML.getElementsByTagName("alumno");
        arreglo_informacion = Buscar(valor_param, valor_busqueda, Volver_JSON(xml_parseado), opcion);
    }
    else
    {
        let JSON_ = Regresar_JSON();
        arreglo_informacion = Buscar(valor_param, valor_busqueda, JSON_, opcion);
    }

    if(opcion == 0)
    {
        Banners_busqueda(arreglo_informacion[0],valor_param,valor_busqueda);
        return arreglo_informacion;
    }
    else
    {
        return arreglo_informacion;
    }
}

function Buscar(campo, valor, informacion, opcion)
{
    let encontrado = false;
    let arreglo_resultados = []
    let arreglo_informacion = []

    for(let i = 0; i < informacion.alumno.length; i++)
    {
        if(informacion.alumno[i][campo] == valor)
        {
            arreglo_resultados.push(i);
            encontrado = true;
        }
    }

    if(encontrado && campo != 1)
    {
        Desplegar_resultados(arreglo_resultados,informacion);
    }

    arreglo_informacion.push(encontrado);
    arreglo_informacion.push(arreglo_resultados);

    return arreglo_informacion;
}

function Desplegar_resultados(arreglo_resultados, informacion)
{
    let tabla = document.getElementById("tabla_busqueda");

    Borrar_renglones(tabla);
    Llenar_encabezados(tabla);

    for(let k = 0; k < arreglo_resultados.length; k++)
    {
        Llenar_tabla(tabla,informacion,arreglo_resultados[k],(arreglo_resultados[k] + 1));
    }

    Cerrar_tabla(tabla);
}

function Obtener_parametro(opcion)
{
    let parametro;

    switch (opcion)
    {
        case 0:
            parametro = document.getElementById("param_busqueda").value;
        break;

        case 1:
            parametro = "Clave";
        break;
    }

    return parametro;
}

function Obtener_clave(opcion)
{
    let clave;

    switch (opcion)
    {
        case 0:
            clave = document.getElementById("id_a_buscar").value;
        break;

        case 1:
            clave = document.getElementById("id_a_editar").value;
        break;
    }

    return clave;
}

function Banners_busqueda(encontrado, valor_param, valor_busqueda)
{
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

        //Util si se quiere regresar a valores numéricos
        //let txt_param = caja_param.options[valor_param].text;

        let txt_parametro = document.getElementById("txt_parametro");
        txt_parametro.innerText = valor_param.toLowerCase() + " = " + valor_busqueda.toString();
    }
}