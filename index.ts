#! usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to Number Guessing Game:")
let a:number=Math.floor(Math.random()*7+1)
while(true){
    const input=await inquirer.prompt
    ({name: "guess", type:"number",
    message:"Enter your guess number, between 1 to 8",})

    let ans:number= input.guess
if (a==ans)
{console.log("Congratulation! your guess number is correct")    
break;}
else{console.log("Sorry! try again")}
}