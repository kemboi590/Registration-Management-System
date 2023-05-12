document.addEventListener('DOMContentLoaded', () => {
    const myList = document.querySelector('tbody');
    const addForm = document.getElementById('addForm');

    myList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete')) {
            const tr = e.target.closest('tr');
            tr.remove();
        }
    });

    addForm.addEventListener('submit', (e) => {
        e.preventDefault();
    });
    
});
