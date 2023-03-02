async function change() {
    let btcToEur = await fetch ('https://data.binance.com/api/v3/ticker/24hr').then((response)=>response.json()).then((data)=>data[689].lastPrice);
    let EURtoILS = await fetch ('https://api.exchangerate.host/latest').then((response)=>response.json()).then((data)=>data.rates.ILS);   
    let colculate = btcToEur * EURtoILS;
    pirntResultToHTML (colculate);   
} 
change(); 

function pirntResultToHTML(result){
    let screen = document.getElementById('screen');
       screen.innerText =  (`BTC to NIS:
        ${result}`) ;
    setTimeout(change, 15000); 
}
