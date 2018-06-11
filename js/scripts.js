var curentTask = "";
$(function() {
  $("form#new-task").submit(function(event) {
    event.preventDefault();

    var inputName = $("#input-task-name").val();
    var inputDescription = $("#input-task-description").val();

    var newTask = new Task(inputName, inputDescription);

    if(inputName != "")
    {
      $("ul#tasks").append(
        "<li><span class='task'>" + newTask.taskName + "</span></li>");
    }

    $(".task").last().click(function(){
      currentTask = this;
      $("#show-task").show();
      $("#show-task h2").text(newTask.taskName);
      newTask.output(".output-task",".output-description");
    });
    clearInput();
  });

  /*
  Code for remove button. When remove button is clicked remove Task stored in currentTask and then find the empty list and remove it from ul#tasks. Then hide the task description area and clear the output
  */
  $("#task-remove").click(function()
  {
    $(currentTask).remove();
    $("ul#tasks").find('li').each(function()
    {
      if($(this).is(':empty'))
      $(this).remove();
    });
    $("#show-task").hide();
    clearOutput();
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
  clear("#input-task-name");
  clear("#input-task-description");
}

function clearOutput()
{
  clear(".output-task");
  clear(".output-description");
}

function clear(temp)
{
  $(temp).val("");
}
