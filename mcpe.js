let clickSound = new Audio("res/click.m4a");

function getFileName(href) {
	var url = new URL(href);
	var path = url.pathname;
	var fileName = path.substring(path.lastIndexOf('/') + 1);
	return fileName;
}

function playClick() {
	clickSound.play();
}

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       var projects = JSON.parse(xhttp.responseText);
	   var index = document.getElementById("mcpe_project_index")
	   index.innerHTML = "";
	   
	   projects.forEach((project) => {
		   var downloadElem = document.createElement("a");
		   downloadElem.href = project.repo;
		   downloadElem.onclick = playClick;
		   downloadElem.target = "_blank";
		   
		   var divElem = document.createElement("div");
		   divElem.classList.add("mcpe_project");
		   

		   var nameElem = document.createElement("div");
		   nameElem.classList.add("mcpe_project_name");
		   nameElem.innerText = project.name;

		   var descElem = document.createElement("div");
		   descElem.classList.add("mcpe_project_desc");
		   descElem.innerText = project.desc;

		   
		   divElem.appendChild(nameElem);
		   divElem.appendChild(descElem);
		   downloadElem.appendChild(divElem);
		   index.appendChild(downloadElem);
		   

	   })
    }
};
xhttp.open("GET", "/projects.json", true);
xhttp.send();
