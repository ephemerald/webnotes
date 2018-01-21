function handleClick() {
  	var input = document.getElementById('inputNsfwValue').value;
  	var nsfwNumber = Number(input);
  	console.log(nsfwNumber);

	chrome.storage.sync.set({'nsfwNumber': nsfwNumber}, function() {
      console.log('Settings saved');
    });

        // Read it using the storage API
    chrome.storage.sync.get(['nsfwNumber'], function(items) {
      console.log('Settings retrieved', items);
    });
}

window.onload = function() {
  //Listener for button click
  document.getElementById('submitButton').addEventListener('click', handleClick);
  var inputTxt = document.getElementById('inputNsfwValue');
  inputTxt.onkeyup = function (e) {
  	if(e.keyCode == 13){
  		handleClick();
  	}
  }
}

