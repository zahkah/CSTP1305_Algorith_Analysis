// JSON data
const data = [
  { "id": 1, "name": "Apple", "category": "Fruits", "price": 0.5, "inStock": true, "description": "A crisp, sweet red apple.", "nutrition": { "calories": 52, "fat": 0.2, "carbohydrates": 14, "protein": 0.3 } },
  { "id": 2, "name": "Banana", "category": "Fruits", "price": 0.3, "inStock": true, "description": "A ripe, yellow banana.", "nutrition": { "calories": 89, "fat": 0.3, "carbohydrates": 23, "protein": 1.1 } },
  { "id": 3, "name": "Carrot", "category": "Vegetables", "price": 0.2, "inStock": true, "description": "A fresh, crunchy carrot.", "nutrition": { "calories": 41, "fat": 0.2, "carbohydrates": 10, "protein": 0.9 } },
  { "id": 4, "name": "Bread", "category": "Bakery", "price": 2.5, "inStock": true, "description": "A loaf of freshly baked bread.", "nutrition": { "calories": 265, "fat": 3.2, "carbohydrates": 49, "protein": 9 } }
];

// Function to create and populate the table
function createTable() {
  const tableBody = document.querySelector("#myTable tbody");
  tableBody.innerHTML = ''; // Clear existing table rows

  data.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
          <td>${item.name}</td>
          <td>$${item.price}</td>
          <td>${item.description}</td>
      `;
      tableBody.appendChild(row);
  });
}

// Sort table data by the 'name' field
function sortTable() {
  data.sort((a, b) => a.name.localeCompare(b.name));
  createTable();
}

// Sort table by a specific column (not used in this example, but kept for completeness)
function sortTableByColumn(columnIndex) {
  const table = document.getElementById("myTable");
  let switching = true;
  let shouldSwitch, i, x, y;

  while (switching) {
      switching = false;
      const rows = table.rows;
      for (i = 1; i < rows.length - 1; i++) {
          shouldSwitch = false;
          x = rows[i].getElementsByTagName("td")[columnIndex];
          y = rows[i + 1].getElementsByTagName("td")[columnIndex];
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
              shouldSwitch = true;
              break;
          }
      }
      if (shouldSwitch) {
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;
      }
  }
}

// Populate the table on page load
window.onload = createTable;
