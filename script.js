function validate() {  
	var result = "";	
	result += validateName(); 	
	result += validateEmail();
	result += validatePassword();
	result += validateTerms();
	
	if (result == "") 
    {
		n=valueOf("name")
		e=valueOf("email")
		p=valueOf("password")
		
		const python_data={
         "name":n,
		 "email":e,
		 "password":p}

		var json_data = JSON.stringify(python_data)
		//alert(json_data)

        
		var xhr = new XMLHttpRequest();
		xhr.open("POST", "http://127.0.0.1:8000/api/v1/users/");
		//xhr.open("POST","https://ff3d-43-247-157-2.ngrok.io/api/v1/users/")

		xhr.setRequestHeader("Accept", "application/json");
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.send(json_data);
		xhr.onload = function() {
		
			if (this.readyState == 4 && this.status==201)
			{
						alert(this.responseText);
			}
			else if(this.readyState == 4 && this.status==400)
			{
				var result = JSON.parse(this.responseText);
				alert(result.email);
			}
			}

		
		// xhr.onreadystatechange = function () {
		//    if (xhr.readyState === 4) {
		// 	  console.log(xhr.status);
		// 	  console.log(xhr.responseText);
		//    }};
		   //return true;
		   //window.location.reload()

	}

        
        
    else{
		alert("Validation Result:\n\n" + result);
	return false;
	}
	
	return false;	
}

function validateName() {
	var name = document.getElementsByName("name")[0].value;
	if (name.length <= 3)
		return "Name should be at least three characters.\n";	
	return "";
}

function validatePassword() {
	var password = valueOf("password");
	var retype = valueOf("retype_password");
	
	if (password.length < 6) 
		return "Password should be at least 6 characters.\n";
	
	if (password != retype) 
		return "Passwords do not match.\n";	
	return "";
}

function validateEmail() {
	var email = valueOf("email");
	var retype = valueOf("retype_email");
	
	if (email.indexOf('@') == -1) 
		return "Email should be a valid address.\n";
	
	if (email != retype)
		return "Email addresses do not match.\n";
	return "";	
}

function validateTerms() {
	var terms = document.getElementsByName("terms")[0];
	if (!terms.checked)
		return "Please accept the Terms of Service and Privacy Policy";	
	return "";
}

function valueOf(name) {
	return document.getElementsByName(name)[0].value;
}