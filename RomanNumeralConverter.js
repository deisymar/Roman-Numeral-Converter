function convertToRoman(num) {
    let result="";
    let numb=num;
    const roman = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};
  
  for(var i in roman){ 
    while(numb>=roman[i]){
        //console.log(i);
        result += i;      
        numb-=roman[i];      
     }  
  }
  console.log(result);
   return result;
  }
  
  convertToRoman(36);
  convertToRoman(798);
  convertToRoman(3999);