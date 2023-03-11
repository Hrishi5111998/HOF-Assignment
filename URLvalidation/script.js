let expression = /https?:\/\/(www\.)?[-a-zA-Z-0-9@#$%^&.//*:+~=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@#$%//^&*+=~.]*)?/gi

const prompt = require("prompt-sync")()
let check = prompt('Enter URL: ')

// let regex = new RegExp(expression)

if(expression.test(check)){
    console.log("successfully matched")    
    }else{
        console.log("not match")
    }

