var raw = new XMLHttpRequest();
raw.open("GET","https://restcountries.eu/rest/v2/all",true);
raw.send();
raw.onload = function(){
  var data = JSON.parse(this.response);

  console.log("Countries From Asia Continent");
  var a = data.filter( (e) => e.region == "Asia").map( (e) => e.name);
  console.log(a);

  console.log("Countries having Population Less than 2Lakhs");
  var b = data.filter( (el) => el.population < 200000 ).map( (el) => el.name);
  console.log(b);

  console.log("Countries that use USD as Currency")
  var data = JSON.parse(this.response);
  var arr =[];
  var i =0;
  data.map((el)=> {
    arr[i] = {name: el.name, currencies : el.currencies};
    i++;
  })

  var res = [];
  var temp;
  var k =0;
  for(let j =0; j<arr.length; j++){
    temp = (arr[j].currencies);
    for(let l=0; l<temp.length; l++){
      if(temp[l].code == "USD"){
        res[k] = arr[j].name;
        k++;
      }
    }
    
  }
  console.log(res);

  console.log("Total Population");
  var d = data.map((el)=> el.population).reduce((a,b)=> a+b ,0);
  console.log(d);
  
  document.getElementById("asiaContinent").innerHTML = a;
  
  document.getElementById("population").innerHTML = b;

  document.getElementById("Currency").innerHTML = res;

  document.getElementById("totalPopulation").innerHTML = d;
  
}