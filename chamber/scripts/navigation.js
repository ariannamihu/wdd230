document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const navigation = document.querySelector('.navigation ul');

    menuIcon.addEventListener('click', function () {
        navigation.classList.toggle('show');
    });
});