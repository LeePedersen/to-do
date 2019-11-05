function List() {
  this.tasks = [];
  this.currentId = 0;
}

function Task(task) {
  this.task = task;
}

List.prototype.assignId = function() {
  this.currentId++;
  return this.currentId;
}

List.prototype.addTask = function(task) {
  task.id = this.assignId();
  this.tasks.push(task);
}

// UI

$(document).ready(function() {
  var taskList = new List;
  $("#addListItem").submit(function(event) {
    event.preventDefault();
    var newTask = $("input#newItem").val();
    taskList.addTask(newTask);
    console.log(taskList);
    $("#list").text(taskList.tasks);
  });

});
