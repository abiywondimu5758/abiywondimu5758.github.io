document.querySelector('#print-cv')?.addEventListener('click', () => window.print());

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
