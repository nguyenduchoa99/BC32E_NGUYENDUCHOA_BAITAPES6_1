const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];
let container = document.getElementById("colorContainer");
loadColorPick = () => {
    for (let i = 0; i < colorList.length; i++) container.innerHTML += 0 == i ? "<button class='color-button " + colorList[i] + " active'></button>" : "<button class='color-button " + colorList[i] + "'></button>";
}
    loadColorPick();
let colorPicker = document.getElementsByClassName("color-button"),
    house = document.getElementById("house");
for (let i = 0; i < colorPicker.length; i++)
    colorPicker[i].addEventListener("click", function () {
        changeColor(colorList[i], i);
    });
changeColor = (i, j) => {
    for (let i = 0; i < colorPicker.length; i++) colorPicker[i].classList.remove("active");
    colorPicker[j].classList.add("active"), (house.className = "house " + i);
};
