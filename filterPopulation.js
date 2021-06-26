var raw = new XMLHttpRequest();
raw.open("GET","https://restcountries.eu/rest/v2/all");
raw.onload = function(){
  var data = JSON.parse(this.response);
  var a = data.filter( (el)=> el.population < 200000 )
  console.log(a);
}
raw.send();