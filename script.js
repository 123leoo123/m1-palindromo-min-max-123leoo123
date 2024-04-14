function isPalindrome(text){
   const cleanText = text.toLowerCase().replace(/[^a-z0-9]/g, '');
   const length = cleanText.length; 

    for(let i = 0; i <text.length / 2; i++){
          if(cleanText[i] !== cleanText[length - 1 - i]){
            return false
          }   
    }
    return true
}

function arrayMaxMin(arr){
let maiorNumero = arr[1];
let menorNumero = arr[1];

  for(let i = 0; i <arr.length; i++){
    if(arr[i] > maiorNumero){
      maiorNumero = arr[i];
    }
    if(arr[i] < menorNumero){
      menorNumero = arr[i];
    }
  }
  return [menorNumero , maiorNumero];
}
