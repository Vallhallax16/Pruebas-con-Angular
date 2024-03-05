function Mostrar_tabla()
{
    let tabla = document.getElementById("tabla_de_alumnos");
    let renglones = tabla.getElementsByTagName("tr");

    if(renglones.length != 0)
    {
        let limite = renglones.length;

        for(let i = 0; i < limite; i++)
        {
            tabla.deleteRow(0);
        }
    }

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

    let xmlDoc = Regresar_XML()

    let xml_parseado = xmlDoc.getElementsByTagName("alumno");

    for(var i = 0; i < xml_parseado.length; i++)
    {
        tabla.innerHTML += "<tr>"
            +	"<td>"
            +		xml_parseado[i].childNodes[0].childNodes[0].nodeValue
            +	"</td>"
            +	"<td>"
            +		xml_parseado[i].childNodes[1].childNodes[0].nodeValue
            +	"</td>"
            +	"<td>"
            +		xml_parseado[i].childNodes[2].childNodes[0].nodeValue
            +	"</td>"
            +	"<td>"
            +		xml_parseado[i].childNodes[3].childNodes[0].nodeValue
            +	"</td>"
            +	"<td>"
            +		xml_parseado[i].childNodes[4].childNodes[0].nodeValue
            +	"</td>"
            +	"<td>"
            +		xml_parseado[i].childNodes[5].childNodes[0].nodeValue
            +	"</td>"
            +	"<td>"
            +		xml_parseado[i].childNodes[6].childNodes[0].nodeValue
            +	"</td>"
            +	"<td>"
            +		xml_parseado[i].childNodes[7].childNodes[0].nodeValue
            +	"</td>"
            +	"<td>"
            +		xml_parseado[i].childNodes[8].childNodes[0].nodeValue
            +	"</td>"
            +	"<td>"
            +		xml_parseado[i].childNodes[9].childNodes[0].nodeValue
            +	"</td>"
            +	"</tr>"
    }

    tabla.innerHTML += "</tbody>";
    tabla.style.textAlign = "center";
}