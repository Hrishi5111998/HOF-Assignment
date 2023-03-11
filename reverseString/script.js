
const input = "hello javascript"

setTimeout(function() {
 
    let reversedString = input.split("").reverse().join("")
    
    console.log(reversedString)
}, 2000)
