function dofirst(){
	 var button = document.getElementById("login");
	 button.addEventListener("onclick",store,false);
}

function store(){
	var name = document.getElementById("name").value;
	var pass = document.getElementById("pass").value;
	sessionStorage.setitem(name,pass);
	display(name);
}

function display(){
	var main_section = document.getElementById("main_section");
	var pass=sessionStorage.getitem(name);
	main_section.innerHTML = "WELCOME" + name;
}

window.addEventListener("load",dofirst,false);
function getstuff(){
	document.querySelector('#login').onclick=talk;
	
}
function talk(){
	window.alert('wrong password');
}

window.onload=getstuff;

function getstuff(){
	document.querySelector('#pic').onclick=talk;
	
}
function talk(){
	document.write('HE IS AWESOME');
	
}
