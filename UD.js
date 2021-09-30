
function UpdateData(){
    var email = valueOf("email");
   
        
		// var select = document.getElementById('email_addresses');
		// var email = select.options[select.selectedIndex].value;
    
    if (email.indexOf('@') == -1) 
    {
        alert("Email should be a valid address.\n");
        window.location.reload()
    }
      
    else{
        //window.location.href='update.html'
        window.location.href='update.html?ls=' + encodeURIComponent(email);
       }
}



function ClearData()
{

        if(confirm("Do you want to proceed with account deletion?"))
        {

			// var select = document.getElementById('email_addresses');
			// var e = select.options[select.selectedIndex].value;
           e=valueOf("email")
		
	
		const python_data={
       
		 "email":e,
		 }

		var json_data = JSON.stringify(python_data)
		//alert(json_data)
        
		var xhr = new XMLHttpRequest();
		xhr.open("DELETE", "http://127.0.0.1:8000/api/v1/users/");
		//xhr.open("DELETE","https://081b-43-247-157-2.ngrok.io/api/v1/users/")

		xhr.setRequestHeader("Accept", "application/json");
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.send(json_data);
		xhr.onload = function() {
		
			if (this.readyState == 4 && this.status==201)
			{
				var res =this.responseText
				alert(res.replace(/['"]+/g, ''))
			}
			else if(this.readyState == 4 && this.status==400)
			{
				
				var res =this.responseText
                alert(res.replace(/['"]+/g, ''))
                window.location.reload()  
			}
			}
        
           
        }

        else{
            window.location.reload() 
        }

}


function valueOf(name) {
	return document.getElementsByName(name)[0].value;
}





function ListData()
{

	window.location.href="Retrieve.html"
}





            function validate()
                {
					// var select = document.getElementById('email_addresses');
                    // var email = select.options[select.selectedIndex].value;
                   
					var email = valueOf("email");
   
					//url = 'next.html?name=' + encodeURIComponent(b);
				if (email.indexOf('@') == -1) 
				{
					alert("Email should be a valid address.\n");
					window.location.reload()
				}
                }
       