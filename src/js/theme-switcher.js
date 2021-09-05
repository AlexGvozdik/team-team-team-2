const toggleSwitch = document.querySelector('.theme-switcher input[type="checkbox"]');//ссылка на тугл

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};// место хранения тем

toggleSwitch.addEventListener('change', switchTheme, false);//прослушка на переключателе тем

export function switchTheme(e) {
  if (e.target.checked) {//проверка положения тугла
    document.documentElement.setAttribute('data-theme', Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    document.documentElement.setAttribute('data-theme', Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}// функция смены темы

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;// проверку текущей темы

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === Theme.DARK) {
    toggleSwitch.checked = true;
  }//проверка положения переключателя
}
