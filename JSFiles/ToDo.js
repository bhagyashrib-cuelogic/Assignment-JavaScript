    // let Userdata = sessionStorage.getItem('Key');
    // let Localdata = JSON.parse(localStorage.getItem('Email')) || [];
    // let toDoData;

    // for (let t of Localdata) {
    //     if (t.Email == Userdata) {
    //         toDoData = t;
    //     }
    // }



//*********************************************************************************REDIRECT
function redirect() {
  window.location.href = "./Profile.html";
}

//*********************************************************************************LOGOUT
function logoutUser() {
  if (confirm("Do you want to logout?")) {
    sessionStorage.clear();
    window.location.href = "./Login.html"
  }
  else {
    window.location.href = "./ToDo.html"
  }
}

var addButtton = document.getElementById("addButtton");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

addButtton.onclick = function () {
    // document.location.reload();
      modal.style.display = "block";
}


span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



//**********************************************************************************ADDTODO
function addtodo() {
    // document.location.reload(true);
    // if(flag==true)
    // {

      let name = document.getElementById("name").value;
      let date = document.getElementById("date").value;
      let date1 = document.getElementById("date1").value;
      let cat =  document.querySelector('input[name="cat"]:checked').value;
      let random = Math.random();
      let todo1 =
      {
          "name": name,
          "date": date,
          "date1": date1,
          "catogtory": cat,
          "status":"Pending",   
          "todoid":random
      }

           let Userdata = sessionStorage.getItem('Key');
          let Localdata = JSON.parse(localStorage.getItem('Email')) || [];
          let data;

            for (let t of Localdata) {
          if (t.Email == Userdata) {
                data = t;
              }
             }
          data.todo.push(todo1);
          localStorage.setItem('Email', JSON.stringify(Localdata));
          clearList();
          // document.location.reload();
          printdata();
 }
// else{
//   alert("Please Fill all deatils");
// }

//******************************************************************************PRINTDATA
function printdata() {

  let Userdata = sessionStorage.getItem('Key');
  let Localdata = JSON.parse(localStorage.getItem('Email')) || [];
  let data;

    for (let t of Localdata) {
  if (t.Email == Userdata) {
        data = t;
      }
     }

  let todolist = data.todo;

  for (let i = 0; i < todolist.length; i++) {

    let list=document.createElement("tr");
    list.innerHTML = "<td>" + "<input name='selectedItem' type='checkbox' value='yes' id='checkbox-" + todolist[i].todoid + "' </td>" +
      "<td>" + todolist[i].name + "</td>" +
      "<td>" + todolist[i].date + "</td>" +
      "<td>" + todolist[i].date1+ "</td>" +
      "<td>" + todolist[i].catogtory + "</td>" +
      "<td>" + todolist[i].status+ "</td>" +
      "<td>" + "<button type='button' name='' id='btn' onclick='editSave(this.id); editToDo("+i+");'>Edit</button>" + "</td>"
    document.getElementById("todobody").appendChild(list);
  }
}

//**************************************************************************************DELETEINFO
function deletetodo()
{


  let Userdata = sessionStorage.getItem('Key');
  let Localdata = JSON.parse(localStorage.getItem('Email')) || [];

    for (let t of Localdata) {
      if (t.Email == Userdata) {
        data = t;
      }
     }

    document.getElementById("name").value = "";
    document.getElementById("date").value = "";
    document.getElementById("date1").value = "";
    var selected = [];
    var todoselect = document.getElementById("table");
    var checkBoxes = todoselect.getElementsByTagName('input');

    for (var counter=0; counter<checkBoxes.length; counter++) {
      if (checkBoxes[counter].checked == true) {
      selected.push(counter);
     }
    }
  
  var counter =selected.length-1;

  for (var t=data.todo.length-1;t>=0;t--){
    if(selected[counter]==t){
      table.deleteRow(t+1);
      data.todo.splice(t,1);
      counter--;
    }

    localStorage.setItem('Email', JSON.stringify(Localdata));
  }
  document.location.reload(true);
  
}

// ***********************************************************************FILTER

function filter()
{
	var search = document.getElementById("search").value;
	let table = document.getElementById("table");

	let tr = table.getElementsByTagName('tr');

	for(var i=0;i<tr.length;i++)
	{
		let td = tr[i].getElementsByTagName('td')[4];
	if(td)
	{
		let text = td.innerHTML;
		if(text.match(search))
		{
			tr[1].style.display ="";
		}
		else
		{
			tr[i].style.display="none";
		}
	}
	}
}

// ************************************************************StatusDone
function statusDone()
{
    var selected = [];
    var todoselect = document.getElementById("table");
    var checkBoxes = todoselect.getElementsByTagName('input');

    for (var counter=0; counter<checkBoxes.length; counter++)
     {
        if (checkBoxes[counter].checked == true) 
        {
          selected.push(counter);
        }
    }

    let Userdata = sessionStorage.getItem('Key');
    let Localdata = JSON.parse(localStorage.getItem('Email')) || [];
    let toDoData;

    for (let t of Localdata) {
        if (t.Email == Userdata) {
            toDoData = t;
        }
    }

    var counter =selected.length-1;

    for (var i=toDoData.todo.length-1;i>=0;i--)
    {
         if(selected[counter]==i)
         {
            toDoData.todo[i].status='Done';
            localStorage.setItem("Email",JSON.stringify(Localdata));
            counter--;
         }
         printdata();
         document.location.reload();
    }  
}

//***********************************************************************************EDIT

function editToDo(index) {

    // printdata();
  let Userdata = sessionStorage.getItem('Key');
  let Localdata = JSON.parse(localStorage.getItem('Email')) || [];

    for (let t of Localdata) {
      if (t.Email == Userdata) {
        data = t;
      }
    }

    let v=data.todo;
    let name=v[index].name;
    let date=v[index].date;
    let date1=v[index].date1;
    let cat=v[index].cat;

    document.getElementById('name').value=name;
    document.getElementById('date').value=date;
    document.getElementById('date1').value=date1;
    // document.querySelector('input[name="cat"]:checked').value=cat;

    v[index].name=document.getElementById('name').value;
    v[index].date = document.getElementById('date').value;
    v[index].date1= document.getElementById('date1').value;
    // let cat1 =  document.querySelector('input[name="cat"]:checked').value;
    
    // let todo1 =
    //   {
    //       "name": name1,
    //       "date": date11,
    //       "date1": date12,
    //       "catogtory": cat1,
    //       "status":"Pending",
    //   }

      // v.splice(index,1,todo1);
      localStorage.setItem('Email',JSON.stringify(Localdata));
      // clearList();
      // printdata();
      // location.location.reload();

            
}
// **************************************************8*********************///validations for form
let flag=false;
function validData()
{
  let name = document.getElementById("name").value;
  let date = document.getElementById("date").value;
  let date1 = document.getElementById("date1").value;
  let cat =  document.querySelector('input[name="cat"]:checked').value;

  if(name=="" || date=="" || date1=="")
  {
     flag=false;
  }
  else{
    flag=true;
  }
}
//******************************************************************************clear */
function clearList()
{
  document.getElementById("table").innerHTML="";
}

// var saveButtton = document.getElementById("editBtn");
function editSave(index){
    modal.style.display = "block";
}
