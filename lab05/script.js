function validateForm() {
  const pib = document.getElementById('pib');
  const group = document.getElementById('group');
  const phone = document.getElementById('phone');
  const address = document.getElementById('address');
  const email = document.getElementById('email');

  const fields = [
    {
      input: pib,
      regex: /^[A-Za-zА-Яа-яІіЇїЄєҐґ]+\s[A-Za-zА-Яа-яІіЇїЄєҐґ]\.[A-Za-zА-Яа-яІіЇїЄєҐґ]\.$/
    },
    {
      input: group,
      regex: /^[A-Za-zА-Яа-яІіЇїЄєҐґ]{2}-\d{2}$/
    },
    {
      input: phone,
      regex: /^[A-Za-zА-Яа-яІіЇїЄєҐґ]{2}\s№\d{6}$/
    },
    {
      input: address,
      regex: /^м\.\s\d{7}$/
    },
    {
      input: email,
      regex: /^[\w.-]+@[\w.-]+\.[a-z]{2,}$/i
    }
  ];

  let isValid = true;
  let resultData = "<h3>Введені дані:</h3><ul>";

  fields.forEach(field => {
    field.input.classList.remove('error');
    if (field.input.nextElementSibling) {
      field.input.nextElementSibling.style.display = 'none';
    }
  });

  fields.forEach(field => {
    const val = field.input.value.trim();
    if (!field.regex.test(val)) {
      field.input.classList.add('error');
      if (field.input.nextElementSibling) {
        field.input.nextElementSibling.style.display = 'block';
      }
      isValid = false;
    } else {
      const labelText = field.input.previousElementSibling.innerText;
      resultData += `<li><b>${labelText}:</b> ${val}</li>`;
    }
  });

  resultData += "</ul>";

  if (isValid) {
    const win = window.open("", "Результат", "width=400,height=400");
    win.document.write(`
            <html>
            <head><title>Результат</title></head>
            <body style="font-family: Arial; padding: 20px;">
                ${resultData}
                <button onclick="window.close()" style="margin-top:20px; padding:10px;">Закрити</button>
            </body>
            </html>
        `);
  }
}

const VARIANT_NUMBER = 10;

const table = document.getElementById('gameTable');
const colorPicker = document.getElementById('colorPicker');

function createTable() {
  let counter = 1;

  for (let i = 0; i < 6; i++) { // 6 рядків
    const row = document.createElement('tr');

    for (let j = 0; j < 6; j++) { // 6 стовпців
      const cell = document.createElement('td');
      cell.innerText = counter;

      if (counter === VARIANT_NUMBER) {
        cell.style.fontWeight = "bold";
        cell.style.border = "2px solid blue";
        cell.style.cursor = "pointer";

        addInteractions(cell);
      }

      row.appendChild(cell);
      counter++;
    }
    table.appendChild(row);
  }
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function addInteractions(cell) {
  cell.addEventListener('mouseover', function() {
    this.style.backgroundColor = getRandomColor();
  });

  cell.addEventListener('click', function() {
    this.style.backgroundColor = colorPicker.value;
  });

  cell.addEventListener('dblclick', function() {
    const selectedColor = colorPicker.value;
    const parentRow = this.parentElement;
    const cellsInRow = parentRow.children;
    const startIndex = this.cellIndex;

    for (let i = startIndex; i < cellsInRow.length; i += 2) {
      cellsInRow[i].style.backgroundColor = selectedColor;
    }
  });
}

createTable();