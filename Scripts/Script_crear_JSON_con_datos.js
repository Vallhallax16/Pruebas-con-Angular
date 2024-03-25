function Anexar_nuevo_registro_JSON(json)
{
    if(json != undefined)
    {
        let JSON_existente = Regresar_JSON()
        let objeto = {
            Nombre: json.nombre,
            Ap_pat: json.apellido_paterno,
            Ap_mat: json.apellido_materno,
            Clave: json.clave_ulsa,
            Telefono: json.telefono,
            Correo: json.email,
            Sexo: json.sexo,
            Fecha: json.fecha_nacimiento,
            Facultad: json.facultad,
            Campus: json.campus
        }

        JSON_existente.alumno.push(objeto);

        JSON_lleno = true;
        nuevo_JSON = JSON_existente;
    }
}