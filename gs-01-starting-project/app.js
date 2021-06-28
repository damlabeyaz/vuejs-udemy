Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ''
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue);
        }
    }
}).mount("#app");

/* const buttonEL = document.querySelector("button");
const inputEL = document.querySelector("input");
const listEL = document.querySelector("ul");

function addGoal() {
    const enteredValue = inputEL.value
    const newListEL = document.createElement("li");
    newListEL.textContent = enteredValue;
    listEL.appendChild(newListEL);
    inputEL.value = "";
}

buttonEL.addEventListener("click", addGoal); */