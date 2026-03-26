import { saveData } from "./localStorage.js";
import { openConfirmBox, renderNotes } from "./view.js";

export function initDeleteNotes(notes) {
  const grid = document.querySelector(".notes-grid");

  grid.addEventListener("click", (event) => {
    if (!event.target.classList.contains("delete-note-btn")) {
      return;
    }

    const id = Number(event.target.dataset.id);
    openConfirmBox("Er du sikker på, at du vil slette denne note?", () => {
      const filteredNotes = notes.filter((note) => note.id !== id);

      notes.length = 0;
      notes.push(...filteredNotes);

      saveData(notes);
      renderNotes(notes);
    });
  });
}
