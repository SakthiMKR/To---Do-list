
    let editIndex = -1;

    function addTask() {
      const taskInput = document.getElementById("taskInput");
      const taskText = taskInput.value.trim();
      if (taskText === "") return;

      if (editIndex !== -1) {
        const li = document.querySelectorAll("#taskList li")[editIndex];
        li.querySelector(".task-text").innerText = taskText;
        taskInput.value = "";
        editIndex = -1;
        return;
      }

      const taskList = document.getElementById("taskList");
      const li = document.createElement("li");
      li.className = "flex items-center justify-between p-2 bg-gray-100 rounded-md";

      const leftDiv = document.createElement("div");
      leftDiv.className = "flex items-center gap-2";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "form-checkbox h-5 w-5 text-blue-500";
      checkbox.onchange = function () {
        taskTextSpan.classList.toggle("line-through", checkbox.checked);
      };

      const taskTextSpan = document.createElement("span");
      taskTextSpan.innerText = taskText;
      taskTextSpan.className = "task-text";

      leftDiv.appendChild(checkbox);
      leftDiv.appendChild(taskTextSpan);

      const btnGroup = document.createElement("div");
      btnGroup.className = "flex gap-2";

      const editBtn = document.createElement("button");
      editBtn.innerText = "Edit";
      editBtn.className = "bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded";
      editBtn.onclick = function () {
        taskInput.value = taskTextSpan.innerText;
        editIndex = Array.from(taskList.children).indexOf(li);
      };

      const deleteBtn = document.createElement("button");
      deleteBtn.innerText = "Delete";
      deleteBtn.className = "bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded";
      deleteBtn.onclick = function () {
        li.remove();
      };

      btnGroup.appendChild(editBtn);
      btnGroup.appendChild(deleteBtn);

      li.appendChild(leftDiv);
      li.appendChild(btnGroup);
      taskList.appendChild(li);

      taskInput.value = "";
    }
