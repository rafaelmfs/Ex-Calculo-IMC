function funcaoGeral(){
    const formulario = document.querySelector("#formulario");
    const resultado = document.querySelector("#resultado-calculo");

    formulario.addEventListener("submit", receberEventoForm);

    function receberEventoForm(evento){
        evento.preventDefault();

        const peso = formulario.querySelector("#peso");
        const altura = formulario.querySelector("#altura");

        validarDados(peso, altura);
    }

    function validarDados(peso, altura){
        const valorPeso = Number(peso.value);
        const valorAltura = Number(altura.value);
        let valorInvalido = resultado.querySelector(".resultado-invalido");

        if(valorPeso === 0 || valorAltura === 0){
            valorInvalido.innerHTML = `<p>Campos em branco.</p>`;
            valorInvalido.style.display = "block";
        }else if(Number.isNaN(valorPeso) || valorPeso<=0){
            valorInvalido.innerHTML = `<p>Peso Inválido.</p>`;
            valorInvalido.style.display = "block";
        }else if(Number.isNaN(valorAltura) || valorAltura<=0){
            valorInvalido.innerHTML = `<p>Altura Inválida.</p>`;
            valorInvalido.style.display = "block";
        }else{
            valorInvalido.style.display = "none";
            calculoIMC(valorPeso, valorAltura);
        }
    }

    function calculoIMC(peso, altura){
        let imc = peso/(altura**2);
        classificarIMC(imc);
    }


    function classificarIMC(imc){
        let resultadoCalculo = resultado.querySelector(".resultado-valido");
        if(imc <= 18.5){
            resultadoCalculo.innerHTML = `<p>IMC: ${imc.toFixed(1)} - Abaixo do peso!</p>`; 
            resultadoCalculo.style.display = "block";
        }else if(imc > 18.5 && imc < 25){
            resultadoCalculo.innerHTML = `<p>IMC: ${imc.toFixed(1)} - Peso normal!</p>`; 
            resultadoCalculo.style.display = "block";
        }else if(imc >= 25 && imc < 30){
            resultadoCalculo.innerHTML = `<p>IMC: ${imc.toFixed(1)} - Sobrepeso!</p>`; 
            resultadoCalculo.style.display = "block";
        }else if(imc >= 30 && imc < 35){
            resultadoCalculo.innerHTML = `<p>IMC: ${imc.toFixed(1)} - Obesidade grau 1!</p>`; 
            resultadoCalculo.style.display = "block";
        }else if(imc >=35 && imc < 40){
            resultadoCalculo.innerHTML = `<p>IMC: ${imc.toFixed(1)} - Obesidade grau 2!</p>`; 
            resultadoCalculo.style.display = "block";
        }else if(imc >= 40){
            resultadoCalculo.innerHTML = `<p>IMC: ${imc.toFixed(1)} - Obesidade grau 3!</p>`; 
            resultadoCalculo.style.display = "block";
        }
    }

}

funcaoGeral();

