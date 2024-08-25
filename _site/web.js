document.onkeyup = function(e) {
  console.log(e)
  if (e.code == "Digit1" && e.altKey) {
    document.querySelector('#editorInk').click()
  }
};

