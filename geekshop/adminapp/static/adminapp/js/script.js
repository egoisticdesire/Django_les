const body = document.querySelector('body'),
    sidebar = body.querySelector('.sidebar'),
    toggle = body.querySelector('.toggle'),
    searchBtn = body.querySelector('.search-box'),
    themeSwitcher = body.querySelector('.toggle-switch'),
    modeText = body.querySelector('.mode-text'),
    modeTableCard = body.querySelector('.card'),
    modeTableCardF = body.querySelector('.card-footer'),
    modeTableCardH = body.querySelector('.card-header'),
    logo = body.querySelector('ion-icon');

searchBtn.addEventListener('click', () => {
    sidebar.classList.remove('close');
    localStorage.setItem('sidebar', sidebar.classList);
});

toggle.addEventListener('click', () => {
    sidebar.classList.toggle('close');
    localStorage.setItem('sidebar', sidebar.classList);
});

themeSwitcher.addEventListener('click', () => {
    body.classList.toggle('dark');
    logo.classList.toggle('dark');
    localStorage.setItem('theme', body.classList);
});

window.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark');
        modeText.innerText = 'Light mode';
        logo.style.color = '#ccc';
        modeTableCard.style.border = '1px solid rgba(204, 204, 204, .125)';
        modeTableCardF.style.borderTop = '1px solid rgba(204, 204, 204, .05)';
        modeTableCardH.style.borderBottom = '1px solid rgba(204, 204, 204, .05)';
    } else {
        body.classList.remove('dark');
        modeText.innerText = 'Dark mode';
        logo.style.color = '#707070';
        modeTableCard.style.border = '1px solid rgba(112, 112, 112, .125)';
        modeTableCardF.style.borderTop = '1px solid rgba(112, 112, 112, .05)';
        modeTableCardH.style.borderBottom = '1px solid rgba(112, 112, 112, .05)';
    }
    if (localStorage.getItem('sidebar') === 'sidebar close') {
        sidebar.classList.add('close');
    } else {
        sidebar.classList.remove('close');
    }
});
