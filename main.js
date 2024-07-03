const container = document.querySelector(".container");
const btn = document.querySelector(".create")
const btn2 = document.querySelector(".reset")


function createGrid(size = 16) {
    container.innerHTML = "";

    const totalSquares = size * size;
    const squareSize = 500 / size;

    for (let i = 0; i < totalSquares; i++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        grid.style.width = `${squareSize}px`;
        grid.style.height = `${squareSize}px`;
        grid.addEventListener('mouseover', changeColor);
        container.appendChild(grid);
    }
}

function changeColor(event) {
    event.target.style.backgroundColor = "red";
}


btn.addEventListener('click', function () {
    let size = prompt('Enter new grid size:');
    if (size > 0 && size <= 100) {
        createGrid(size);
    }
});

btn2.addEventListener("click", function () {
    container.innerHTML = "";
});
