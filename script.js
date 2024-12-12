// script.js
let timer;
let elapsedTime = 0;
let isRunning = false;

const display = document.getElementById('display');
const lapsList = document.getElementById('laps');

// Add styling
document.body.style.backgroundColor = '#000';
display.style.color = '#fff';
display.style.fontFamily = 'monospace';
display.style.fontSize = '48px';
display.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.5)';
display.style.borderRadius = '50%';
display.style.width = '300px';
display.style.height = '300px';
display.style.display = 'flex';
display.style.alignItems = 'center';
display.style.justifyContent = 'center';
display.style.border = '2px solid #fff';
display.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.2)';
display.style.margin = '20px auto';

lapsList.style.color = '#fff';
lapsList.style.listStyle = 'none';
lapsList.style.padding = '10px';
lapsList.style.maxHeight = '200px';
lapsList.style.overflowY = 'auto';

function updateDisplay() {
  const hours = Math.floor(elapsedTime / 3600);
  const minutes = Math.floor((elapsedTime % 3600) / 60);
  const seconds = elapsedTime % 60;

  display.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  display.style.transform = 'scale(1.02)';
  setTimeout(() => {
    display.style.transform = 'scale(1)';
  }, 100);
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    display.style.borderColor = '#00ff00';
    timer = setInterval(() => {
      elapsedTime++;
      updateDisplay();
    }, 1000);
  }
}

function pauseTimer() {
  if (isRunning) {
    isRunning = false;
    display.style.borderColor = '#ff0000';
    clearInterval(timer);
  }
}

function resetTimer() {
  isRunning = false;
  clearInterval(timer);
  elapsedTime = 0;
  display.style.borderColor = '#fff';
  updateDisplay();
  lapsList.innerHTML = '';
}

function addLap() {
  const lapItem = document.createElement('li');
  lapItem.textContent = display.textContent;
  lapItem.style.padding = '5px';
  lapItem.style.margin = '5px 0';
  lapItem.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
  lapItem.style.borderRadius = '5px';
  lapItem.style.transition = 'all 0.3s';
  lapsList.appendChild(lapItem);
  lapItem.style.transform = 'scale(0)';
  setTimeout(() => {
    lapItem.style.transform = 'scale(1)';
  }, 50);
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.style.backgroundColor = '#333';
  button.style.color = '#fff';
  button.style.border = '1px solid #fff';
  button.style.padding = '10px 20px';
  button.style.margin = '5px';
  button.style.borderRadius = '5px';
  button.style.cursor = 'pointer';
  button.style.transition = 'all 0.3s';
  
  button.addEventListener('mouseover', () => {
    button.style.backgroundColor = '#555';
  });
  
  button.addEventListener('mouseout', () => {
    button.style.backgroundColor = '#333';
  });
});

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('lap').addEventListener('click', addLap);

updateDisplay(); // Initialize display