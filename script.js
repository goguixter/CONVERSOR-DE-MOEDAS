const botaoDeConversao = document.querySelector(".botao-conversor")
const seletorDeMoedasParaConverter = document.querySelector("#moeda-para-converter")


function conversaoDeValores() {
    const valorDoInput = document.querySelector("#input-valor").value
    const valorAConverter = document.querySelector(".valorAConverter")
    const valorConvertido = document.querySelector(".valorCorrigido")
    const valorDolar = 4.87
    const valorDoEuro = 5.34
    const valorDoBitcoin = 206262.23
    const valorDaLibra = 6.19


    if (seletorDeMoedasParaConverter.value == "dolar") {
        valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorDoInput / valorDolar)

    }
    if (seletorDeMoedasParaConverter.value == "euro") {
        valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valorDoInput / valorDoEuro)

    }
    if (seletorDeMoedasParaConverter.value == "libra") {
        valorConvertido.innerHTML = new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "GBP"
        }).format(valorDoInput / valorDoEuro)

    }
    if (seletorDeMoedasParaConverter.value == "bitcoin") {
        valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(valorDoInput / valorDoBitcoin)
    }

    valorAConverter.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valorDoInput)
}

function mudancaDeMoeda() {
    const nomeDaMoeda = document.querySelector("#currencyName")
    const imagemDaMoeda = document.querySelector(".imagem-moeda")

    console.log("trocou de moeda")
    if (seletorDeMoedasParaConverter.value == "dolar") {
        imagemDaMoeda.src = "./assets/dolar.png"
        nomeDaMoeda.innerHTML = "$ USD Dolar Americano"
    }
    if (seletorDeMoedasParaConverter.value == "euro") {
        imagemDaMoeda.src = "./assets/euro.png"
        nomeDaMoeda.innerHTML = "€ EUR EURO"
    }
    if (seletorDeMoedasParaConverter.value == "libra") {
        imagemDaMoeda.src = "./assets/libra.png"
        nomeDaMoeda.innerHTML = "£ GBP Libra Esterlina"
    }
    if (seletorDeMoedasParaConverter.value == "bitcoin") {
        imagemDaMoeda.src = "./assets/bitcoin.png"
        nomeDaMoeda.innerHTML = "₿ BTC Bitcoin"
    }

    conversaoDeValores()
}

seletorDeMoedasParaConverter.addEventListener("change", mudancaDeMoeda)

botaoDeConversao.addEventListener("click", conversaoDeValores)



