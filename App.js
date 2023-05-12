document.addEventListener('DOMContentLoaded', () => {
    const myList = document.querySelector('tbody');
  
    myList.addEventListener('click', (e) => {
      if (e.target.classList.contains('delete')) {
        const tr = e.target.closest('tr');
        tr.remove();
      }
    });
  });
  