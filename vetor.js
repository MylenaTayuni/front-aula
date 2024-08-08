var cidade = "Curitiba";
var cidade = "Colombo";

// estrutura de dados 
//vetor ou array 

var lista = ["curitiva", "Colombo", "Araucaria"]

console.log(lista[1]);

lista.push("pinhais") //  adiciona no final 
lista.unshift("apucarana") // adiciona no inicio 
lista.pop("pinhais") //remove elementos
lista.shift("apucarana") //remove da posição ultimo ou primeiro 
lista.sort() // colocar em ordem alfabetica

// loops - laços de repetição 

var ini = 0;
var fim = lista.length - 1;
var lista = ["curitiva", "Colombo", "Araucaria"]
while (ini <= fim)
{

    console.log( lista[uni]);
    ini = ini + 1;
}

var lista = ["curitiva", "Colombo", "Araucaria"]
var ini = lista.length - 1;
var fim = 0
while (ini >= fim)
    {
    
        console.log( lista[ini]);
        ini = ini - 1;
    }