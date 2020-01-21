// for getting elements from form
 let check=false;
let pass1 = false;
let first = false;
let lastName = false;
let Mail = false;

function submitRec()
{
    if(pass1==true && first==true && lastName==true && Mail==true)
    {
    let fname=document.getElementById("FirstName").value;
    let lname=document.getElementById("LastName").value;

   let email=document.getElementById("emailbox").value
   let pass=document.getElementById("password").value

   let gender=document.querySelector('input[name="gender"]:checked').value;

   let add=document.getElementById("address").value;
    var profile= sessionStorage.getItem("displayPicture");
    let todo=[];


      
    let obj= {
                "Fname":fname ,
                "Lname":lname,
                "Email":email,
                "Pass":pass,
                "Gender":gender,
                "Address":add,
                "todo":todo,
                "Profile":profile
            };
           
            ValidateUser(obj);
            
}
else{
    alert("Please Enter all details");
}
}
function ValidateUser(obj)
{
    let existing = JSON.parse(localStorage.getItem('Email')) || [];
    let flag = false;
    if(existing != ""){
       
        let i=0;
        for(i=0;i<existing.length;i++)
        {
            if(existing[i].Email== obj.Email)
            {
                flag = true;
                alert("sorry email exist..!");
                break;
            }
        }
        if(!flag){
            existing.push(obj);
            localStorage.setItem('Email',JSON.stringify(existing));
            redirect();
        }
    }else{
        existing.push(obj);
        localStorage.setItem('Email',JSON.stringify(existing));
        redirect();
    }
           
}

function validatepass(password)
{
    pass1=false;

    if(password.length<8 || password=="")
    {
        console.log("wrong pass");
        document.getElementById("error").innerHTML="Enter valid password";
        document.getElementById("error").style.color="red";
    }
    else
    {
        console.log("strong");
         pass1 = true;
    }
}


// First Name Validdation

function validfname()
{
    first = false;
    let Fname=document.getElementById("FirstName").value;
    var letters = /^[A-Za-z]+$/;
    if(Fname=="" || Fname==null)
        {
            // console.log("Please Enter valid Name");
            document.getElementById("namef").innerHTML="cant' Empty";
            document.getElementById("namef").style.color="red";
        }

        else if(!(Fname.match(letters)))
        {
            console.log("Please Enter valid Name");
            document.getElementById("namef").innerHTML="Please Enter valid First name";
            document.getElementById("namef").style.color="red";
        }
        else{
             first=true;
        }
}

// last name validation
function validlname()
{
    check
        let Lname=document.getElementById("LastName").value;
        lastName = false;

    var letters = /^[A-Za-z]+$/;

    if(Lname=="" || Lname==null)
        {
            document.getElementById("namel").innerHTML="cant' Empty";
            document.getElementById("namel").style.color="red";
        }

    else if(!(Lname.match(letters)))
        {
            console.log("Please Enter valid Name");
            document.getElementById("namel").innerHTML="Please Enter valid  Last name";
            document.getElementById("namel").style.color="red";
        }
        else{
            lastName = true;
        }
}

// mail validation

function mail(maill)
{
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    Mail=false;
    if(!(maill.match(filter)) || maill==null || maill =="")
    {
        console.log("Please Enter valid Name");
        document.getElementById("mail1").innerHTML="Please Enter your valid mail";
        document.getElementById("mail1").style.color="red";
    }
    else
    {
        Mail=true;
    }
}

function redirect()
{
    window.location.href="./Login.html";
}

function UploadProfilePicture() 
{
    let Image = document.getElementById("inpFile").files[0];

    let imagereader = new FileReader();
    imagereader.readAsDataURL(Image);

    imagereader.onload = function () 
    {
        let imgdata = imagereader.result;
        sessionStorage.setItem("displayPicture", imgdata);
        document.getElementById("viewProfile").src = imgdata;
    };
}