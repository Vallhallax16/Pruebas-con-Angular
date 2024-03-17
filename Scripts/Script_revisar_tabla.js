//Se trabaja únicamente con XML
function Mostrar_tabla()
{
    let tabla = document.getElementById("tabla_de_alumnos");

    Borrar_renglones(tabla);

    Llenar_encabezados(tabla);

    let xmlDoc = Regresar_XML()

    let xml_parseado = xmlDoc.getElementsByTagName("alumno");

    Llenar_tabla(tabla,xml_parseado,0, xml_parseado.length);

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

function Llenar_tabla(tabla,alumno_XML, inicio, fin)
{
    for(let i = inicio; i < fin; i++)
    {
        tabla.innerHTML += "<tr>"
            +	"<td>"
            +		alumno_XML[i].childNodes[0].childNodes[0].nodeValue
            +	"</td>"
            +	"<td>"
            +		alumno_XML[i].childNodes[1].childNodes[0].nodeValue
            +	"</td>"
            +	"<td>"
            +		alumno_XML[i].childNodes[2].childNodes[0].nodeValue
            +	"</td>"
            +	"<td>"
            +		alumno_XML[i].childNodes[3].childNodes[0].nodeValue
            +	"</td>"
            +	"<td>"
            +		alumno_XML[i].childNodes[4].childNodes[0].nodeValue
            +	"</td>"
            +	"<td>"
            +		alumno_XML[i].childNodes[5].childNodes[0].nodeValue
            +	"</td>"
            +	"<td>"
            +		alumno_XML[i].childNodes[6].childNodes[0].nodeValue
            +	"</td>"
            +	"<td>"
            +		alumno_XML[i].childNodes[7].childNodes[0].nodeValue
            +	"</td>"
            +	"<td>"
            +		alumno_XML[i].childNodes[8].childNodes[0].nodeValue
            +	"</td>"
            +	"<td>"
            +		alumno_XML[i].childNodes[9].childNodes[0].nodeValue
            +	"</td>"
            +	"</tr>"
    }
}