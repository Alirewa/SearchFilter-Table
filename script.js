const searchInput = document.querySelector("#search-input");
const table = document.querySelector("#tBodyData");
const selectFilter = document.querySelector("#select-filter");
let filterValue = "all";
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
selectFilter.addEventListener("change", (e) => {
  filterValue = e.target.value;
  filterNotes();
});

function filterNotes() {
  const notes = [...notesList];
  switch (filterValue) {
    case "all": {
      createNotes(notes);
      break;
    }
    case "completed": {
      const filteredNotes = notes.filter((t) => t.completed);
      createNotes(filteredNotes);
      break;
    }
    case "uncompleted": {
      const filteredNotes = notes.filter((t) => !t.completed);
      createNotes(filteredNotes);
      break;
    }
    default:
      createNotes(notes);
  }
}
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
      <td class="${note.type === "false" ? "color-red" : "color-green"}">${
      note.completed
    }</td>
      </tr>
      `;
  });
  table.innerHTML = result;
}
searchNotes(notesList, filters);
