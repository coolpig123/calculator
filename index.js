const paragraph = document.getElementsByTagName("p")
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    paragraph[0].innerHTML += button.innerHTML
  });
});