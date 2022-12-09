let submitformEl = document.getElementById("submitform");
let buttonEl = document.getElementById("button");
let paraEl = document.getElementById("para");
let nameEl = document.getElementById("name");
let kpopEl = document.getElementById("kpop");
let nameerrEl = document.getElementById("nameerr");
let kpoperrEl = document.getElementById("kpoperr");
nameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameerrEl.textContent = "Required*";
    } else {
        nameerrEl.textContent = "";
    }
});

kpopEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        kpoperrEl.textContent = "Required*";
    } else {
        kpoperrEl.textContent = "";
    }
});

function submit() {
    paraEl.textContent = "Submitted Successfully";
}
submitformEl.addEventListener("submit", function(event) {
    event.preventDefault();
    submit();
});