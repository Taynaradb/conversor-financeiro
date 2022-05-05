$( "#converte" ).click(function(){
    let reais = document.querySelector('#reais').value;
    let dolar = 0;
    let api = 'http://economia.awesomeapi.com.br/last/USD';

    $.ajax({
        type: "get",
        url: api,
        success: (function(retorno){
            dolar = retorno.USDBRL.ask;
            valorConvertido = reais / dolar;
            document.querySelector('#dolares').innerHTML = "$ " + Math.round(valorConvertido).toFixed(2) + " USD";
        })
    });
});

   
/*$( "#converte" ).click(function(){
    let api = 'https://economia.awesomeapi.com.br/last/USD'

    $.ajax({
        type: "GET",
        url: api,
        success: (function(){
            console.log("DEU CERTO")
        }),
        beforeSend:(function(){
            console.log("Processando")
        })
    })

    let reais = document.querySelector('#reais').value
    let dolar = 4.92
    valorConvertido = reais / dolar
    document.querySelector('#dolares').innerHTML = valorConvertido
})*/
