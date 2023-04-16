const input = document.querySelector('.debugger_input');
const button = document.querySelector('.debugger_submit');
const content = document.querySelector('.debugger_content');

button.addEventListener('click', () => {
  const inputVal = input.value;
  const JSed = window[inputVal];
  const HTMLed = document.querySelector(input.value);
  if (JSed) {
    const proto = Object.getPrototypeOf(JSed);
    // input.value = '';
    console.log(proto);
  } else if (HTMLed) {
    showHTMLProtos(HTMLed);
  } else {
    console.log('not found');
  }
});

const showHTMLProtos = (HTMLed) => {
  let element = HTMLed.constructor;
  while (true) {
    try {
      const div = document.createElement('div');
      div.style.display = "flex";
      div.style.flexDirection = "column";
        const p = document.createElement('p');
        p.innerHTML = typeof element === "function" ? element.name : element.constructor.name;
        const button = document.createElement('button');
        const elementToShow = element;
        button.onclick = (() => {
          console.log(elementToShow);
          console.log(typeof elementToShow);
        });
        button.innerHTML = "console.log it";
        button.style.width = "100px";
        div.appendChild(p);
        div.appendChild(button);
      content.appendChild(div);
      element = element.__proto__; 
    } catch (error) {
      return;
    }
  }
};
