const paragraph = document.getElementsByTagName("p")
const buttons = document.querySelectorAll('button');
let answer 
buttons.forEach((button) => {
  if(button.innerHTML == "="){
    button.addEventListener('click', () => {
      answer = eval(paragraph[0].innerHTML)
      paragraph[0].innerHTML = answer
    });
  }else if(button.innerHTML == "AC"){
    button.addEventListener('click', () => {
      paragraph[0].innerHTML = ""
    });
  }else{
    button.addEventListener('click', () => {
      paragraph[0].innerHTML += button.innerHTML
    });
  }
});