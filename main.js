const input = document.querySelector('.debugger_input');
const button = document.querySelector('.debugger_submit');
const button2 = document.querySelector('.debugger_submit2');


button.addEventListener('click', () => {
  const inputVal = input.value;
  const constr = window[inputVal];
  if (!constr) {
    console.log(`Constructor ${inputVal} not found`);
    return;
  }
  const proto = Object.getPrototypeOf(constr);
  input.value = '';
  console.log(proto);
});

button2.addEventListener('click', () => {
  const inputValue = document.querySelector(input.value);
  input.value = '';
  console.log(inputValue.constructor);
});