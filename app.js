console.log ('aplicacion calculadora');

function sumar(){

    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if(isNaN(resultado))
        resultado = 'Por favor escriba un valor numerico en los espacios requeridos';
    document.getElementById('resultado').innerHTML = `resultado: ${resultado}`;
    console.log (`resultado: ${resultado}`);

}
