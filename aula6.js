// aula 6

        function oi()
        {

            var entrada = valor.value;
            saida.value = entrada;

        }

// exercícios 
// 1- devolva o valor digitado de forma inversa 
// edir - ride 

function ex1 ()
{


}

// 2- coloque o nome todo em maiusculas 

function ex2 ()
{
    var entrada = valor.value;
    saida.value = entrada.toUpperCase();

}

// 3- coloque a primeira letra em maiuscula 

function ex3 ()
{
    var entrada = valor.value;
    var letra = entrada.charAt(0);
    var resto = entrada.substr(1);
    saida.value = letra.toUpperCase() + resto.toLowerCase();
    
}

// 4- soma o num1 + num2

function ex4 ()
{
    var n1 = num1.value;
    var n2 = num2.value;
    saida.value = parseInt(n1) + parseInt(n2)
}r

// 5- calculo imc
// pedir peso e altura
// IMC = peso/ (altura x altura)
// + soma - subtração / divisão * mutiplicação

function ex5 ()
{
    var n1 = num1.value;
    var n2 = num2.value;

    n1 = parseFloat(n1)
    n2 = parseFloat(n2)

    var res = n1 / (n2 * n2);

    saida.value = res;
}


// 6- pegue dois numeros e diga qual deles é o maior 

function ex6 ()
{
    var n1 = num1.value;
    var n2 = num2.value;

    n1 = parseFloat(n1)
    n2 = parseFloat(n2)

    if (n1 > n2)
    {

        saida.value = n1;
    }   else
    {
        saida.value = n2
    }  
}

// 7- pegue a idade e diga se é idoso , criança ou adulto 
// adulto +18
// idoso +65
// criança 17

function ex7 ()
{
    var idade = valor.value;

    n1 = parseFloat(n1)
    n2 = parseFloat(n2)

    if (idade >= 65)
    {
        saida.value = "idoso";
    }   else if (idade > 18)
    {
        saida.value = "adulto"
    } else 
    {
        saida.value = "criança"
    }
    