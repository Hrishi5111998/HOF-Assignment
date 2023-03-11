let expression = /^https:\/\/www.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/

const prompt = require('prompt-sync')()
let check = prompt('Enter linkedIn Profile URL: ')

if(expression.test(check)){
    console.log("successfully matched")
}else{
    console.log("not match")
}