const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.nave');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});