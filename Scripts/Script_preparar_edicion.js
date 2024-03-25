function Cargar_informacion(indice)
{
    let objeto;
    let etiquetas = [ "Nombre", "Ap_pat", "Ap_mat", "Telefono" ,"Correo" ];

    if(XML_en_uso)
    {
        let XML = Regresar_XML();
        let xml_parseado = XML.getElementsByTagName("alumno");
        let array_unitario = []

        array_unitario.push(xml_parseado[indice])

        objeto = Volver_JSON(array_unitario);
    }
    else
    {
        let JSON_ = Regresar_JSON()

        let arreglo = []
        arreglo.push(JSON_.alumno[indice]);

        let alumno = { alumno: arreglo }

        objeto = alumno;
    }

    let campos_editables = document.getElementsByClassName("EDIT");

    for(let i = 0; i < 5; i++)
    {
        campos_editables[i].value = objeto.alumno[0][etiquetas[i]];
    }

    Checar_elementos(campos_editables[5], objeto.alumno[0]["Sexo"], "input");

    campos_editables[6].value = objeto.alumno[0]["Fecha"];

    Checar_elementos(campos_editables[7], objeto.alumno[0]["Facultad"], "option");

    Checar_elementos(campos_editables[8], objeto.alumno[0]["Campus"], "input");

    posicion_modificadora = indice;
}

function Checar_elementos(objeto, valor_objetivo, tag)
{
    let elementos = objeto.getElementsByTagName(tag);

    for(let i = 0; i < elementos.length; i++)
    {
        if(elementos[i].value == valor_objetivo)
        {
            if(tag == "input")
            {
                elementos[i].checked = true;
            }
            else
            {
                elementos[i].selected = true;
            }
            break;
        }
    }
}