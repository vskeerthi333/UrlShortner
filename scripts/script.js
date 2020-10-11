  let menuIcon = document.getElementById("menu-bar");
  menuIcon.addEventListener("click", function() {
  	let currAction = menuIcon.getAttribute("class");
  	if (currAction == "open") {
  		document.getElementById("nav-links").style.visibility = 'hidden';
  		menuIcon.setAttribute("class", "close");
  	}
  	else {
  		document.getElementById("nav-links").style.visibility = 'visible';
  		menuIcon.setAttribute("class", "open");
  	}
  });