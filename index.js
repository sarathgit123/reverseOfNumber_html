function reverse() {
    let num = document.getElementById("num").value;
    let reversed=0;
  while(num!=0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }

   let result =  document.getElementById("result");
   result.innerHTML = reversed;
    }