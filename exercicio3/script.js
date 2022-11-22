// parte 01

// let a = 5 > 20 && 5 < 20
// let b = 5 === 5 || 5 === "5"
// let c = !20 > 50
// let d = !20 > 50 || 50 > 60

// console.log(a, b, c, d)




// Parte 02

const salario = 2000                      // salario + 10% comissao do total de vendas do mes
const valorAuxilioCreche = 45.50          // tem 2 filhos
const comissao = 0.1                      // comissao de 10%
const descontoInss = 0.05
const vendaJaneiro = 5784.50
const vendasFevereiro = 3418.41
const vendasMarco = 4124.10
const vendasAbril = 1874.00
const vendasMaio = 7000.00
const vendasJunho = 9450.00

let salarioMaisAuxilioCreche = salario + (2 * valorAuxilioCreche)
console.log("O salário fixo mais o auxílio creche =", salarioMaisAuxilioCreche)

let comissaoDeJaneiro = vendaJaneiro * comissao
console.log("O valor da comissao de janeiro é = ", comissaoDeJaneiro)

let appdescInss = salarioMaisAuxilioCreche + comissaoDeJaneiro
appdescInss = appdescInss * -descontoInss
console.log("O valor de desconsto de inss sera =", appdescInss.toFixed(2))

let salJaneiro = salarioMaisAuxilioCreche + (vendaJaneiro * comissao)
let descontar = salJaneiro * -descontoInss
salJaneiro = salJaneiro + descontar
console.log("O salario de Janeiro=", salJaneiro.toFixed(2))


let salFevereiro = salarioMaisAuxilioCreche + (vendasFevereiro * comissao)
let descontar2 = salFevereiro * -descontoInss
salFevereiro = salFevereiro + descontar
console.log("O salario de Fevereiro=",salFevereiro.toFixed(2))


let salMarco = salarioMaisAuxilioCreche + (vendasMarco* comissao)
let descontar3 = salMarco * -descontoInss
salMarco = salMarco + descontar
console.log("O salario de Marco=",salMarco.toFixed(2))


let salAbril = salarioMaisAuxilioCreche + (vendasMarco* comissao)
let descontar4 = salAbril * -descontoInss
salAbril = salAbril + descontar
console.log("O salario de Abril=",salAbril.toFixed(2))

let salMaio = salarioMaisAuxilioCreche + (vendasMarco* comissao)
let descontar5 = salMaio * -descontoInss
salMaio = salMaio + descontar
console.log("O salario de Maio=",salMaio.toFixed(2))

let salJunho = salarioMaisAuxilioCreche + (vendasMarco* comissao)
let descontar6 = salJunho* -descontoInss
salJunho = salJunho + descontar
console.log("O salario de Junho=",salJunho.toFixed(2))

let media = salJaneiro + salFevereiro + salMarco + salAbril + salMaio + salJunho
media = media / 6
console.log("A media do salario em 6 meses é ", media.toFixed(2))
 

