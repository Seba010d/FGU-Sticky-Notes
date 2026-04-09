import { saveData } from "./localStorage.js";
import { renderNotes } from "./view.js";

export function initAddNotes(notes) {
  const button = document.querySelector(".add-note-btn");
  const noteColor = ["#bfdbfe", "#bbf7d0", "#fde68a", "#fbcfe8"];
  let lastColor = null;

  button.addEventListener("click", () => {
    let randomColor;

    do {
      randomColor = noteColor[Math.floor(Math.random() * noteColor.length)];
    } while (randomColor === lastColor && noteColor.length > 1);

    lastColor = randomColor;
    const nextId = notes.length === 0 ? 0 : Math.max(...notes.map((note) => note.id)) + 1;

    const newNote = {
      id: nextId,
      text: "",
      color: randomColor,
    };

    notes.push(newNote);
    saveData(notes);
    renderNotes(notes);
  });
}
