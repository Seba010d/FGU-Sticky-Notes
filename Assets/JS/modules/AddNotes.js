import { saveData } from "./localStorage.js";
import { renderNotes } from "./view.js";

export function initAddNotes(notes) {
  const button = document.querySelector(".add-note-btn");

  button.addEventListener("click", () => {
    const nextId =
      notes.length === 0
        ? 0
        : Math.max(...notes.map((note) => note.id)) + 1;

    const newNote = {
      id: nextId,
      text: "",
    };

    notes.push(newNote);
    saveData(notes);
    renderNotes(notes);
  });
}
