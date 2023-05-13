
document.addEventListener('DOMContentLoaded', () => {
    const myList = document.querySelector('tbody'); // Select the table body
    const addForm = document.getElementById('addForm'); // Select the form
  
    // Load data from local storage
    loadFromLocalStorage(); 
  
    myList.addEventListener('click', (e) => {
      if (e.target.classList.contains('delete')) {  // Check if the clicked element has the class 'delete'
        const tr = e.target.closest('tr');  // Select the closest row
        tr.remove();  // Remove the row
        saveToLocalStorage(); // Update local storage after deleting a row
      }
    });
  
    addForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent the default form submission
  
      const nameValue = addForm.querySelector('input[name="name"]').value;  // Get the value of the name input
      const idValue = addForm.querySelector('input[name="idno"]').value; // Get the value of the id input
      const countryValue = addForm.querySelector('select[name="country"]').value; // Get the value of the country select    
      const languageValue = addForm.querySelector('select[name="language"]').value; // Get the value of the language select
  
      const tr = document.createElement('tr');              // Create a new row
      const nameCell = document.createElement('td');        // Create a new cell
      const idCell = document.createElement('td');          // Create a new cell
      const countryCell = document.createElement('td');     // Create a new cell
      const languageCell = document.createElement('td');    // Create a new cell
      const deleteBtnCell = document.createElement('td');   // Create a new cell
      const deleteBtn = document.createElement('button');   // Create a new button
  
      // Set text content
      nameCell.textContent = nameValue;  // Set the value of the name input as the text content of the cell
      idCell.textContent = idValue;   // Set the value of the id input as the text content of the cell
      countryCell.textContent = countryValue;       // Set the value of the country select as the text content of the cell
      languageCell.textContent = languageValue;     // Set the value of the language select as the text content of the cell
      deleteBtn.textContent = 'Delete';        // Set the text content of the button
  
      // Add classes
      tr.classList.add('mylist');               // Add the class 'mylist' to the row
      deleteBtn.classList.add('delete');        // Add the class 'delete' to the button
  
      // Append cells to the row
      tr.appendChild(nameCell);     // Append the name cell to the row
      tr.appendChild(idCell);       // Append the id cell to the row
      tr.appendChild(countryCell);      // Append the country cell to the row
      tr.appendChild(languageCell);     // Append the language cell to the row
      deleteBtnCell.appendChild(deleteBtn);     // Append the button to the cell
      tr.appendChild(deleteBtnCell);        // Append the cell to the row
  
      // Append row to the table
      myList.appendChild(tr);       // Append the row to the table
  
      // Clear input
      addForm.querySelector('input[name="name"]').value = '';  // Clear the value of the name input
      addForm.querySelector('input[name="idno"]').value = '';
      addForm.querySelector('select[name="country"]').value = '';
      addForm.querySelector('select[name="language"]').value = '';
  
      saveToLocalStorage(); // Update local storage after adding a row
    });
  
    function saveToLocalStorage() {
      const rows = myList.querySelectorAll('.mylist');
      const data = [];
  
      rows.forEach((row) => {
        const name = row.children[0].textContent;
        const id = row.children[1].textContent;
        const country = row.children[2].textContent;
        const language = row.children[3].textContent;
  
        data.push({ name, id, country, language });
      });
  
      localStorage.setItem('registrationData', JSON.stringify(data));
    }
  
    function loadFromLocalStorage() {
      const data = JSON.parse(localStorage.getItem('registrationData'));
  
      if (data) {
        data.forEach((item) => {
          const tr = document.createElement('tr');
          const nameCell = document.createElement('td');
          const idCell = document.createElement('td');
          const countryCell = document.createElement('td');
          const languageCell = document.createElement('td');
          const deleteBtnCell = document.createElement('td');
          const deleteBtn = document.createElement('button');
  
          nameCell.textContent = item.name;
          idCell.textContent = item.id;
          countryCell.textContent = item.country;
          languageCell.textContent = item.language;
          deleteBtn.textContent = 'Delete';
  

tr.classList.add('mylist');
deleteBtn.classList.add('delete');

tr.appendChild(nameCell);
tr.appendChild(idCell);
tr.appendChild(countryCell);
tr.appendChild(languageCell);
deleteBtnCell.appendChild(deleteBtn);
tr.appendChild(deleteBtnCell);

myList.appendChild(tr);
});
}

}
});
