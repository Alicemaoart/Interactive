document.body.onkeydown = function(keypress_event){
  var key = keypress_event.key;
  var new_element = document.createElement("h1");
  new_element.innerHTML = key;
  document.body.appendChild(new_element);

document.addEventListener('keydown', function(keypress_event) {
  if (key == "a" ) {
    document.getElementById('audio').play();
  }
});
};
