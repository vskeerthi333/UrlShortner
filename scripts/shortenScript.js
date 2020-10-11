let shortenbutton = document.getElementById("shortenUrl");
shortenbutton.addEventListener("click", function() {
	let urlTobeShortend = document.getElementById("urlInput");
	let passUrl = document.getElementById("urlInput").value;
	if (urlInput.value == "" || urlInput.value == undefined) {
		document.getElementById("urlInput").style.borderColor = "hsl(360, 66%, 61%)";
		document.getElementById("error-message").style.visibility = 'visible';
		document.getElementById("error-message").style.display = 'block';
	}
	else {
		fetch('https://rel.ink/api/links/', {
      		method: 'POST',
      		body: JSON.stringify({
        		url: passUrl
      		}),
      		headers: {
        		"Content-type": "application/json"
      		}
    	})
    	.then(response => response.json())
	}
})

document.getElementById("urlInput").addEventListener("focus", function () {
	document.getElementById("urlInput").style.borderColor = "transparent";
	document.getElementById("error-message").style.visibility = 'hidden';
	document.getElementById("error-message").style.display = 'none';
})