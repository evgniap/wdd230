const hamButton = document.querySelector('.nave');
const navigation = document.querySelector('#menu');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

