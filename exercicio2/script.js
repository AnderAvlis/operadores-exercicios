let a = Number(prompt("Escolha um valor para A"))
let b = Number(prompt("Escolha um valor para B"))

console.log("O valor de A=", a, "O valor de B=", b)

let res1 = a > b
let res2 = a === b
let res3 = a % b 
res3 = res3 === 0
let res4 = b % a 
res4 = res4 === 0

console.log("O primeiro numero é maior que segundo?", res1)
console.log("O primeiro numero é igual ao segundo?", res2)
console.log("O primeiro numero é divisível pelo segundo?",res3)
console.log("O segundo numero é divisível pelo primeiro?",res4)


