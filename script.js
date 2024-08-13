const searchInput = document.querySelector("#search-input");
const table = document.querySelector("#tBodyData");

const notesList = [
  {
    id: 1,
    title: "Coding JavaScript",
    createdAt: "2024-03-13T20:43:34.067Z",
    completed: false,
  },
  {
    id: 2,
    title: "Study physics",
    createdAt: "2024-02-13T20:43:34.067Z",
    completed: true,
  },
  {
    id: 3,
    title: "React.js intervew",
    createdAt: "2024-01-13T20:43:34.067Z",
    completed: true,
  },
  {
    id: 4,
    title: "Cooking",
    createdAt: "2024-04-13T20:43:34.067Z",
    completed: false,
  },
];

const filters = {
  title: "",
  sort: "latest",
  status: "completed",
};

searchInput.addEventListener("input", (e) => {
  filters.title = e.target.value.trim();
  searchNotes(notesList, filters);
});

function searchNotes(_notes, _filters) {
  const filteredNotes = _notes.filter((note) => {
    return note.title.toLowerCase().includes(_filters.title.toLowerCase());
  });
  createNotes(filteredNotes);
}

function createNotes(notes) {
  let result = "";
  notes.forEach((note) => {
    result += `
    <tr>
      <td>${note.id}</td>
      <td>${note.title}</td>
      <td>${new Date(note.createdAt).toLocaleDateString("fa-IR")}</td>
      <td>${note.completed}</td>
      </tr>
      `;
  });
  table.innerHTML = result;
}
searchNotes(notesList, filters);
