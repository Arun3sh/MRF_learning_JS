var xhr = new XMLHttpRequest();
xhr.open("GET","https://restcountries.eu/rest/v2/all");

xhr.onload = function(){
  var data = JSON.parse(this.response);
  var a = [];
  var i =0
  data.forEach(e => {

    a[i] ={name: e.name, capital: e.capital, flag: e.flag};
    i++;
  });
  console.log(a);
}

xhr.send();