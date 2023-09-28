// 1 - Fibonnaci
//     -- Criar uma função em sua linguagem preferida. 
// A função deve receber um numero N >= 0 (deve validar o input para a função), e retornar o valor correspondente desse número
//  na sequencia fibonnaci. EX. fib(0) =0; fib(1) = 1; fib(2) = 1; fib(3) = 2; fib(5) = 5; fib(6) = 8.
//     --- Criar uma função recursiva que resolva fibonacci
//     --- Criar uma função linear que resolva fibonnaci

function fibonacci(num){
    if(isNaN(num)) return
    let fibonacci = []
    fibonacci[0] = 0
    fibonacci[1] = 1;

    for(let i = 2; i <= num; i++){
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
        console.log(fibonacci)
    }
}
// fibonacci(10)

function fibonacciRecursiva(num){
    if(num <= 0){
        return 0
    }else if(num <= 1){
        return 1
    }else{
        return fibonacciRecursiva(num - 1) + fibonacciRecursiva(num - 2);
    }
}
