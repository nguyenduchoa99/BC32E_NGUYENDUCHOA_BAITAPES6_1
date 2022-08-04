const heading = document.querySelector(".heading");
const chars = [...heading.innerText];
jump = (i) => {
    return [...i].map(i => `<span>${i}</span>`).join("");
};
heading.innerHTML = jump(chars);