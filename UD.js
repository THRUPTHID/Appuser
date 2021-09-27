
function UpdateData(){
    var email = valueOf("email");
   
        //url = 'next.html?name=' + encodeURIComponent(b);
    var email = valueOf("email");
    
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


            e=valueOf("email")
		
	
		const python_data={
       
		 "email":e,
		 }

		var json_data = JSON.stringify(python_data)
		//alert(json_data)
        
		var xhr = new XMLHttpRequest();
		//xhr.open("DELETE", "http://127.0.0.1:8000/api/v1/users/");
		xhr.open("DELETE","https://081b-43-247-157-2.ngrok.io/api/v1/users/")

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
				alert("Enter else if ")
				alert(this.responseText);
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