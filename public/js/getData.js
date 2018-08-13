

function requestDataByD3() {

  d3.json("http://172.16.40.51:8282/api-test")
    .then( (received) => { 

      // console.log(received);
      received.forEach( (data) => { console.log(data); } )

      d3.select("body")
        .html(data.name); 
      })
}

function requestDataByAJAX() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readState == 4 && this.status == 200) {
      document.write(this.responseText);
    }
  };

  xhttp.open("GET", "http://172.16.40.51:8282/api-test", true);
  xhttp.send();
}

// requestDataByAJAX();
requestDataByD3();
