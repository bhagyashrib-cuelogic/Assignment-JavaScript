(function()
{
        if(!localStorage)
        {
            alert("Your Broswer doesn't support localstroage");
        }
})();
// *******************************************************************declare flag globally
let check=false;
let pass1 = false;
let first = false;
let lastName = false;
let Mail = false;
// *********store user info to localstore*********//
function submitRec()
{
    if(pass1==true && first==true && lastName==true && Mail==true)
    {
    let fname=document.getElementById("FirstName").value;
    let lname=document.getElementById("LastName").value;

   let email=document.getElementById("emailbox").value
   let pass=document.getElementById("password").value

   let Gender=document.querySelectorAll('input[name="gender"]');
   let gen;
   for(let i=0;i<Gender.length;i++)
  {
    if(Gender[i].checked==true)
    {
        gen=Gender[i].value;
    }

  }
    let add=document.getElementById("address").value;
    var profile= sessionStorage.getItem("displayPicture");
    let todo=[];
    let obj= {
                "Fname":fname ,
                "Lname":lname,
                "Email":email,
                "Pass":pass,
                "Gender":gen,
                "Address":add,
                "todo":todo,
                "Profile":profile
            };
            validateUser(obj);
}
else{
    alert("Please Enter all details");
    }
}
// **********check user alredy exist or not**********//
function validateUser(obj)
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
            reDirect();
        }
    }else{
        existing.push(obj);
        localStorage.setItem('Email',JSON.stringify(existing));
        reDirect();
    }         
}
// ************validation for user password******************//
function validatePass(password)
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
// ********validations for user first name****************************//
function validFname()
{
    first = false;
    let Fname=document.getElementById("FirstName").value;
    var letters = /^[A-Za-z]+$/;
    if(Fname=="" || Fname==null)
        {
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
// *************validations for user last name********************//
function validLname()
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
// **********validations for user mail***********************//
function mailValidation(userMail)
{
    var filter = /^[a-zA-z0-9._]{5,10}@[gmail.]{5,6}[.][a-z.]{3,6}$/;
    Mail=false;
    if(!(userMail.match(filter)) || userMail==null || userMail =="")
    {
        document.getElementById("mailErrorbox").innerHTML="Please Enter your valid mail";
        document.getElementById("mailErrorbox").style.color="red";
        document.getElementById("mailErrorbox").style.visibility="visible";
    }
    else
    {
        Mail=true;
        document.getElementById("mailErrorbox").style.visibility="hidden";
    }
}
// *********redirect to login page after submit*******************//
function reDirect()
{
    window.location.href="index.html";
}
//*************convert user profile into base64 i.e into string *****//////
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
// *****************************************************************Code end here
