const pre = document.querySelector('pre')

document.addEventListener('mousemove', (e) => {
    rotateElement(e, pre)
})

function rotateElement(event, element) {
    //get mouse position
    const x = event.clientX
    const y = event.clientY

    //find the middle
    const middleX = window.innerWidth / 2
    const middleY = window.innerHeight / 2

    //get offset form middle
    const offsetX = ((x - middleX) / middleX) * 45
    const offsetY = ((y - middleY) / middleY) * 45

    element.style.setProperty('--rotateX', -1 * offsetY + 'deg')
    element.style.setProperty('--rotateY', offsetX + 'deg')
}