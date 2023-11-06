//Js para inyeccion de estado de la tarea
const estadoSelect = document.getElementById("estado");
const selectedState = document.getElementById("selectedState");

estadoSelect.addEventListener("change", function () {
    selectedState.innerText = "Estado seleccionado: " + estadoSelect.value;
});