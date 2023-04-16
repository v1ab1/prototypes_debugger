const input = document.querySelector('.debugger_input');
const button = document.querySelector('.debugger_submit');
const content = document.querySelector('.debugger_content');

button.addEventListener('click', () => {
  content.innerHTML = "";
  const inputVal = input.value;
  const JSed = window[inputVal];
  const HTMLed = document.querySelector(input.value);
  if (JSed) {
    showJSProtos(JSed);
  } else if (HTMLed) {
    showHTMLProtos(HTMLed);
  } else {
    console.log('not found');
  }
});

const showJSProtos = (JSed) => {
  let proto = Object.getPrototypeOf(JSed);
  while (proto) {
    const div = document.createElement('div');
    div.style.display = "flex";
    div.style.flexDirection = "column";
      const p = document.createElement('p');
      p.innerHTML = proto.constructor.name;
      const button = document.createElement('button');
      const elementToShow = proto;
      button.onclick = (() => {
        console.log(elementToShow);
      });
      button.innerHTML = "console.log it";
      button.style.width = "100px";
      div.appendChild(p);
      div.appendChild(button);
    content.appendChild(div);
    proto = Object.getPrototypeOf(proto); 
  }
};

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
        });
        button.innerHTML = "console.log it";
        button.style.width = "100px";
        div.appendChild(p);
        div.appendChild(button);
      content.appendChild(div);
      element = Object.getPrototypeOf(element); 
    } catch (error) {
      return;
    }
  }
};
