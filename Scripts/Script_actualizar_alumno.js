function Actualizar_alumno()
{
    if(posicion_modificadora != -1)
    {
        let campos_editables = document.getElementsByClassName("EDIT");

        if(XML_en_uso)
        {
            let XML = Regresar_XML();
            let xml_parseado = XML.getElementsByTagName("alumno");
            let i = 0;
            let k = 0;

            while(k < 9)
            {
                if(i != 3)
                {
                    xml_parseado[posicion_modificadora].childNodes[i].childNodes[0].nodeValue = Extraer_valor(campos_editables[k]);
                    k++;
                }
                i++;
            }

            XML_lleno = true;
            nuevo_XML = XML;
        }
        else
        {
            let JSON_ = Regresar_JSON();
            let etiquetas = [ "Nombre", "Ap_pat", "Ap_mat", "Telefono" ,"Correo", "Sexo", "Fecha", "Facultad", "Campus" ];

            for(let i = 0; i < 9; i++)
            {
                JSON_.alumno[posicion_modificadora][etiquetas[i]] = Extraer_valor(campos_editables[i]);
            }

            JSON_lleno = true;
            nuevo_JSON = JSON_;
        }
    }

    posicion_modificadora = -1;

    Confirmar_y_ocultar(false);
}

function Extraer_valor(campos_editables)
{
    if(campos_editables.value != undefined)
    {
        return campos_editables.value;
    }
    else
    {
        let inputs = campos_editables.getElementsByTagName("input");

        for(let i = 0; i < inputs.length; i++)
        {
            if(inputs[i].checked)
            {
                return inputs[i].value;
            }
        }
    }
}