function Editar_info_alumno()
{
    let alerta_no_enc_edit = document.getElementById("Alerta_alumno_no_encontrado_edit");
    let alerta_enc_edit = document.getElementById("Alerta_alumno_encontrado_edit");
    let div_campos_edit = document.getElementById("div_campos_editables");

    let arreglo_informacion = Buscar_alumno(1)

    if(arreglo_informacion[0])
    {
        Cargar_informacion(arreglo_informacion[1]);

        alerta_enc_edit.style.display = "block";
        div_campos_edit.style.display = "block";
        alerta_no_enc_edit.style.display = "none";
    }
    else
    {
        let clave_erronea = document.getElementById("Clave_erronea_edit");
        clave_erronea.innerText = document.getElementById("id_a_editar").value;

        Confirmar_y_ocultar(true);

        alerta_enc_edit.style.display = "none";
        div_campos_edit.style.display = "none";
        alerta_no_enc_edit.style.display = "block";
    }
}