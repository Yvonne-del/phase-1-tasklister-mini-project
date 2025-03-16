document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const newTask = document.getElementById("new-task-description");
  const tasks = document.getElementById("tasks");

  form.onsubmit = function(event) {
      event.preventDefault(); // Prevents page reload

      let taskText = newTask.value.trim(); // Trim to avoid empty input

      if (taskText === "") return; // Prevent adding empty tasks

      let listItem = document.createElement("li");
      listItem.textContent = taskText;

      // Create delete button
      let deleteButton = document.createElement("button");
      deleteButton.textContent = "X";

      // Add event listener to delete button
      deleteButton.addEventListener("click", function() {
          listItem.remove();
      });

      // Append delete button to list item
      listItem.appendChild(deleteButton);
      tasks.appendChild(listItem); // 

      // Clear input field
      newTask.value = "";
  };
});
