let btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  let overlay = document.getElementById('overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'overlay';
    document.body.appendChild(overlay);
  }
  overlay.style.display = 'block';
});

document.getElementById('overlay').addEventListener('contextmenu', (e) => {
  e.preventDefault();
  overlay.remove();
});

let closeBtn = document.getElementById('close-btn');
closeBtn.addEventListener('click', () => {
  let overlay = document.getElementById('overlay');
  overlay.remove();
});