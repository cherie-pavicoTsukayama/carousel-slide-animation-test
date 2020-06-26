const prev = document.getElementById('prev');
const parentBox = document.getElementById('parentBox');
const next = document.getElementById('next');
prev.addEventListener('click', handleClickPrev);
next.addEventListener('click', handleClickNext);
function handleClickPrev() {
  parentBox.classList.add('move-right');
}
function handleClickNext() {
  parentBox.classList.remove('move-right');

}
