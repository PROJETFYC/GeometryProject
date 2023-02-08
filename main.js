import drawLine from "/bibliotheques/svgPathHelper.js"

const svgContainer = document.querySelector("svg")

svgContainer.innerHTML = drawRectangle()

function drawRectangle() {
    const rectSize = 300

    return `${drawLine(0,0,rectSize,0)} 
     ${drawLine(rectSize,0,rectSize,rectSize)} 
     ${drawLine(0,0,0,rectSize)} 
     ${drawLine(0,rectSize,rectSize,rectSize)} `
}


