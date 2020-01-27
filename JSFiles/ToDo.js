// ***********IIFE function for failed login************************//
(function () {
  if (sessionStorage.getItem('Key') == null) {
    alert("please login first")
    window.location.href = "./index.html";
  }
})();
let Userdata = sessionStorage.getItem('Key');
let Localdata = JSON.parse(localStorage.getItem('Email')) || [];
let data;
for (let t of Localdata) {
  if (t.Email == Userdata) {
    data = t;
  }
}
let todoData;
let todoDate;
let e = 0;
noData();
// *********clear table ****************************************************************//
function clearList() {
  document.getElementById("todobody").innerHTML = "";
}
clearList();
printData();
// **************initilize the data *****************************************************//
function init() {
  let cat;
  let name = document.getElementById("title").value;
  let date = document.getElementById("date").value;
  let date1 = document.getElementById("due").value;
  let category = document.querySelectorAll('input[name="cat"]');
  for (let i = 0; i < v.length; i++) {
    if (category[i].checked == true) {
      cat = category[i].value;
    }
  }
  todo =
  {
    "name": name,
    "date": date,
    "date1": date1,
    "catogtory": cat,
    "status": "Pending",
  }
  dateValidation();
  validData();
}
// ************for select table and checkbox***************************************//
var todoselect = document.getElementById("table");
var checkBoxes = todoselect.getElementsByTagName('input');
//***************Redirect page to profile page ***************************************//
function redirect() {
  window.location.href = "./Profile.html";
}
//***************Logout user and redirect login page***********************************//
function logoutUser() {
  if (confirm("Do you want to logout?")) {
    sessionStorage.clear();
    window.location.href = "./index.html"
  }
  else {
    window.location.href = "./ToDo.html"
  }
}
// **************For pop up form and data enter form***************************************************//
var addButtton = document.getElementById("addButtton");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

addButtton.onclick = function () {
  document.getElementById("todoData").style.display = "";
  modal.style.display = "block";
  document.getElementById("form").reset();
  document.getElementById("add").style.display = "inline-block";
  document.getElementById("save").style.display = "none";
}

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function editSave() {
  modal.style.display = "block";
}
// **************add row to Todo table***************************************************//
function addTodo() {
  init();
  if (todoDate == true && todoData == true) {

    data.todo.push(todo);
    localStorage.setItem('Email', JSON.stringify(Localdata));
    clearList();
    printData();
  }
  document.getElementById("form").reset();
}
// *********print ToDo table ******************************************************************//
function printData() {
  clearList();
  let todolist = data.todo;
  let table = document.getElementById("todobody");

  for (let i = 0; i < todolist.length; i++) {
    let list = document.createElement("tr");
    let row = "<td>" + "<input name='selectedItem' type='checkbox' value='yes' id='checkbox-" + todolist[i].todoid + "' </td>" +
      "<td>" + todolist[i].name + "</td>" +
      "<td>" + todolist[i].date + "</td>" +
      "<td>" + todolist[i].date1 + "</td>" +
      "<td>" + todolist[i].catogtory + "</td>" +
      "<td>" + todolist[i].status + "</td>";
    if (todolist[i].status == "Done") {
      row += "<td>" + '<button type="button" style="display:block" name="" id="btn' + i + '" onclick="deleteDoto(' + i + ');">Delete</button>' + "</td>";
    }
    else {
      row += "<td>" + '<button type="button" style="display:block" name="" id="btn' + i + '" onclick="editSave(this.id); editToDo(' + i + '); disableDone(' + i + ');">Edit</button>' + "</td>";
    }
    list.innerHTML = row;
    table.appendChild(list);
  }
}
// **********Delete todo row*************************************************////
function deleteTodo() {
  document.getElementById("title").value = "";
  document.getElementById("date").value = "";
  document.getElementById("due").value = "";

  for (var t = data.todo.length - 1; t >= 0; t--) {
    if (checkBoxes[t].checked == true) {
      table.deleteRow(t + 1);
      data.todo.splice(t, 1);
    }
  }
  alert("Deleted ToDo");
  localStorage.setItem('Email', JSON.stringify(Localdata));
  clearList();
  printData();
  noData();
}
// *************Done Status after done todo***********************************************//
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
// *********edit todo row**************************************************************//
function editToDo(i) {
  let editData = data.todo[i];
  let name = editData.name;
  let date = editData.date;
  let date1 = editData.date1;
  let cat = editData.catogtory;

  document.getElementById("title").value = name;
  document.getElementById("date").value = date;
  document.getElementById("due").value = date1;

  if (cat == "Home") {
    document.getElementsByName("cat")[0].checked = true;
  }
  else if (cat == "Study") {
    document.getElementsByName("cat")[1].checked = true;
  }
  else if (cat == "Work") {
    document.getElementsByName("cat")[2].checked = true;
  }
  document.getElementById("add").style.display = "none";
  document.getElementById("save").style.display = "inline-block";
  e = i;
}
// *************save changes after edit todo *************************************//
function saveChanges() {
  let editData = data.todo[e];
  editData.name = document.getElementById("title").value;
  editData.date = document.getElementById("date").value;
  editData.date1 = document.getElementById("due").value;
  let cat1 = document.querySelectorAll('input[name="cat"]');
  let cat;
  for (let i = 0; i < cat1.length; i++) {
    if (cat1[i].checked == true) {
      cat = cat1[i].value;
    }
  }
  if (cat == "Home") {
    document.getElementsByName("cat") == true;
  }
  else if (cat == "Study") {
    document.getElementsByName("cat") == true;
  }
  else if (cat == "Work") {
    document.getElementsByName("cat") == true;
  }
  editData.catogtory = cat;
  dateValidation();
  localStorage.setItem("Email", JSON.stringify(Localdata));
  printData();
  document.getElementById("form").reset();
}
// **************validation for todo date and due date****************************//
function dateValidation() {
  let date = document.getElementById("date").value;
  let date1 = document.getElementById("due").value;
  if (date > date1) {
    alert("Date is not valid");
    todoDate = false;
  }
  else {
    todoDate = true;
  }
}
// ************validations for todo data********************************************//
function validData() {
  let name = document.getElementById("title").value;
  let date = document.getElementById("date").value;
  let date1 = document.getElementById("due").value;
  if (name == "" || date == "" || date1 == "") {
    alert("Please fill all the deatils");
    todoData = false;
  }
  else {
    todoData = true;
  }
}
// ********Show No todo item**********************************************************//
function noData() {
  if (data.todo == "") {
    alert("No record Found");
    document.getElementById("todoData").style.display = "none";
  }
  else {
    document.getElementById("todoData").style.display = "";
  }
}
//**************Filter todo item***********************************************************//
function filter() {
  var search = document.getElementById("search").value;
  let table = document.getElementById("table");
  let tr = table.getElementsByTagName('tr');
  for (var i = 1; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName('td')[4];
    if (td) {
      let text = td.innerHTML;
      if (text.match(search)) {
        tr[i].style.display = "";
      }
      else if (search == "All") {
        tr[i].style.display = "";
      }
      else {
        tr[i].style.display = "none";
      }
    }
  }
}
// ************delete Doto item after done************************************************
function deleteDoto(i) {
  table.deleteRow(i + 1);
  data.todo.splice(i, 1);
  localStorage.setItem('Email',Localdata);
  printData();
}
// **********************************************************************************End