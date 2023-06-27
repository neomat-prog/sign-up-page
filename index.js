
const toggle = document.getElementById('toggleDark');

toggle.addEventListener('click', toggleDarkMode);

function toggleDarkMode(e) {

    const body = document.querySelector('body');
    const a = document.querySelector('a');
    const lineCSS1 = document.getElementById('css-line0');
    const lineCSS2 = document.getElementById('css-line1');

    // 1. Toggle darkMode and save to local storage
    const darkMode = !(localStorage.getItem("dark-mode") === "true");
    localStorage.setItem("dark-mode", darkMode);

    // 2. Update styles
    toggle.classList.toggle('bi-moon-fill');
    toggle.classList.toggle('bi-brightness-high-fill');

    if (darkMode) {
        body.style.background = '#151515';
        body.style.color = 'white';
        a.style.color = 'white'
        body.style.transition = '2s';
        lineCSS1.style.background = 'white';
        lineCSS2.style.background = 'white';
        lineCSS2.style.transition = '2s';
        lineCSS1.style.transition = '2s';
    } else {
        body.style.background = '#c6c6c6';
        body.style.color = 'black';
        a.style.color = 'black';
        body.style.transition = '2s';
        lineCSS1.style.background = 'black';
        lineCSS2.style.background = 'black';
    }
}