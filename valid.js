
// window.onload=function(){}

function ViewFunction(){
	var i = document.getElementById("password1");
	if(i.type === "password"){
		i.type = "text";
	}else{
		i.type = "password";
	}
}
function validated(){

	const email=document.getElementById("name1").value;
	const pass=document.getElementById("password1").value;

	let mailformat = new RegExp("^[a-z]+[a-z 0-9]*@[a-z]+\.(com|gov|org)$"); // email must end with .com (or) .gov (or) .org
	let nameformat = new RegExp("^[A-Z a-z]{1}[A-Z a-z 0-9 \_]{3,50}$"); // Username must start with alphabets and followed by digits or alphabets or underscore. 
	let regxp = new RegExp('(^[A-Z]*[A-Z a-z 0-9]*[^A-z a-z 0-9]*[A-Z a-z 0-9]*[A-z a-z 0-9]*[A-Z]+[A-Z a-z 0-9]*[^A-z a-z 0-9]*[^A-z a-z 0-9]+[A-Z a-z 0-9]*[0-9]+[^A-Z a-z 0-9]*[A-Z a-z 0-9]*){8,}$'); //Password should start with capital alphabets followed by small alphabetss special characters and digits.



	var flag=0;
	// Checking emailformat/nameformat is valid or not!! 
	if(mailformat.test(email) || nameformat.test(email)) {
		console.log(email);
		flag+=1;
	}
	else{
		window.alert("Invalid username or email : \nProvide valid Email or Name");
		flag=0;
	}

	// Checking password format is valid or not!!
	if(regxp.test(pass)){
		console.log(pass);
		flag+=1;
	}else{
		window.alert("Invalid Password:\nPassword must have at least 8 characters of upper,lower,numeric & special characters");
		
		flag=0;
	}

	if(flag==2){
		window.open("home.html");
		return true;
	}
	else{
		return false;
	}

}





	





















