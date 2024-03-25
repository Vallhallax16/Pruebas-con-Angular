function Regresar_XML()
{
let txt_xml = "<Alumnos>" +
    "<alumno>" +
        "<Nombre>Alejandro</Nombre>" +
        "<Ap_pat>Pérez</Ap_pat>" +
        "<Ap_mat>Martínez</Ap_mat>" +
        "<Clave>OUZ9929</Clave>" +
        "<Telefono>55-5512-9526</Telefono>" +
        "<Correo>alejandro.pérez.50@example.com</Correo>" +
        "<Sexo>Masculino</Sexo>" +
        "<Fecha>1980-04-08</Fecha>" +
        "<Facultad>Negocios</Facultad>" +
        "<Campus>1</Campus>" +
    "</alumno>" +
    "<alumno>" +
        "<Nombre>María</Nombre>" +
        "<Ap_pat>González</Ap_pat>" +
        "<Ap_mat>Rodríguez</Ap_mat>" +
        "<Clave>GXU7690</Clave>" +
        "<Telefono>55-8800-9234</Telefono>" +
        "<Correo>maría.gonzález.82@example.com</Correo>" +
        "<Sexo>Masculino</Sexo>" +
        "<Fecha>1991-11-20</Fecha>" +
        "<Facultad>Negocios</Facultad>" +
        "<Campus>2</Campus>" +
    "</alumno>" +
    "<alumno>" +
        "<Nombre>Guadalupe</Nombre>" +
        "<Ap_pat>Martínez</Ap_pat>" +
        "<Ap_mat>Rodríguez</Ap_mat>" +
        "<Clave>XOO9689</Clave>" +
        "<Telefono>55-7334-4973</Telefono>" +
        "<Correo>guadalupe.martínez.44@example.com</Correo>" +
        "<Sexo>Masculino</Sexo>" +
        "<Fecha>1992-08-17</Fecha>" +
        "<Facultad>Humanidades</Facultad>" +
        "<Campus>1</Campus>" +
    "</alumno>" +
    "<alumno>" +
        "<Nombre>Camila</Nombre>" +
        "<Ap_pat>Cruz</Ap_pat>" +
        "<Ap_mat>González</Ap_mat>" +
        "<Clave>LAZ7511</Clave>" +
        "<Telefono>55-1242-8125</Telefono>" +
        "<Correo>camila.cruz.93@example.com</Correo>" +
        "<Sexo>Femenino</Sexo>" +
        "<Fecha>1998-01-16</Fecha>" +
        "<Facultad>Derecho</Facultad>" +
        "<Campus>1</Campus>" +
    "</alumno>" +
    "<alumno>" +
        "<Nombre>Alejandro</Nombre>" +
        "<Ap_pat>Pérez</Ap_pat>" +
        "<Ap_mat>López</Ap_mat>" +
        "<Clave>PZG7945</Clave>" +
        "<Telefono>55-7940-1519</Telefono>" +
        "<Correo>alejandro.pérez.13@example.com</Correo>" +
        "<Sexo>Femenino</Sexo>" +
        "<Fecha>2000-12-17</Fecha>" +
        "<Facultad>Humanidades</Facultad>" +
        "<Campus>1</Campus>" +
    "</alumno>" +
    "<alumno>" +
        "<Nombre>Luis</Nombre>" +
        "<Ap_pat>Ramírez</Ap_pat>" +
        "<Ap_mat>Ramírez</Ap_mat>" +
        "<Clave>LNR7631</Clave>" +
        "<Telefono>55-4556-3819</Telefono>" +
        "<Correo>luis.ramírez.61@example.com</Correo>" +
        "<Sexo>Masculino</Sexo>" +
        "<Fecha>1988-05-01</Fecha>" +
        "<Facultad>Negocios</Facultad>" +
        "<Campus>1</Campus>" +
    "</alumno>" +
    "<alumno>" +
        "<Nombre>Juan</Nombre>" +
        "<Ap_pat>Rodríguez</Ap_pat>" +
        "<Ap_mat>Rodríguez</Ap_mat>" +
        "<Clave>BQZ1034</Clave>" +
        "<Telefono>55-6976-5413</Telefono>" +
        "<Correo>juan.rodríguez.7@example.com</Correo>" +
        "<Sexo>Femenino</Sexo>" +
        "<Fecha>1981-11-01</Fecha>" +
        "<Facultad>Humanidades</Facultad>" +
        "<Campus>2</Campus>" +
    "</alumno>" +
    "<alumno>" +
        "<Nombre>María</Nombre>" +
        "<Ap_pat>López</Ap_pat>" +
        "<Ap_mat>Martínez</Ap_mat>" +
        "<Clave>VWW5173</Clave>" +
        "<Telefono>55-1329-7243</Telefono>" +
        "<Correo>maría.lópez.65@example.com</Correo>" +
        "<Sexo>Femenino</Sexo>" +
        "<Fecha>2000-12-05</Fecha>" +
        "<Facultad>Medicina</Facultad>" +
        "<Campus>1</Campus>" +
    "</alumno>" +
    "<alumno>" +
        "<Nombre>Valentina</Nombre>" +
        "<Ap_pat>Martínez</Ap_pat>" +
        "<Ap_mat>Martínez</Ap_mat>" +
        "<Clave>MLQ5625</Clave>" +
        "<Telefono>55-7242-6471</Telefono>" +
        "<Correo>valentina.martínez.76@example.com</Correo>" +
        "<Sexo>Masculino</Sexo>" +
        "<Fecha>2004-01-17</Fecha>" +
        "<Facultad>Derecho</Facultad>" +
        "<Campus>1</Campus>" +
    "</alumno>" +
    "<alumno>" +
        "<Nombre>Miguel</Nombre>" +
        "<Ap_pat>García</Ap_pat>" +
        "<Ap_mat>Rodríguez</Ap_mat>" +
        "<Clave>TOS7843</Clave>" +
        "<Telefono>55-7372-5530</Telefono>" +
        "<Correo>miguel.garcía.58@example.com</Correo>" +
        "<Sexo>Masculino</Sexo>" +
        "<Fecha>1989-09-17</Fecha>" +
        "<Facultad>Derecho</Facultad>" +
        "<Campus>2</Campus>" +
    "</alumno>" +
    "</Alumnos>";

    let xml;

    if(XML_lleno == true)
    {
        xml = nuevo_XML;
    }
    else
    {
        let parser = new DOMParser()
        xml = parser.parseFromString(txt_xml,"text/xml");
    }
    return xml;
}