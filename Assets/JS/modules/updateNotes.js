import { saveData } from "./localStorage.js";

export function initUpdateNotes(notes) {
  const grid = document.querySelector(".notes-grid");

  grid.addEventListener("input", (event) => {
    if (event.target.tagName !== "TEXTAREA") {
      return;
    }

    const id = Number(event.target.dataset.id);
    const note = notes.find((note) => note.id === id);

    if (!note) {
      return;
    }

    note.text = event.target.value;
    saveData(notes);
  });
}
