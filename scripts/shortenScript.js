function fetchUrl(passUrl) {
	return fetch('https://rel.ink/api/links/', {
      	method: 'POST',
      	body: JSON.stringify({
        	url: passUrl
      	}),
      	headers: {
        	"Content-type": "application/json"
      	}
    })
    .then(response => response.json())
    .then(data => { addUrlResult(data.url, data.hashid);})
    .catch(err => "something went wrong")
}

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
		fetchUrl(passUrl);
		document.getElementById("urlInput").value = "";
	}
})

document.getElementById("urlInput").addEventListener("focus", function () {
	document.getElementById("urlInput").style.borderColor = "transparent";
	document.getElementById("error-message").style.visibility = 'hidden';
	document.getElementById("error-message").style.display = 'none';
})

function addUrlResult(orginalUrl, resultedUrl) {

	const mainParent = document.getElementById("add-div");
	const parent = document.createElement("div");
	const resUrl = document.createElement("p");
	resUrl.setAttribute("id", "resulted-url");
	const orgUrl = document.createElement("p");
	const copyButton = document.createElement("button");
	copyButton.setAttribute("id", "cpy-btn")
	const lineBreak = document.createElement("br");

	mainParent.appendChild(parent);
	parent.appendChild(orgUrl);
	parent.appendChild(resUrl);
	parent.appendChild(copyButton);
	parent.appendChild(lineBreak);


	let baseUrl = "https://rel.ink/";
	let finalUrl = baseUrl.concat(resultedUrl);

	resUrl.innerHTML = finalUrl;
	orgUrl.innerHTML = orginalUrl;
	copyButton.innerHTML = "copy";

	if (screen.width <= 375) {
		parent.setAttribute("style", "display : block; background-color : white; margin : 10%; padding : 0% 0% 15% 3%; border-radius : 8px; height : 35%");
		resUrl.setAttribute("style", " margin : 20px 10px 10px 20px ; padding : 20px 0px 0px 0px; font-family : sans-serif; font-weight : bold;color : hsl(180, 66%, 49%); font-size : 15px");
		orgUrl.setAttribute("style", "margin : 20px 10px 10px 20px ; padding : 20px 0px 0px 0px; font-family : sans-serif; font-weight : bold; font-size: 15px");
		copyButton.setAttribute("style", "margin : 10px -10px 0px 0px; cursor : pointer; float : left; padding : 10px 118px; background-color : hsl(180, 66%, 49%); color : white; border-radius : 8px; outline : none; border : none;");
	}
	else {
		parent.setAttribute("style", "display : flex; background-color : white; margin : 20px 150px; padding : 0px; border-radius : 8px;");
		resUrl.setAttribute("style", "padding : 0px 0px 0px 200px; margin : 25px 2px; font-family : sans-serif; font-weight : bold; width : 60%; color : hsl(180, 66%, 49%);");
		orgUrl.setAttribute("style", "padding : 0px 0px 0px 50px; margin : 25px 2px ; font-family : sans-serif; font-weight : bold; width : 60%;");
		copyButton.setAttribute("style", "margin: 15px; cursor : pointer; float : left; padding : 5px 60px; background-color : hsl(180, 66%, 49%); color : white; border-radius : 8px; outline : none; border : none;");
	}

	copyButton.addEventListener("click", function() {
		console.log("copyText function");
		const resurl = document.getElementById("resulted-url"); 
		let text = resurl.textContent;
		navigator.clipboard.writeText(text);
		if (screen.width > 375) this.style.cssText = "margin: 15px; cursor : pointer; float : left; padding : 5px 48px; background-color : hsl(257, 27%, 26%); color : white; border-radius : 8px; outline : none; border : none;";
		else {
			this.style.cssText = "margin : 10px -10px 0px 0px; cursor : pointer; float : left; padding : 10px 107px; background-color : hsl(257, 27%, 26%); color : white; border-radius : 8px; outline : none; border : none;";
		}
		this.innerHTML = "Copied!";
	});

}

function copyText() {

}	