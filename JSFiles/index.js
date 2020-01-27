// *********valid user login ***************************//
( function ()
{
  let Userdata = sessionStorage.getItem('Key');
  let Localdata = JSON.parse(localStorage.getItem('Email')) || [];
  for (let t of Localdata) {
    if (t.Email!=Userdata || Userdata=="" || t.Email=="") {
      window.location.href="./index.html";
    }
  }
  if(Userdata=="")
  {
      location.window.href="./index.html";
  }
});
//**user login validations */
function LoginUser() {
    let loginId = document.getElementById("loginid").value;
    let password = document.getElementById("passUser").value;
    var test = JSON.parse(localStorage.getItem('Email'));
    validaLogin();
    if(!test)
        {
            alert("you are not register");
        }
    else
        {
        if(flag==true)
         {
            for (var i of test) {
            if (loginId != "") {
                if (loginId == i.Email) 
                {
                    if (password != "") 
                    {
                        if (password == i.Pass) 
                        {
                            alert("Login Successfully");
                            sessionStorage.setItem('Key',loginId);
                            window.location.href = "./ToDo.html";
                        }
                        else    {  
                            document.getElementById("login").innerHTML = "Password is wrong";
                            document.getElementById("login").style.color = "red";
                        }
                    }
                else {
                    document.getElementById("login").innerHTML = "Enter Password";
                    document.getElementById("login").style.color = "red";
                    }
                }
                else 
                {
                    document.getElementById("loginpass").innerHTML = "Email is wrong";
                    document.getElementById("loginpass").style.color = "red";
                }
            }
                else
                {
                    document.getElementById("loginpass").innerHTML = "Enter Email";
                    document.getElementById("loginpass").style.color = "red";
                }   
         }
    }
        else
        {
            alert("please fill deatils");
        }
    }
}
// ******user login validations(email and password) *******************************************//
function validaLogin()
{
    flag=false;
    let loginId = document.getElementById("loginid").value;
    let password = document.getElementById("passUser").value;

    if(loginId==""  || password=="")
    {
            flag=false;
    }
    else{
             flag=true;
    }
}
// *********************************************************************************end here