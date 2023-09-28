// 2 - Números primos
//     -- Criar uma função em sua linguagem preferida. 
// A função deve receber um numero N > 1 (validar o input), 
// e retornar todos os números primos até o numero N. EX. p(2) = [2]; p(3) = [2, 3]; p(10) = [2, 3, 5, 7];
//     --- Criar uma função recursiva que resolva p
//     --- Criar uma função linear que resolva p

function numeroPrimo(num){
    if(!isNaN(num))
    for(let i = 2; i <= num; i++){
         if(validarNumerosPrimos(i)){
          console.log(i)
         }
    }
   }
 
   function validarNumerosPrimos(num){
    for(let i = 2; i< num; i++){
       if(num % i === 0)return false
    }
    return true
   }
 
   numeroPrimo(10)