const options = [
  "Apple",
  "Apricot",
  "Banana",
  "Blueberry",
  "Grape",
  "Orange",
  "Peach",
  "Pear",
  "Pineapple",
  "Strawberry"
];

const input = document.getElementById("searchInput");
const suggestions = document.getElementById("suggestions");

function getMatches(searchTerm) {
  const normalizedSearch = searchTerm.trim().toLowerCase();

  if (!normalizedSearch) {
    return options;
  }

  return options.filter(option =>
    option.toLowerCase().includes(normalizedSearch)
  );
}

function renderSuggestions(matches) {
  suggestions.innerHTML = "";

  matches.forEach(option => {
    const item = document.createElement("div");

    item.textContent = option;
    item.className = "suggestion";

    item.addEventListener("click", () => {
      input.value = option;
      suggestions.innerHTML = "";
    });

    suggestions.appendChild(item);
  });
}

input.addEventListener("input", () => {
  const matches = getMatches(input.value);
  renderSuggestions(matches);
});

// or

// const options = [
//   "Apple",
//   "Apricot",
//   "Banana",
//   "Blueberry",
//   "Grape",
//   "Orange",
//   "Peach",
//   "Pear",
//   "Pineapple",
//   "Strawberry"
// ];

// const input = document.getElementById("searchInput");
// const suggestions = document.getElementById("suggestions");

// input.addEventListener("input", function () {
//   const searchTerm = input.value.trim().toLowerCase();

//   suggestions.innerHTML = "";

//   if (searchTerm === "") {
//     return;
//   }

//   const matches = options.filter(option =>
//     option.toLowerCase().includes(searchTerm)
//   );

//   matches.forEach(option => {
//     const item = document.createElement("div");

//     item.textContent = option;
//     item.classList.add("suggestion");

//     suggestions.appendChild(item);
//   });
// });