
( function ()
{    let Userdata = sessionStorage.getItem('Key');
    let Localdata = JSON.parse(localStorage.getItem('Email'));
    let data;

    for(let t of Localdata)
    {
        if(t.Email==Userdata)
        {
            data = t;
            break;
        }
    }

    document.getElementById("FNAME").disabled=false;
    document.getElementById("LNAME").disabled=false;
    document.getElementById("email").disabled=false;
    document.getElementById("gender").disabled=false;
    document.getElementById("add").disabled=false;
    document.getElementById("viewProfile").disabled=false;

    document.getElementById("FNAME").value=data.Fname;
    document.getElementById("LNAME").value=data.Lname;
    document.getElementById("email").value=data.Email;
    document.getElementById("gender").value=data.Gender;
    document.getElementById("add").value=data.Address; 
    document.getElementById("viewProfile").src=data.Profile;;   
})();

//  save edit data
function saveData()
{
    let Userdata = sessionStorage.getItem('Key');
let Localdata = JSON.parse(localStorage.getItem('Email'));
let data;

for(let t of Localdata)
{
    if(t.Email==Userdata)
    {
        data = t;
        break;
    }
}
    document.getElementById("FNAME").disabled=true;
    document.getElementById("LNAME").disabled=true;
    document.getElementById("email").disabled=true;
    document.getElementById("gender").disabled=true;
    document.getElementById("add").disabled=true;
    document.getElementById("viewProfile").disabled=true;

    data.Fname= document.getElementById("FNAME").value;
    data.Lname=document.getElementById("LNAME").value;
    data.Email=document.getElementById("email").value
    data.Gender=document.getElementById("gender").value;
    data.Address=document.getElementById("add").value;
    data.Profile=sessionStorage.getItem("displayPicture");
    localStorage.setItem('Email',JSON.stringify(Localdata));

    alert("Save Profile");
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