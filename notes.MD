#event emitters  
#streams:
USE STREAMS, if you dont use stream you are overloading memory for not good reason  
  readstream instead of readfile  
#clusters:
optimze node to work with full cpu power  

react - to desribe the user inferface
reactdom - is to take that "user interface" and mount it in the browser
reactdom - just for the browser
if you use for example reactive native you dont need reactdom


#this

w kodzie

function fun() {
  return this;
}

fun();

standardwo this wskazuje obket hosta czyli
w przegladardce: window
w nodejs: module.exports

w trybie "use strict" ktory jest domyslny w ES2015(import/export/class)
this = undefined

###################

przy takim wywolaniu:

var o = {
  a: "o object",
  method: function() {
    return this;
  }
};

o.method(); // === o

this wskazuje na obekt bedacy bezposrednio po lewej stronie kropki


przekazanie referencje to nie wywolanie! :
fetch('https://example.com/endpoint').then(o.method); // === window
fetch wywoule funkcje w sposob samodzielny czyli przez referencje
function insideThen(fn) {
  fn();
}