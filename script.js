// Code for switch mode starts here

const checkMode = () => {
  if (colorSwitch.checked) {
    darkModeOn();
  } else {
    darkModeOff();
  }
}

// Get theme checkbox
const colorSwitch = document.getElementById('input-theme');
colorSwitch.addEventListener('click', checkMode);

  
const darkModeOn = () => {
  document.body.classList.add('dark-mode');
}

const darkModeOff = () => {
  document.body.classList.remove('dark-mode');
}