let count = 0;
let countEl = document.getElementById("count-el");
let saveEL = document.getElementById("save-el");
let CountButtonEl = document.getElementById("btn-increment");
let SaveButtonEl = document.getElementById("btn-save");

CountButtonEl.addEventListener("click", () => {
        count += 1;
        countEl.textContent = count;
    });
SaveButtonEl.addEventListener("click", () => {
        let countStr = `${count} - `;
        saveEL.textContent += countStr;
        count = 0;
        countEl.textContent = 0;
    });
