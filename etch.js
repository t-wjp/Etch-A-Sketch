
// Get reference to display container
const divContainer = document.getElementById('container');

// Add "container" class to the divContainer
divContainer.classList.add('container');


// Event listeners

// Event listner to clear and generate new grid
document.getElementById('clear').addEventListener('click', function () {
  const input = prompt("Enter the number of squares per side for the new grid:");
  if (input !== null) {
    const gridSize = parseInt(input, 10);
    if (isNaN(gridSize) || gridSize <= 0 || gridSize > 99) {
      alert("Please enter a valid positive number that is less than 100.");
    } else {
      createGrid(gridSize);
    }
  }
});

// Event listener to simulate button pressing action
const button = document.getElementById('clear');

button.addEventListener('mousedown', () => {
  button.classList.add('pressed');
});

button.addEventListener('mouseup', () => {
  button.classList.remove('pressed');
});

button.addEventListener('mouseleave', () => {
  button.classList.remove('pressed');
});


// FUNCTIONS 

function changeDivColorAndDarken(div) {
  // Get the current opacity, default to 1 if not set
  let currentOpacity = parseFloat(div.style.opacity);
  // If the opacity is at 0, do nothing further
  if (currentOpacity <= 0) {
    div.style.opacity = "0"; // Ensure it stays at 0
    return; // Exit the function early
  }
  // If no background color is set, assign a random color
  if (!div.style.backgroundColor) {
    div.style.backgroundColor = getRandomColor();
  }
  // Reduce opacity progressively
  div.style.opacity = (currentOpacity - 0.1).toFixed(1);
}

// Function to generate random colors
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to create a dynamic grid
function createGrid(gridSize) {
  // Clear existing panels
  clearGrid();
  // Constant container size
  const containerSize = 640;

  // Create grid panels
  for (let i = 0; i < gridSize * gridSize; i++) {
    const panel = document.createElement('div');
    panel.classList.add('panel');
    panel.style.flex = `0 0 calc(100% / ${gridSize})`; // Adjust width
    panel.style.height = `${containerSize / gridSize}px`; // Adjust height
    panel.style.opacity = '1'; // Start fully visible
    panel.style.backgroundColor = ''; // No color initially

    // Add event listener for color change and darkening
    panel.addEventListener('mouseover', () => {
      changeDivColorAndDarken(panel);
    });

    divContainer.appendChild(panel);
  }
}

// Function to clear grid
function clearGrid() {
  while (divContainer.firstChild) {
    divContainer.removeChild(divContainer.firstChild);
  }
}


// Create 16x16 grid of divs as starting screen
createGrid(16);





