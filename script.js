function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value;

  if (task === "") {
    alert("タスクを入力してください");
    return;
  }

  const li = document.createElement("li");
  li.textContent = task;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "削除";

  deleteBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(deleteBtn);
  document.getElementById("taskList").appendChild(li);

  input.value = "";
}