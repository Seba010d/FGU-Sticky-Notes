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
    note.innerHTML = `
      <button class="delete-note-btn" data-id="${noteData.id}">x</button>
      <textarea data-id="${noteData.id}" placeholder="Skriv noget...">${noteData.text}</textarea>
    `;
    grid.appendChild(note);
  });
}
