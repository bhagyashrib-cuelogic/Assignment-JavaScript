// *********************************************************************************Add function

let Userdata = sessionStorage.getItem('Key');
let Localdata = JSON.parse(localStorage.getItem('Email')) || [];
let data;

for (let t of Localdata) {
  if (t.Email == Userdata) {
    data = t;
  }
}
noData();
// ************************************************************************************ClearFunction
function clearList() {
  document.getElementById("todobody").innerHTML = "";
}
clearList();
printData();
// ***************************************************************************************
function init() {
  let name = document.getElementById("title").value;
  let date = document.getElementById("date").value;
  let date1 = document.getElementById("due").value;
  let cat = document.querySelector('input[name="cat"]:checked').value;
  let random = Math.random();
  todo =
  {
    "name": name,
    "date": date,
    "date1": date1,
    "catogtory": cat,
    "status": "Pending",
    "todoid": random
  }
}
// *************************************************************************************table
      var todoselect = document.getElementById("table");
      var checkBoxes = todoselect.getElementsByTagName('input');
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
  document.getElementById("todoData").style.display="";
  modal.style.display = "block";
  document.getElementById("form").reset();
  document.getElementById("add").style.display="inline-block";
  document.getElementById("save").style.display="none";
}

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function editSave(index) {
  modal.style.display = "block";
}


// ************************************************************************************addTodo
function addTodo() {
  init();
  data.todo.push(todo);
  localStorage.setItem('Email', JSON.stringify(Localdata));
  validData();
  clearList();
  dateValidation();
  printData();
  document.getElementById("form").reset();
}
// ******************************************************************************printTodo
function printData() {
  clearList();
  let todolist = data.todo;
  let table = document.getElementById("todobody");

  for (let i = 0; i < todolist.length; i++) {

    let list = document.createElement("tr");
    list.innerHTML = "<td>" + "<input name='selectedItem' type='checkbox' value='yes' id='checkbox-" + todolist[i].todoid + "' </td>" +
      "<td>" + todolist[i].name + "</td>" +
      "<td>" + todolist[i].date + "</td>" +
      "<td>" + todolist[i].date1 + "</td>" +
      "<td>" + todolist[i].catogtory + "</td>" +
      "<td>" + todolist[i].status + "</td>" +
      "<td>" + '<button type="button" name="" id="btn" onclick="editSave(this.id); editToDo('+i+'); disableDone('+i+');">Edit</button>' + "</td>"
    table.appendChild(list);
  }
}
// ***************************************************************************delteTodo
function deleteTodo() {

  document.getElementById("title").value = "";
  document.getElementById("date").value = "";
  document.getElementById("due").value = "";

  for (var t = data.todo.length - 1; t >= 0; t--) {
    if (checkBoxes[t].checked == true) {
      table.deleteRow(t + 1);
      data.todo.splice(t, 1);
      alert("Deleted ToDo");
    }
  }
  localStorage.setItem('Email', JSON.stringify(Localdata));
  clearList();
  printData();
  noData();
}
// ********************************************************************************statusDone
function statusDone() {
  for (var t = data.todo.length - 1; t >= 0; t--) {
    if (checkBoxes[t].checked == true) {
      data.todo[t].status = 'Done';
      localStorage.setItem("Email", JSON.stringify(Localdata));
    }
  }
  clearList();
  printData();
}
// **********************************************************************************editToDo
function editToDo(i) {
    let editItem=data.todo[i];
    let name=editItem.name;
    let date=editItem.date;
    let date1=editItem.date1; 
    let cat=editItem.catogtory;

    document.getElementById("title").value=name;
    document.getElementById("date").value=date;
    document.getElementById("due").value=date1;
    document.querySelector('input[name="cat"]').value=cat;
    document.getElementById("add").style.display="none";
    document.getElementById("save").style.display="inline-block";
    e=i;
  }
// ****************************************************************************************SaveChnages
  function saveChanges()
  {   let editItem=data.todo[e];
      editItem.name=document.getElementById("title").value;
      editItem.date=document.getElementById("date").value;
      editItem.date1=document.getElementById("due").value;
      // editItem.category=document.querySelector('input[name="ca"]:checked').value;
      dateValidation();
      localStorage.setItem("Email",JSON.stringify(Localdata));
        validData();
        clearList();
        printData();
        document.getElementById("form").reset();
 }
// ******************************************************************************date Validation
 function dateValidation()
{
    let date = document.getElementById("date").value;
    let date1 = document.getElementById("due").value;
    if(date>date1)
    {
        alert("Date is greater than due date");
    }
}

function validData()
{
  let name = document.getElementById("title").value;
  let date = document.getElementById("date").value;
  let date1 = document.getElementById("due").value;
  // let cat = document.querySelector('input[name="cat"]:checked').value;

  if(name=="" || date=="" || date1=="")
  {
     alert("Please fill all the deatils");
  }
}

// **************************************************************disableDone
function disableDone(i)
{
  let doneTodo=data.todo[i];
  if(doneTodo.status=="Done")
  {
        this.disabled="true";
        modal.style.display = "none";
        alert("you are done");
  }
}

// ************************************************************************noData
function noData()
{
    if (data.todo=="")
    {
        document.getElementById("todoData").style.display="none";
        alert("No record Found");
    }
    else{
      document.getElementById("todoData").style.display="";
    }
}
//*****************************************************************************************Filter */
function filter()
{
	var search = document.getElementById("search").value;
	let table = document.getElementById("table");

	let tr = table.getElementsByTagName('tr');

	for(var i=1;i<tr.length;i++)
	{
		let td = tr[i].getElementsByTagName('td')[4];
	if(td)
	{
		let text = td.innerHTML;
		if(text.match(search))
		{
      tr[i].style.display ="";
    }
     else if(search=="All")
      {
        tr[i].style.display ="";
      }
		else
		{
			tr[i].style.display="none";
		}
	}
	}
}
