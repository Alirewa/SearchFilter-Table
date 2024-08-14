const searchInput = document.querySelector("#search-input");
const selectFilter = document.querySelector("#select-filter");
const selectSort = document.querySelector("#select-sort");
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
  status: "all",
};

searchInput.addEventListener("input", (e) => {
  filters.title = e.target.value.trim();
  filterNotes(notesList, filters);
});

selectFilter.addEventListener("change", (e) => {
  filters.status = e.target.value;
  filterNotes(notesList, filters);
});

selectSort.addEventListener("change", (e) => {
  filters.sort = e.target.value;
  filterNotes(notesList, filters);
});

function filterNotes(data, search) {
  const filteredNotes = data.filter((note) => {
    return note.title.toLowerCase().includes(search.title.toLowerCase());
  });

  const sortedNotes = filteredNotes.sort((a, b) => {
    if (filters.sort === "latest") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    } else if (filters.sort === "earliest") {
      return new Date(a.createdAt) - new Date(b.createdAt);
    }
  });

  switch (filters.status) {
    case "completed": {
      renderNotes(sortedNotes.filter((t) => t.completed));
      break;
    }
    case "uncompleted": {
      renderNotes(sortedNotes.filter((t) => !t.completed));
      break;
    }
    default:
      renderNotes(sortedNotes);
  }
}

function renderNotes(notes) {
  console.log("render");

  let result = "";
  notes.forEach((note) => {
    result += `
    <tr>
      <td>${note.id}</td>
      <td>${note.title}</td>
      <td>${new Date(note.createdAt).toLocaleDateString("fa-IR")}</td>
      <td class="${note.completed === false ? "color-red" : "color-green"}">${
      note.completed
    }</td>
      </tr>
      `;
  });

  table.innerHTML = result;
}

filterNotes(notesList, filters);
