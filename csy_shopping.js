const csy_theads = document.querySelectorAll('.csy_theadMenu');
const csy_tbodies = document.querySelectorAll('.csy_tbodyMenu');

function toggleTbody() {
  const tbody = this.nextElementSibling; // nextElementSibling : 바로 다음 형제요소
  tbody.style.display = tbody.style.display === 'none' ? 'table-row-group' : 'none';
}

function hideAllTbodies() {
  for (let i = 0; i < csy_tbodies.length; i++) {
    const tbody = csy_tbodies[i];
    tbody.style.display = 'none';
  }
}

function addEventListeners() {
  for (let i = 0; i < csy_theads.length; i++) {
    const thead = csy_theads[i];
    thead.addEventListener('click', toggleTbody);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  hideAllTbodies();
  addEventListeners();
});
