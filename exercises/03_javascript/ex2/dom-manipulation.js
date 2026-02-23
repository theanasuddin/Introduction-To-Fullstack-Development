/**
 * Sort table rows alphabetically based on the values in a column
 *
 * @param {Number} col column index (zero based)
 * @param {HTMLTableElement} table the table to be sorted
 */
function sortTableByColumn(col, table) {
  // TODO: Implement this function as instructed
  const tbody = table.querySelector("tbody");
  const rows = Array.from(tbody.querySelectorAll("tr"));

  let sortDir = "asc";
  if (table.dataset.sortCol == col) {
    sortDir = table.dataset.sortDir === "asc" ? "desc" : "asc";
  }

  rows.sort((a, b) => {
    const aText = a.children[col].textContent.trim();
    const bText = b.children[col].textContent.trim();
    return sortDir === "asc"
      ? aText.localeCompare(bText)
      : bText.localeCompare(aText);
  });

  rows.forEach((row) => tbody.appendChild(row));

  table.dataset.sortCol = col;
  table.dataset.sortDir = sortDir;
}

/**
 * DO NOT EDIT THE CODE BELOW!
 *
 * The code below is there just to make it easier to test the code.
 *
 * If your function works correctly you should be able to sort the table
 * simply by clicking any column heading and the table should be immediately
 * sorted by values in that column.
 */

// find the table element
const table = document.getElementById('sortable');

// attach an event listener to each th element's click event
table.querySelectorAll('thead th').forEach((th, i) =>
  th.addEventListener('click', () => {
    sortTableByColumn(i, table);
  })
);