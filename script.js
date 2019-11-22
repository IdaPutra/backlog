var team =  JSON.parse(localStorage.getItem("team"));
var todo=JSON.parse(localStorage.getItem("todo"));

  
if(team){
  for(var i = 0; i<team.length; i++){
    renderMemberCard(team[i] );
  }
  
  
}else{
  team = [];
 
  
}

if(todo) {
  for(var i = 0; i<todo.length; i++){
  renderTask(todo[i] );
  }
  
  
}else{
 
  todo= [];
}



$("#add").click(function () {
  event.preventDefault();
  $('#model1')
 .modal('show')
   

});

$("#edit").click(function () {
  event.preventDefault();
  $('#model3')
    .modal('show')

});


$("#save").on("click", function saveinput() {

;

  if (!$("#first-name").val() || !$("#last-name").val()) {
    event.preventDefault();
    $('#model2')
      .modal('show')
    $("#cancel").on("click", function () {
      $('#model2')
        .modal('fade')
    })

  }
  var FR= new FileReader();
  var NewMember
  FR.addEventListener("load", function(e) {

    NewMember = {
      firstname: $("#first-name").val(),
      lastname: $("#last-name").val(),
      img: e.target.result
    }  
     renderMemberCard(NewMember );
     team.push(NewMember);

     localStorage.setItem("team", JSON.stringify(team));
  }); 
  
  FR.readAsDataURL(document.getElementById("myImg").files[0]);



  // team = JSON.parse(localStorage.getItem("team"));

for (let i = 0; i < team.length; i++) {
  
  }
  $('#model1')
  .modal('hide')
  
});

function renderMemberCard(teamMember){
 

 var card = ` 
 
 <div class="five wide column">
 <div class="ui card">
 
 <div class="content">
   <img class="ui avatar image" src=${teamMember.img}> ${teamMember.firstname} ${teamMember.lastname}
   <button class="ui align right button" id="edit"><i class="pencil alternate icon"></i></button>
 </div>
 
 <div class=" content">
 <h1>Progress:</h1>
 
  <div class="item">

  <div class="taskcontain"><input type="checkbox" name="example" label id="task">Finish Project!</div>
  </div>
 </div>
 <div class="content">
  <h1 class= "finish">Done</h1>
  <div class="taskdone">
  <div class="ui list" id="list">
 <li>
 </li>
  </div>
</div>
  </div> </div>
 </div>
</div> `;
 
$("#containrow").append(card); 
}


 $("#confirm").on("click",function addtask(){
  if (!$("#wip").val()) {
    event.preventDefault();
    $('#model2')
      .modal('show')
  }
  var newTask= {
    task: $("#wip").val()

 
    }
   todo.push(newTask);
   localStorage.setItem("todo", JSON.stringify(todo));
   

   
   renderTask(newTask);

 });
 function renderTask(todolist){
var newtask= `<div class="taskcontain"><input type="checkbox" id="check" name="example" label id="task">${todolist.task}</div>`;


$(".item").append(newtask); 
 }



 $(':checkBox').click(function () { 
  var list=$(".taskcontain");
   $("li").append (list);

 })
























