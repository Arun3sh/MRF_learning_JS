var xhr = new XMLHttpRequest();
xhr.open("GET","https://restcountries.eu/rest/v2/all");
xhr.send();
xhr.onload = function(){
  var data = JSON.parse(this.response);
  var c = data.map((el)=> el.population).reduce((a,b)=> a+b ,0);
  console.log(c);
 
}
