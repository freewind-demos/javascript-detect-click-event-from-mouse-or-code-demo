const button = document.getElementById("button");
button.onclick = function (event) {
  if (event.isTrusted) {
    console.log('button clicked by mouse');
  } else {
    console.log('button clicked by code');
  }
};

setInterval(function () {
  $('#button').click(); // works also for IE
  //  button.click(); // works for other browsers than IE
}, 1000);

