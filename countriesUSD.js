var xhr = new XMLHttpRequest();
xhr.open("GET","https://restcountries.eu/rest/v2/all");
xhr.send();
xhr.onload = function(){
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
console.log("Countries that use USD Currency : " + res);
}