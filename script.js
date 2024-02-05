




function gerarNumero() {

    const min = Math.ceil(document.querySelector(".valorMinimo").value)
    const max = Math.floor(document.querySelector(".valorMaximo").value)


    if (min != '' && max != '') {
        result = Math.floor(Math.random() * (max - min)) + min;
        alert("Valor minimo: " + min + "\n" + "Valor maximo: " + max + "\nResultado: " + result);
    } else {
        alert("Coloque valores nos dois campos!")
    }


    console.log(min, max)
}