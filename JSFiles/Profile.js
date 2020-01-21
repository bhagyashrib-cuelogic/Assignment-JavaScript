
( function ()
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
     
    let fname = data.Fname;
    let lname= data.Lname;
    let email = data.Email;
    let gender=data.Gender;
    let add=data.Address;
    let profile=data.Profile;


    document.getElementById("FNAME").value=fname;
    document.getElementById("LNAME").value=lname;
    document.getElementById("email").value=email;
    document.getElementById("gender").value=gender;
    document.getElementById("add").value=add; 
    document.getElementById("viewProfile").src=data.Profile;;

    
})();

function  editFname()
{
    document.getElementById("FNAME").disabled=false;
}
function  editLname()
{
    document.getElementById("LNAME").disabled=false;
}
function  editemail()
{
    document.getElementById("email").disabled=false;
}
function  editgender()
{
    document.getElementById("gender").disabled=false;
}
function  editadd()
{
    document.getElementById("add").disabled=false;
}

//  save edit data

function savedata()
{
    let Userdata = sessionStorage.getItem('Key');
    let Localdata = JSON.parse(localStorage.getItem('Email'));
    

     let fname= document.getElementById("FNAME").value;
     let lname=document.getElementById("LNAME").value;

     let email=document.getElementById("email").value
    //  let pass=document.getElementById("password").value

     let gender=document.getElementById("gender").value;

     let add=document.getElementById("add").value;
     let todo=[];

    let obj=
    {
        "Fname":fname,
        "Lname":lname,
        "Email":email,
        // "Pass":pass,
        "Gender":gender,
        "Address":add,
        "todo":todo

    }
      
    for(let t of Localdata)
    {
        if(t.Email==Userdata)
        {
            let a=Localdata.indexOf(t);
            Localdata.splice(a,1,obj)
            localStorage.setItem('Email',JSON.stringify(Localdata));

            break;
        }
    }  
}

function  editFname1()
{
    document.getElementById("FNAME").disabled=true;
}
function  editLname1()
{
    document.getElementById("LNAME").disabled=true;
}
function  email()
{
    document.getElementById("email").disabled=true;
}
function  editgender1()
{
    document.getElementById("gender").disabled=true;
}
function  editadd1()
{
    document.getElementById("add").disabled=true;
}