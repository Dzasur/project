const board = document.querySelector('#board');
const SQUARE_NUMBER = 600
const colors = ['white','red', 'blue', 'green', 'yellow', 'pink', 'blueviolet', 'purple', '#3cad78']
for (let i = 0; i < SQUARE_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor (element) {
    const color = getColor()
    element.style.backgroundColor = color
}
function removeColor (element) {
    element.style.backgroundColor = '#1d1d1d'
}
function getColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}