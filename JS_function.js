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

function addThem(a, B){
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
if (x== rand) {
    console.log("success");
} else {
    console.log("try again");
    console.log(rand);
    console.log(x);
}
}