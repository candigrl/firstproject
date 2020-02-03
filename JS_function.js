var grass = "for Cows ";
    grass = grass + "for goats";
console.log(grass);
var number1 = 1;
var number2 = 2;
console.log(number1 + number2);
console.log(number1 * number2);
var select = true;
console.log(number2 + select);

// conditional

var counter = 2;
console.log(counter);
counter += 5;
console.log(counter);
counter *= 2;
console.log(counter);
counter %= 3; // 2
counter %= 2; // 0
console.log(counter);
if (counter % 2==0){
    console.log("true");
} 
else{
    console.log("false");
}
// if counter % by 2= 0 correct
if (counter !=2346 && counter !=43){
    console.log("false");
}
if (counter !=54 || counter !=65){
    console.log("false");
}
if (counter !=2754 && counter !=2754){
     console.log("false");
    }
  if (counter !=1956 || counter !=1956){

  }
  if (counter !=2040){
      if (counter !=1012){
          if (counter !=1111);}
          if (counter!=2040 && 1012 && 1111);}
          console.log("true");


var counter =1;
// counter = 1;
console.log(counter);

while (counter<=50) {
    console.log(counter);
    counter += 2;
}

function crazy(start, end) {
    for(var i=start; i <=end; i++){
        console.log(i);
    }
}

crazy(6, 15);
(function (){
    console.log("prissie");
})();
function randomCheck(){
    var userNum = document.getElementById('userInput').value;
var random = 2;
if (random == userNum){
    console.log("success"); 

}else {
    console.log("wrong");
}
}

var count = 15;
var doCount = 15;

function print(){
    while(count > 10){
        console.log("test");
        count--;
   }
   do{
       console.log("hiiiii");
       doCount--;
   }    
   while(doCount > 20);    
      count = 200;
}
console.log(count);

function prettyPrint(){
    for(var i = 0; i<10; i++){
        console.log("more testing");
    }
}

function
printName(firstName,lastName){
}

function addThem(a, b){
    return a * b;
}
 
function myFunction(name) {
return "Hello " + name;
}

var result = addThem(1,4);
console.log(myFunction("morgan"));
console.log(result);

(function(){
    console.log("fancy");
})();

function randomCheck() {
    var x = document.getElementById('userInput').value;
    var rand = Math.round(Math.random*10);
if (x== rand) {
    console.log("success");
    console.log(rand);
    console.log(x);
} else {
    console.log("try again");
    console.log(rand);
    console.log(x);
}
}