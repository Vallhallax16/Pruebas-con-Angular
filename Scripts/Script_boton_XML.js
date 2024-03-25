function Des_activar_XML()
{
    let contenedor_boton = document.getElementById("contenedor_boton_selector");
    let boton_movible = document.getElementById("boton_movible");
    let txt_on_off = document.getElementById("Txt_on_off");
    let valores = [];

    if(GET_XML_en_uso(txt_on_off.innerText))
    {
        valores.push("OFF");
        valores.push("translateX(85%)");
        valores.push("transparent");

        XML_en_uso = false;
    }
    else
    {
        valores.push("ON");
        valores.push("translateX(5%)");
        valores.push("white");

        XML_en_uso = true;
    }

    txt_on_off.innerText = valores[0];

    boton_movible.style.transform = valores[1];

    contenedor_boton.style.background = valores[2];
}

function GET_XML_en_uso(txt_on_off)
{
    if(txt_on_off == "ON")
    {
        return true;
    }
    else
    {
        return false;
    }
}