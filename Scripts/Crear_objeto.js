function Armar_objeto()
{
    //Se obtiene el scope de la aplicacion
    let scope_inicial = angular.element(document.getElementById("cuerpo_angular")).scope()

    let campus_codigo = []

    //console.log("Los campus son 1,2,3: " + scope_inicial.campus1 + scope_inicial.campus2 + scope_inicial.campus3);

    if(Boolean(scope_inicial.campus1))
    {
        campus_codigo.push("1");
    }
    else if(Boolean(scope_inicial.campus2))
    {
        campus_codigo.push("2");
    }
    else if(Boolean(scope_inicial.campus3))
    {
        campus_codigo.push("3");
    }
    else
    {
        campus_codigo.push("No se seleccionó un campus");
    }

    //let exp_reg = /^T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;

    let objeto_json = {nombre: scope_inicial.name,
                            apellido_paterno: scope_inicial.ap_pat,
                            apellido_materno: scope_inicial.ap_mat,
                            telefono: scope_inicial.telefono,
                            email: scope_inicial.email,
                            clave_ulsa: scope_inicial.clave,
                            sexo: scope_inicial.sexo,
                            fecha_nacimiento: document.getElementById("fecha").value,
                            facultad: scope_inicial.facultad,
                            campus: campus_codigo,
                            semestre: scope_inicial.semestre,
                            direccion: scope_inicial.direccion,
                            expectativas: scope_inicial.expectativas}

    return JSON.stringify(objeto_json);
}