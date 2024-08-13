const searchInput = document.querySelector("#search-input");
const selectFilter = document.querySelector("#select-filter");
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
  sort: "eraliest",
  status: "all",
};
let filterValue = filters.status;
let sortValue = filters.sort;
searchInput.addEventListener("input", (e) => {
  filters.title = e.target.value.trim();
  searchNotes(notesList, filters);
});
selectFilter.addEventListener("change", (e) => {
  filterValue = e.target.value;
  filterNotes();
});

function sortNotes() {
  let sort = ["latest", "eraliest"];
  sort = sortValue;
  notes.sort((a, b) => {
    if (filters.sort === "latest") {
      return a.createdAt - b.createdAt;
    } else if (filters.sort === "eraliest") {
      return b.createdAt - a.createdAt;
    }
  });
  console.log(notes);
  return notes;
}

function filterNotes(_filters) {
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
searchNotes(notesList, filters);
function createNotes(notes) {
  let result = "";
  notes.forEach((note) => {
    result += `
    <tr>
      <td>${note.id}</td>
      <td>${note.title}</td>
      <td class="createdAt">${new Date(note.createdAt).toLocaleDateString(
        "fa-IR"
      )}</td>
      <td class="${note.completed === false ? "color-red" : "color-green"}">${
      note.completed
    }</td>
      </tr>
      `;
  });

  table.innerHTML = result;
  const createdAtSort = document.querySelector(".createdAt");
  createdAtSort.addEventListener("click", (e) => {
    sortNotes();
  });
}
