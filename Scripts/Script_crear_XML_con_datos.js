function Anexar_nuevo_registro_XML(json)
{
    if(json != undefined)
    {
        let XML_existente = Regresar_XML()

        let tag_Nombre = XML_existente.createElement("Nombre");
        let tag_Ap_pat = XML_existente.createElement("Ap_pat");
        let tag_Ap_mat = XML_existente.createElement("Ap_mat");
        let tag_Clave = XML_existente.createElement("Clave");
        let tag_Telefono = XML_existente.createElement("Telefono");
        let tag_Correo = XML_existente.createElement("Correo");
        let tag_Sexo = XML_existente.createElement("Sexo");
        let tag_Fecha = XML_existente.createElement("Fecha");
        let tag_Facultad = XML_existente.createElement("Facultad");
        let tag_Campus = XML_existente.createElement("Campus");

        let txt_Nombre = XML_existente.createTextNode(json.nombre);
        let txt_Ap_pat = XML_existente.createTextNode(json.apellido_paterno);
        let txt_Ap_mat = XML_existente.createTextNode(json.apellido_materno);
        let txt_Clave = XML_existente.createTextNode(json.clave_ulsa);
        let txt_Telefono = XML_existente.createTextNode(json.telefono);
        let txt_Correo = XML_existente.createTextNode(json.email);
        let txt_Sexo = XML_existente.createTextNode(json.sexo);
        let txt_Fecha = XML_existente.createTextNode(json.fecha_nacimiento);
        let txt_Facultad = XML_existente.createTextNode(json.facultad);
        let txt_Campus = XML_existente.createTextNode(json.campus);

        tag_Nombre.appendChild(txt_Nombre);
        tag_Ap_pat.appendChild(txt_Ap_pat);
        tag_Ap_mat.appendChild(txt_Ap_mat);
        tag_Clave.appendChild(txt_Clave);
        tag_Telefono.appendChild(txt_Telefono);
        tag_Correo.appendChild(txt_Correo);
        tag_Sexo.appendChild(txt_Sexo);
        tag_Fecha.appendChild(txt_Fecha);
        tag_Facultad.appendChild(txt_Facultad);
        tag_Campus.appendChild(txt_Campus);

        let elemento_nuevo = XML_existente.createElement("alumno");
        elemento_nuevo.appendChild(tag_Nombre);
        elemento_nuevo.appendChild(tag_Ap_pat);
        elemento_nuevo.appendChild(tag_Ap_mat);
        elemento_nuevo.appendChild(tag_Clave);
        elemento_nuevo.appendChild(tag_Telefono);
        elemento_nuevo.appendChild(tag_Correo);
        elemento_nuevo.appendChild(tag_Sexo);
        elemento_nuevo.appendChild(tag_Fecha);
        elemento_nuevo.appendChild(tag_Facultad);
        elemento_nuevo.appendChild(tag_Campus);

        XML_existente.getElementsByTagName("Alumnos")[0].appendChild(elemento_nuevo);

        XML_lleno = true;
        nuevo_XML = XML_existente;
    }
}