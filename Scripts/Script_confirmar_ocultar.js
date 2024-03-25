function Confirmar_y_ocultar(solo_ocultar)
{
    let tiempo = 3500;
    let alerta_editado = document.getElementById("Alerta_alumno_editado_edit");
    let div_editador = document.getElementById("div_campos_editables");

    document.getElementById("Alerta_alumno_encontrado_edit").style.display = "none";

    if(!solo_ocultar)
    {
        alerta_editado.style.display = "block";
    }
    else
    {
        tiempo = 1;
        posicion_modificadora = -1;
    }

    setTimeout(() =>{
        let campos_editables = document.getElementsByClassName("EDIT");

        for(let i = 0; i < 9; i++)
        {
            if( i == 5 || i == 8)
            {
                let inputs = campos_editables[i].getElementsByTagName("input");

                for(let k = 0; k < inputs.length; k++)
                {
                    inputs[k].checked = false;
                }
            }
            else
            {
                campos_editables[i].value = "";
            }
        }

        document.getElementById("id_a_editar").value = "";

        div_editador.style.display = "none";
        alerta_editado.style.display = "none";

    },tiempo);
}