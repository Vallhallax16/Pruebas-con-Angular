//Se trabaja únicamente con XML
function Mostrar_tabla()
{
    let tabla = document.getElementById("tabla_de_alumnos");
    let objeto_parseado;

    Borrar_renglones(tabla);

    Llenar_encabezados(tabla);

    if(XML_en_uso)
    {
        let xmlDoc = Regresar_XML()

        let xml_parseado = xmlDoc.getElementsByTagName("alumno");

        objeto_parseado = Volver_JSON(xml_parseado);
    }
    else
    {
        objeto_parseado = Regresar_JSON();
    }

    Llenar_tabla(tabla, objeto_parseado, 0, objeto_parseado.alumno.length);

    Cerrar_tabla(tabla);
}

function Borrar_renglones(tabla)
{
    let renglones = tabla.getElementsByTagName("tr");

    if(renglones.length != 0)
    {
        let limite = renglones.length;

        for(let i = 0; i < limite; i++)
        {
            tabla.deleteRow(0);
        }
    }
}

function Llenar_encabezados(tabla)
{
    tabla.innerHTML += "<thead><tr>" +
        "            <th>Nombre</th>" +
        "            <th>Apellido paterno</th>" +
        "            <th>Apellido materno</th>" +
        "            <th>Clave</th>" +
        "            <th>Telefono</th>" +
        "            <th>Correo</th>" +
        "            <th>Sexo</th>" +
        "            <th>Fecha</th>" +
        "            <th>Facultad</th>" +
        "            <th>Campus</th>" +
        "          </tr></thead>"+
        "          <tbody>";
}

function Cerrar_tabla(tabla)
{
    tabla.innerHTML += "</tbody>";
    tabla.style.textAlign = "center";
}

function Llenar_tabla(tabla,alumno, inicio, fin)
{
    for(let i = inicio; i < fin; i++)
    {
        tabla.innerHTML += "<tr>"
            +	"<td>" + alumno.alumno[i].Nombre + "</td>"
            +	"<td>" + alumno.alumno[i].Ap_pat + "</td>"
            +	"<td>" + alumno.alumno[i].Ap_mat + "</td>"
            +	"<td>" + alumno.alumno[i].Clave + "</td>"
            +	"<td>" + alumno.alumno[i].Telefono + "</td>"
            +	"<td>" + alumno.alumno[i].Correo + "</td>"
            +	"<td>" + alumno.alumno[i].Sexo + "</td>"
            +	"<td>" + alumno.alumno[i].Fecha + "</td>"
            +	"<td>" + alumno.alumno[i].Facultad + "</td>"
            +	"<td>" + alumno.alumno[i].Campus + "</td>"
            +	"</tr>"
    }
}