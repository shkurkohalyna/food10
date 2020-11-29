export const checkBoxEl = document.querySelector('#theme-switch-toggle');

const body = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const savedDataOfTheme = localStorage.getItem('Theme');
// console.log(savedDataOfTheme);

const parsedDataOfTheme = JSON.parse(savedDataOfTheme);
// console.log(parsedDataOfTheme);

const isLightTheme = parsedDataOfTheme === Theme.LIGHT;
// console.log(isLightTheme);

const isDarkTheme = parsedDataOfTheme === Theme.DARK;
// console.log(isDarkTheme);

if (isDarkTheme) {
  checkBoxEl.checked = true;
  body.classList.add(`${Theme.DARK}`);
} else {
  checkBoxEl.checked = false;
  body.classList.add(`${Theme.LIGHT}`);
}

checkBoxEl.addEventListener('input', onCheckBoxInput);

function onCheckBoxInput() {
  if (checkBoxEl.checked) {
    body.classList.add(`${Theme.DARK}`);
    body.classList.remove(`${Theme.LIGHT}`);
    localStorage.setItem('Theme', JSON.stringify(`${Theme.DARK}`));
  } else {
    body.classList.remove(`${Theme.DARK}`);
    body.classList.add(`${Theme.LIGHT}`);
    localStorage.setItem('Theme', JSON.stringify(`${Theme.LIGHT}`));
  }
}