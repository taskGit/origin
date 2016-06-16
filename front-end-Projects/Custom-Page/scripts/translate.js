	google.load("language", "1");
var button = document.getElementById('languages');

//translate function
button.onchange = function () {
	var text = document.getElementById('content').value;
	var lang = document.getElementById('languages').value;

	if(text == '') {
		alert('Please enter some text to translate');
		return false;
	}

	document.getElementById("tanslatedText").innerHTML = 'Translating...';
	
	google.language.translate(text, '', lang, function(result) {
		if (result.translation) {
			document.getElementById("tanslatedText").innerHTML = result.translation;
		}
	});

	return false;
}
