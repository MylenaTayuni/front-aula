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
}

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
}
    // 8- Faça um Programa que verifique se uma letra digitada é vogal ou consoante.


    function ex8()
    {

            var letra = valor.value;

            if (letra =="a")
        {
            saida.value = "vogal"

        } else if (letra =="e")
        {
            saida.value = "vogal"  
    
        } else if (letra =="i")
        {
            saida.value = "vogal"  
        } else if (letra =="o")
        {
            saida.value = "vogal"  
        } else if (letra =="u")
        {
            saida.value = "vogal"  
        }  
        else {
        saida.value = "consoante"
        }
    }  
    
    // 9- maior ou igual a 7 aprovado / menor que 7 / nota 10 aprovado com distinção 

    function ex9()
    {
        var nota = valor.value;

        if (nota >= 10)
            {
                saida.value = "Aprovado com distinção";

            }   else if (nota >= 7)
            {
                saida.value = "Aprovado"
            } else 
            {
                saida.value = "Reprovado"
            }
    }        


    // função E - P - S

    function soma(n1, n2)
    {
        var resultado = n1 + n2;
        return resultado;
    
    }
// executa a função 
    soma (3, 5)

// 10- faça o fatorial de um número 

function ex10()
{
    var num = prompt ("Digite um número");
    num = parseInt (num);

    while (num > 1) 
    {
        resultado = resultado * num;
        num = num - 1;
    }

    console,log("o fatorial é:" + "resultado");
}

// 11- Faça um programa capaz de gerar a série até o n−ésimo termo.

function ex11()
{
    var num = prompt ("Digite um número");
    num = parseInt (num);

    var n1 = 0;
    var n2 = 1;
    var resultado = 0;

    while (num > 1) 
    {
        resultado = n1 + n2;
        n1 = n2;
        n2 = resultado;

        resposta += " " + resultado;
        
        num -= 1;
    }
        console.log("0" + resposta);
    
}