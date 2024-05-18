#! /usr/bin/env node
import inquirer from "inquirer";

// User input
let userInput = await inquirer.prompt({
    name:"num1",
    type:"number",
    message:"Please Enter Your Number",
    validate: (input) =>{
        const num2 = parseInt(input)
        if(isNaN(num2)){
            return "Please enter the numeric number"
        }else{
            return true
        }
    }
})

//user input value
let userNum:number = userInput.num1

// logic for table
for(let i:number = 1 ; i<= 12 ; i++){
    let result:number = userNum * i
    console.log(`${userNum} x ${i} = ${result}`)
}