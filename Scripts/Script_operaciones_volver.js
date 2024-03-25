function Volver_JSON(alumno_XML)
{
    let txt = '{ "alumno": [';

    for(let i = 0; i < alumno_XML.length; i++)
    {
        txt += '{ "Nombre":' + '"' + alumno_XML[i].childNodes[0].childNodes[0].nodeValue +'",' +
            '"Ap_pat":' + '"'+ alumno_XML[i].childNodes[1].childNodes[0].nodeValue +'",' +
            '"Ap_mat":' + '"' + alumno_XML[i].childNodes[2].childNodes[0].nodeValue + '",' +
            '"Clave":' + '"' + alumno_XML[i].childNodes[3].childNodes[0].nodeValue + '",' +
            '"Telefono":' + '"' + alumno_XML[i].childNodes[4].childNodes[0].nodeValue + '",' +
            '"Correo":' + '"' + alumno_XML[i].childNodes[5].childNodes[0].nodeValue + '",' +
            '"Sexo":' + '"'+ alumno_XML[i].childNodes[6].childNodes[0].nodeValue + '",' +
            '"Fecha":' + '"'+ alumno_XML[i].childNodes[7].childNodes[0].nodeValue +'",' +
            '"Facultad":' + '"'+ alumno_XML[i].childNodes[8].childNodes[0].nodeValue +'",' +
            '"Campus":' + '"' + alumno_XML[i].childNodes[9].childNodes[0].nodeValue +'"}'

        if((i + 1) != alumno_XML.length)
        {
            txt += ",";
        }
    }

    txt += ']}';

    return JSON.parse(txt);
}

function Volver_XML_actualizado(posicion)
{
    let XML = Regresar_XML();
    let tags_alumno = XML.getElementsByTagName("alumno");
    tags_alumno[posicion].parentNode.removeChild(tags_alumno[posicion]);

    return XML;
}