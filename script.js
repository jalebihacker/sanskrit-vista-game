document.addEventListener("DOMContentLoaded", () => {
  const englishList = document.getElementById('english-list');
  const sanskritList = document.getElementById('sanskrit-list');
  const result = document.getElementById('result');

  let draggedItem = null;

  englishList.addEventListener('dragstart', (event) => {
    draggedItem = event.target;
    setTimeout(() => event.target.classList.add('dragging'), 0);
  });

  englishList.addEventListener('dragend', (event) => {
    setTimeout(() => event.target.classList.remove('dragging'), 0);
    draggedItem = null;
  });

  sanskritList.addEventListener('dragover', (event) => {
    event.preventDefault();
  });

  sanskritList.addEventListener('drop', (event) => {
    event.preventDefault();
    if (draggedItem) {
      const sanskritWord = event.target.getAttribute('data-translation');
      const englishWord = draggedItem.getAttribute('data-translation');

      if (sanskritWord === englishWord) {
        event.target.style.backgroundColor = 'lightgreen';
        draggedItem.style.display = 'none';
        checkForWin();
      } else {
        result.textContent = 'Incorrect! Try again.';
      }
    }
  });

  function checkForWin() {
    const hiddenItems = englishList.querySelectorAll('li[style="display: none;"]');
    if (hiddenItems.length === englishList.children.length) {
      result.textContent = 'Congratulations! You matched all the words correctly!';
    }
  }
});
