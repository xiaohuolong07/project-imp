// Pegar geo
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://ipinfo.io/json', true);
xhr.onload = function() {
  if (xhr.status === 200) {
    var data = JSON.parse(xhr.responseText);
    var city = data.city;
    document.getElementById('city').innerHTML = city;
  }
};
xhr.send();