function btn() {
  var x = document.getElementById("number").value;

  let hasil = null;
  if( x % 3 === 0 && x % 5 === 0) {
    hasil = "FizzBuzz!";
  }else if ( x % 3 === 0 || x % 5 === 0) {
    if (x % 3 === 0) {
      hasil = "Buzz!"
    }else{
      hasil = "Fizz!"
    }
  }else{
    hasil = x;
  }
  document.getElementById("demo").innerHTML = hasil;
}