
const bntCalculo = document.querySelector("#bnt")

bntCalculo.addEventListener('click' , ()=>{

    const inputPeso = Number(document.querySelector("#peso").value)
    const inputAltura = Number(document.querySelector("#altura").value)

    if(inputPeso == "" || inputAltura == "") {
        alert("Informe os dois valores!")
    }else {

        const total = inputPeso/ (inputAltura * inputAltura)
        const imcReal = total.toFixed(2)
        
        apresentarIMC(imcReal)
    
        document.querySelector("#peso").value = ""
        document.querySelector("#altura").value = ""    
}})

function apresentarIMC(imcUsar){
    saida.classList.remove("hide")

    const result = document.createElement("p");
    const saidaFim = document.createTextNode("IMC = " + imcUsar);
    result.appendChild(saidaFim);
    document.getElementById("saida").appendChild(result)
}