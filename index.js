// Block
let block = document.querySelector('.block');

// Block Properties 
let blockProperties = document.querySelector('.block-properties');

// Inputs
let horizontalShadowInput = document.getElementById('input-horizontal-shadow');
let verticalShadowInput = document.getElementById('input-vertical-shadow');
let blurRadiusInput = document.getElementById('input-blur-radius');
let spreadRadiusInput = document.getElementById('input-spread-radius');
let shadowColorInput = document.getElementById('input-shadow-color')
let alphaInput = document.getElementById('input-alpha');

// Vars
let horizontalShadowValue = 0;
let verticalShadowValue = 0;
let blurRadiusValue = 0;
let spreadRadiusValue = 0;
let shadowColorValue = hexToRGB('#00000');
let alphaValue = 100;

// Add input event listeners
horizontalShadowInput.addEventListener('input', (event) => setHorizontalBoxShadow(event.target.value));

verticalShadowInput.addEventListener('input', (event) => setVerticalBoxShadow(event.target.value));

blurRadiusInput.addEventListener('input', (event) => setBlurRadius(event.target.value));

spreadRadiusInput.addEventListener('input', (event) => setSpreadRadius(event.target.value));

shadowColorInput.addEventListener('change', (event) => setShadowColor(event.target.value));

alphaInput.addEventListener('input', (event) => setAlpha(event.target.value));

// Reset properties
horizontalShadowInput.addEventListener('dblclick', (event) => {
  setHorizontalBoxShadow(0)
  horizontalShadowInput.value = 0;
});

verticalShadowInput.addEventListener('dblclick', (event) => {
  setVerticalBoxShadow(0)
  verticalShadowInput.value = 0;
});

blurRadiusInput.addEventListener('dblclick', (event) => {
  setBlurRadius(0)
  blurRadiusInput.value = 0;
});

spreadRadiusInput.addEventListener('dblclick', (event) => {
  setSpreadRadius(0)
  spreadRadiusInput.value = 0;
});

spreadRadiusInput.addEventListener('dblclick', (event) => {
  setAlpha(100)
  spreadRadiusInput.value = 100;
});


// Functions
function setHorizontalBoxShadow(value) {
  horizontalShadowValue = value;
  let boxShadowStyle = `${horizontalShadowValue}px ${verticalShadowValue}px ${blurRadiusValue}px ${spreadRadiusValue}px rgba(${shadowColorValue},${alphaValue})`;
  block.style.boxShadow = boxShadowStyle;
  setBoxShadowText(boxShadowStyle);
}

function setVerticalBoxShadow(value) {
  verticalShadowValue = value;
  let boxShadowStyle = `${horizontalShadowValue}px ${verticalShadowValue}px ${blurRadiusValue}px ${spreadRadiusValue}px rgba(${shadowColorValue},${alphaValue})`;
  block.style.boxShadow = boxShadowStyle;
  setBoxShadowText(boxShadowStyle);
}

function setBlurRadius(value) {
  blurRadiusValue = value;
  let boxShadowStyle = `${horizontalShadowValue}px ${verticalShadowValue}px ${blurRadiusValue}px ${spreadRadiusValue}px rgba(${shadowColorValue},${alphaValue})`;
  block.style.boxShadow = boxShadowStyle;
  setBoxShadowText(boxShadowStyle);
}

function setSpreadRadius(value) {
  spreadRadiusValue = value;
  let boxShadowStyle = `${horizontalShadowValue}px ${verticalShadowValue}px ${blurRadiusValue}px ${spreadRadiusValue}px rgba(${shadowColorValue},${alphaValue})`;
  block.style.boxShadow = boxShadowStyle;
  setBoxShadowText(boxShadowStyle);
}

function setShadowColor(value) {
  shadowColorValue = hexToRGB(value);
  console.log(shadowColorValue)
  let boxShadowStyle = `${horizontalShadowValue}px ${verticalShadowValue}px ${blurRadiusValue}px ${spreadRadiusValue}px rgba(${shadowColorValue},${alphaValue})`;
  block.style.boxShadow = boxShadowStyle;
  setBoxShadowText(boxShadowStyle);
}

function setAlpha(value) {
  alphaValue = value / 100;
  let boxShadowStyle = `${horizontalShadowValue}px ${verticalShadowValue}px ${blurRadiusValue}px ${spreadRadiusValue}px rgba(${shadowColorValue},${alphaValue})`;
  block.style.boxShadow = boxShadowStyle;
  setBoxShadowText(boxShadowStyle);
}

function setBoxShadowText(boxShadowProperties) {
  blockProperties.innerHTML = `box-shadow: ${boxShadowProperties}`;
}

function hexToRGB(value) {
  // Value format => RRGGBB
  let rHex = value.slice(1, 3);
  let gHex = value.slice(3, 5);
  let bHex = value.slice(5);

  // De hexadecimal a decimal
  let r = parseInt(rHex, 16);
  let g = parseInt(gHex, 16);
  let b = parseInt(bHex, 16);

  return `${r}, ${g}, ${b}`;
}
