// DOM Elements
const button = document.querySelector('.box__button')
const colorP = document.querySelector('.box__text')

function createRandomHexColor() {
    let digits = '0123456789ABCDEF'
    let color = '#'

    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * 16)
        color += digits[randomIndex]
    }

    return color
}

button.addEventListener('click', () => {
    let newColor = createRandomHexColor()
    colorP.textContent = newColor
    document.body.style.backgroundColor = newColor
})

