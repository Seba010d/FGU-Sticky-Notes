import { initAddNotes } from "./modules/AddNotes.js";
import { initDeleteNotes } from "./modules/deleteNotes.js";
import { loadData } from "./modules/localStorage.js";
import { initUpdateNotes } from "./modules/updateNotes.js";
import { renderApp, renderNotes } from "./modules/view.js";

renderApp();

let notes = loadData() || [];

renderNotes(notes);
initAddNotes(notes);
initDeleteNotes(notes);
initUpdateNotes(notes);
