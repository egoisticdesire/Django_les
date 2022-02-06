const body = document.querySelector('body'),
    sidebar = body.querySelector('.sidebar'),
    toggle = body.querySelector('.toggle'),
    searchBtn = body.querySelector('.search-box'),
    modeSwitch = body.querySelector('.toggle-switch'),
    modeText = body.querySelector('.mode-text'),
    modeTableCard = body.querySelector('.card'),
    modeTableCardF = body.querySelector('.card-footer'),
    modeTableCardH = body.querySelector('.card-header'),
    logo = body.querySelector('ion-icon');


toggle.addEventListener('click', () => {
    sidebar.classList.toggle('close');
});

searchBtn.addEventListener('click', () => {
    sidebar.classList.remove('close');
});

modeSwitch.addEventListener('click', () => {
    body.classList.toggle('dark');
    logo.classList.toggle('dark');

    if (body.classList.contains('dark')) {
        modeText.innerText = 'Light mode';
    } else {
        modeText.innerText = 'Dark mode';
    }

    if (logo.classList.contains('dark')) {
        logo.style.color = '#ccc';
        modeTableCard.style.border = '1px solid rgba(204, 204, 204, .125)';
        modeTableCardF.style.borderTop = '1px solid rgba(204, 204, 204, .05)';
        modeTableCardH.style.borderBottom = '1px solid rgba(204, 204, 204, .05)';
    } else {
        logo.style.color = '#707070';
        modeTableCard.style.border = '1px solid rgba(112, 112, 112, .125)';
        modeTableCardF.style.borderTop = '1px solid rgba(112, 112, 112, .05)';
        modeTableCardH.style.borderBottom = '1px solid rgba(112, 112, 112, .05)';
    }
});