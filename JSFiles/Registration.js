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

   let gender=document.querySelectorAll('input[name="gender"]');
   if(gender=="Female")
   {
    document.getElementsByName("gender")[0].checked=true;
   }
  else if(gender=="Male")
   {
    document.getElementsByName("gender")[1].checked=true;
   }
   else if(gender=="Other")
   {
     document.getElementsByName("gender")[2].checked=true;
   }

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
        document.getElementById("error").innerHTML="Password length is too short";
        document.getElementById("error").style.color="red";
    }
    else
    {
         pass1 = true;
         document.getElementById("error").style.display="none";
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
            document.getElementById("namef").style.visibility="visible";
        }

        else if(!(Fname.match(letters)))
        {
            document.getElementById("namef").innerHTML="Please Enter valid First name";
            document.getElementById("namef").style.color="red";
            document.getElementById("namef").style.visibility="visible";
        }
        else{
             first=true;
             document.getElementById("namef").style.visibility="hidden";
        }
}

// last name validation
function validlname()
{
        let Lname=document.getElementById("LastName").value;
        lastName = false;

    var letters = /^[A-Za-z]+$/;    

    if(Lname=="" || Lname==null)
        {
            document.getElementById("namel").innerHTML="cant' Empty";
            document.getElementById("namel").style.color="red";
            document.getElementById("namel").style.visibility="visible";
        }

    else if(!(Lname.match(letters)))
        {
            document.getElementById("namel").innerHTML="Please Enter valid  Last name";
            document.getElementById("namel").style.color="red";
            document.getElementById("namel").style.visibility="visible";
        }
        else{
                document.getElementById("namel").style.visibility="hidden";
                lastName = true;
        }
}

// mail validation

function mail(maill)
{
    // let maill=document.getElementById("emailbox").value;
    var filter = /^[a-zA-z0-9._]{5,10}@[gmail.]{5,6}[.][a-z.]{3,6}$/;
    Mail=false;
    if(!(maill.match(filter)) || maill==null || maill =="")
    {
        document.getElementById("mail1").innerHTML="Please Enter your valid mail";
        document.getElementById("mail1").style.color="red";
        document.getElementById("mail1").style.visibility="visible";
    }
    else
    {
        Mail=true;
        document.getElementById("mail1").style.visibility="hidden";
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
