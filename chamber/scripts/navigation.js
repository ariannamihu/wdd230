document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const navigation = document.querySelector('.navigation ul');

    menuIcon.addEventListener('click', function () {
        navigation.classList.toggle('show');
    });
});

const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	body.classList.toggle('dark-mode');
	main.classList.toggle('dark-mode');
});