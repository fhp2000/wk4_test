

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://fhp2000.github.io/wk4_test.github.io/cities1.json');
ourRequest.onload = function() {
  var ourData = ourRequest.responseText
 console.log(ourData[0]);
};
ourRequest.send();



