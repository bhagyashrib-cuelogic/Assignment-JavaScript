
function LoginUser() {
    let loginId = document.getElementById("loginid").value;
    let password = document.getElementById("passUser").value;

    var test = JSON.parse(localStorage.getItem('Email'));

    for (var i of test) {
        if(i==test.length)
            {
                 alert('User not found');
            }
        if (loginId != "") {
            if (loginId == i.Email) 
            {
                if (password != "") 
                {
                    if (password == i.Pass) 
                    {
                        alert("Login Successfully");
                        sessionStorage.setItem('Key',loginId);
                        redirect();
                    }
                    else {
                        // alert("Please Enter right password");
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
                // alert("Please Enter valid Email");
                document.getElementById("loginpass").innerHTML = "Enter Email";
                document.getElementById("loginpass").style.color = "red";
            }
            
    }
}

    function redirect() {
        window.location.href = "./ToDo.html";
    }
