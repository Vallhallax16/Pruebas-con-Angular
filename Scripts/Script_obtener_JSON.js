function Regresar_JSON()
{
    let txt_json = '{' +
        '"alumno": [' +
        '{' +
        '"Nombre": "Alejandro",' +
        '"Ap_pat": "Pérez",' +
        '"Ap_mat": "Martínez",' +
        '"Clave": "OUZ9929",' +
        '"Telefono": "55-5512-9526",' +
        '"Correo": "alejandro.pérez.50@example.com",' +
        '"Sexo": "Masculino",' +
        '"Fecha": "1980-04-08",' +
        '"Facultad": "Negocios",' +
        '"Campus": "1"' +
        '},' +
        '{' +
        '"Nombre": "María",' +
        '"Ap_pat": "González",' +
        '"Ap_mat": "Rodríguez",' +
        '"Clave": "GXU7690",' +
        '"Telefono": "55-8800-9234",' +
        '"Correo": "maría.gonzález.82@example.com",' +
        '"Sexo": "Masculino",' +
        '"Fecha": "1991-11-20",' +
        '"Facultad": "Negocios",' +
        '"Campus": "2"' +
        '},' +
        '{' +
        '"Nombre": "Guadalupe",' +
        '"Ap_pat": "Martínez",' +
        '"Ap_mat": "Rodríguez",' +
        '"Clave": "XOO9689",' +
        '"Telefono": "55-7334-4973",' +
        '"Correo": "guadalupe.martínez.44@example.com",' +
        '"Sexo": "Masculino",' +
        '"Fecha": "1992-08-17",' +
        '"Facultad": "Humanidades",' +
        '"Campus": "1"' +
        '},' +
        '{' +
        '"Nombre": "Camila",' +
        '"Ap_pat": "Cruz",' +
        '"Ap_mat": "González",' +
        '"Clave": "LAZ7511",' +
        '"Telefono": "55-1242-8125",' +
        '"Correo": "camila.cruz.93@example.com",' +
        '"Sexo": "Femenino",' +
        '"Fecha": "1998-01-16",' +
        '"Facultad": "Derecho",' +
        '"Campus": "1"' +
        '},' +
        '{' +
        '"Nombre": "Alejandro",' +
        '"Ap_pat": "Pérez",' +
        '"Ap_mat": "López",' +
        '"Clave": "PZG7945",' +
        '"Telefono": "55-7940-1519",' +
        '"Correo": "alejandro.pérez.13@example.com",' +
        '"Sexo": "Femenino",' +
        '"Fecha": "2000-12-17",' +
        '"Facultad": "Humanidades",' +
        '"Campus": "1"' +
        '},' +
        '{' +
        '"Nombre": "Luis",' +
        '"Ap_pat": "Ramírez",' +
        '"Ap_mat": "Ramírez",' +
        '"Clave": "LNR7631",' +
        '"Telefono": "55-4556-3819",' +
        '"Correo": "luis.ramírez.61@example.com",' +
        '"Sexo": "Masculino",' +
        '"Fecha": "1988-05-01",' +
        '"Facultad": "Negocios",' +
        '"Campus": "1"' +
        '},' +
        '{' +
        '"Nombre": "Juan",' +
        '"Ap_pat": "Rodríguez",' +
        '"Ap_mat": "Rodríguez",' +
        '"Clave": "BQZ1034",' +
        '"Telefono": "55-6976-5413",' +
        '"Correo": "juan.rodríguez.7@example.com",' +
        '"Sexo": "Femenino",' +
        '"Fecha": "1981-11-01",' +
        '"Facultad": "Humanidades",' +
        '"Campus": "2"' +
        '},' +
        '{' +
        '"Nombre": "María",' +
        '"Ap_pat": "López",' +
        '"Ap_mat": "Martínez",' +
        '"Clave": "VWW5173",' +
        '"Telefono": "55-1329-7243",' +
        '"Correo": "maría.lópez.65@example.com",' +
        '"Sexo": "Femenino",' +
        '"Fecha": "2000-12-05",' +
        '"Facultad": "Medicina",' +
        '"Campus": "1"' +
        '},' +
        '{' +
        '"Nombre": "Valentina",' +
        '"Ap_pat": "Martínez",' +
        '"Ap_mat": "Martínez",' +
        '"Clave": "MLQ5625",' +
        '"Telefono": "55-7242-6471",' +
        '"Correo": "valentina.martínez.76@example.com",' +
        '"Sexo": "Masculino",' +
        '"Fecha": "2004-01-17",' +
        '"Facultad": "Derecho",' +
        '"Campus": "1"' +
        '},' +
        '{' +
        '"Nombre": "Miguel",' +
        '"Ap_pat": "García",' +
        '"Ap_mat": "Rodríguez",' +
        '"Clave": "TOS7843",' +
        '"Telefono": "55-7372-5530",' +
        '"Correo": "miguel.garcía.58@example.com",' +
        '"Sexo": "Masculino",' +
        '"Fecha": "1989-09-17",' +
        '"Facultad": "Derecho",' +
        '"Campus": "2"' +
        '}' +
        ']' +
        '}';

    let json;

    if(JSON_lleno && !XML_en_uso)
    {
        json = nuevo_JSON;
    }
    else
    {
        json = JSON.parse(txt_json);
    }

    return json;
}