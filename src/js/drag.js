const dragDrop = document.querySelectorAll(".drag");
const dragTable = document.querySelectorAll(".swim-lane");

dragDrop.forEach((drag) => {
  drag.addEventListener("dragstart", () => {
    drag.classList.add("is-dragging");
  });
  drag.addEventListener("dragend", () => {
    drag.classList.remove("is-dragging");
  });
});

dragTable.forEach((zone) => {
  zone.addEventListener("dragover", (e) => {
    e.preventDefault();
    const bottomTask = insertClient(zone, e.clients);
    const topTask = document.querySelector(".is-dragging");

    if (!bottomTask) {
      zone.appendChild(topTask);
    } else {
      zone.insertBefore(topTask, bottomTask);
    }
  });
});

function insertClient(zone, client) {
return;
}

