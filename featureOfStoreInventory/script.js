let items ={ item1: 120,
             item2: 140,
             item3: 70}
let exchangeRate = 80
 let currencyConvert = Object.keys(items).map(function(item){
    let priceInINR = items[item] * exchangeRate
    return {[item]: priceInINR}
 })
                
 console.log(currencyConvert);