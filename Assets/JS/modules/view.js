export function renderApp() {
  const app = document.getElementById("App");
  app.innerHTML = `
  <section class="notes-page">
    <header class="notes-header">
      <h1>Sticky Notes</h1>
      <button class="add-note-btn">+ Ny Note</button>
    </header>
  </section>
`;
}
