export function renderApp() {
  const app = document.getElementById("App");
  app.innerHTML = `
  <section class="notes-page">
    <header class="notes-header">
      <h1>Sticky Notes</h1>
      <button class="add-note-btn">+ Ny Note</button>
    </header>

    <section class="notes-grid"></section>
  </section>
`;
}

export function renderNotes(notes) {
  const grid = document.querySelector(".notes-grid");
  grid.innerHTML = "";

  notes.forEach((noteData) => {
    const note = document.createElement("article");
    note.className = "note";

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-note-btn";
    deleteButton.dataset.id = noteData.id;
    deleteButton.textContent = "x";

    const textarea = document.createElement("textarea");
    textarea.dataset.id = noteData.id;
    textarea.placeholder = "Skriv noget...";
    textarea.value = noteData.text;

    note.append(deleteButton, textarea);
    grid.appendChild(note);
  });
}

export function openConfirmBox(message, onConfirm) {
  const backdrop = document.createElement("div");
  backdrop.className = "backdrop";

  const box = document.createElement("div");
  box.className = "confirm-box";

  const text = document.createElement("p");
  text.textContent = message;

  const buttonGroup = document.createElement("div");
  buttonGroup.className = "confirm-actions";

  const yesButton = document.createElement("button");
  yesButton.className = "confirm-yes-btn";
  yesButton.textContent = "Ja";

  const noButton = document.createElement("button");
  noButton.className = "confirm-no-btn";
  noButton.textContent = "Nej";

  yesButton.addEventListener("click", () => {
    onConfirm();
    backdrop.remove();
    box.remove();
  });

  noButton.addEventListener("click", () => {
    backdrop.remove();
    box.remove();
  });

  backdrop.addEventListener("click", () => {
    backdrop.remove();
    box.remove();
  });

  buttonGroup.append(yesButton, noButton);
  box.append(text, buttonGroup);

  document.body.append(backdrop, box);
}
