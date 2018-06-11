var curentTask = "";
$(function() {
  $("form#new-task").submit(function(event) {
    event.preventDefault();

    var inputName = $("#input-task-name").val();
    var inputDescription = $("#input-task-description").val();

    var newTask = new Task(inputName, inputDescription);

    $("ul#tasks").append(
      "<li><span class='task'>" + newTask.taskName + "</span></li>");

    $(".task").last().click(function(){
      currentTask = this;
      $("#show-task").show();
      $("#show-task h2").text(newTask.taskName);
      newTask.output(".output-task",".output-description");
    });

    // $(".output-task").last().click(function(){
    //   $(this).remove();
    // });
    clearInput();
  });
  $("#task-remove").click(function()
  {
    $(currentTask).remove();
  });
});

//Create a constructor for object Task
function Task(inputName, inputDescription){
  this.taskName = inputName;
  this.taskDescription = inputDescription;
}

Task.prototype.output = function (outputName,outputDescription)
{
  $(outputName).text(this.taskName);
  $(outputDescription).text(this.taskDescription);
};

function clearInput()
{
  $("#input-task-name").val("");
  $("#input-task-description").val("");
}
