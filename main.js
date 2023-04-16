const wrapper = document.createElement("div");

const input = document.createElement("input");
input.placeholder = "querySelector";
input.type = "text";
wrapper.appendChild(input);

const button = document.createElement("button");
button.innerHTML = "submit";
wrapper.appendChild(button);

const content = document.createElement("div");
content.style.display = "flex";
content.style.gap = "20px";
wrapper.appendChild(content);

document.body.prepend(wrapper);

button.addEventListener("click", () => {
  content.innerHTML = "";
  const inputVal = input.value;
  const element = window[inputVal] || document.querySelector(inputVal);
  if (element) {
    showProtos(element);
  } else {
    content.innerHTML = "Not found";
  }
});

const showProtos = (element) => {
  let proto = Object.getPrototypeOf(element);
  while (proto) {
    const div = document.createElement("div");
    div.style.display = "flex";
    div.style.flexDirection = "column";
    const p = document.createElement("p");
    p.innerHTML = typeof proto.constructor === "function" ? proto.constructor.name : proto.constructor.constructor.name;
    const button = document.createElement("button");
    const protoToShow = proto;
    button.onclick = (() => {
      console.log(protoToShow);
    });
    button.innerHTML = "console.log it";
    button.style.width = "100px";
    div.appendChild(p);
    div.appendChild(button);
    content.appendChild(div);
    proto = Object.getPrototypeOf(proto); 
  }
};
