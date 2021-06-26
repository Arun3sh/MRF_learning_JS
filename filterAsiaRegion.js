var xhr = new XMLHttpRequest();
xhr.open("GET","https://restcountries.eu/rest/v2/all")
xhr.onload = function(){
  var data = JSON.parse(this.response);
  var a = data.filter((el) => el.region.toLowerCase() === "asia")
  console.log(a);
};
xhr.send();
