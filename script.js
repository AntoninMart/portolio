let theme;

window.onload = function () {
    theme = localStorage.getItem("theme");
    if (!theme) {
        theme = "dark";
        localStorage.setItem("theme", theme);
    }
    changeCss();
}

function changeLight() {
    theme == "dark" ? theme = "light" : theme = "dark";
    localStorage.setItem("theme", theme);
    changeCss();
}

function changeCss() {
    let darkLink = document.getElementById('dark-css');
    let lightLink = document.getElementById('light-css');
    if (theme == "light") {
        darkLink.setAttribute('media', 'none');
        lightLink.setAttribute('media', '');
    } else {
        lightLink.setAttribute('media', 'none');
        darkLink.setAttribute('media', '');
    }
}