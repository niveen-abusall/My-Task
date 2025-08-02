function addTask() {
      const input = document.getElementById("taskInput");
      const taskName = input.value.trim();
      if (taskName === "") return;

      const tableBody = document.getElementById("taskTableBody");
      const newRow = document.createElement("tr");
      newRow.onclick = function () {
        toggleStatus(this);
      };

      const taskCell = document.createElement("td");
      taskCell.textContent = taskName;

      const statusCell = document.createElement("td");
      statusCell.textContent = "Incomplete";
      statusCell.className = "status incomplete";

      newRow.appendChild(taskCell);
      newRow.appendChild(statusCell);
      tableBody.appendChild(newRow);

      input.value = "";
    }

    function toggleStatus(row) {
      const statusCell = row.querySelector(".status");
      if (statusCell.textContent === "Incomplete") {
        statusCell.textContent = "Complete";
        statusCell.classList.remove("incomplete");
        statusCell.classList.add("complete");
      } else {
        statusCell.textContent = "Incomplete";
        statusCell.classList.remove("complete");
        statusCell.classList.add("incomplete");
      }

    }

