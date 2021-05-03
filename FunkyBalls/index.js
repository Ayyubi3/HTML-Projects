const canvas = document.querySelector("canvas")
const c = canvas.getContext('2d')

canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
    x: undefined,
    y: undefined
}

let minSize = 10
let maxSize = 40

addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight
})

addEventListener('mousemove', (event) => {
    mouse.x = event.clientX
    mouse.y = event.clientY
})


let obj = []
const randomcolorvalue = () => randomIntWithoutZeroFromRange(1, 255)
for (let i = 0; i < 1000; i++) {
    obj.push(
        new Circle(
            randomIntWithoutZeroFromRange(20, canvas.width - 30),
            randomIntWithoutZeroFromRange(20, canvas.height - 30),
            randomIntWithoutZeroFromRange(-1, 1), //dx
            randomIntWithoutZeroFromRange(-2, 2), //dy
            15, //radius
            `rgba(${randomcolorvalue()},${randomcolorvalue()},${randomcolorvalue()},${randomcolorvalue()})`))
}

const animate = () => {
    requestAnimationFrame(animate)

    c.clearRect(0, 0, canvas.width, canvas.height)


    obj.forEach(element => {
        //VELOCITY
        if (element.x + element.radius > canvas.width ||
            element.x - element.radius < 0) {
            element.dx = -element.dx
        }
        if (element.y + element.radius > canvas.height ||
            element.y - element.radius < 0) {
            element.dy = -element.dy
        }

        element.x += element.dx;
        element.y += element.dy;

        //RESIZE ON MOUSE
        if (distance(element.x, element.y, mouse.x, mouse.y) < 100) {
            if (element.radius < maxSize) { element.radius += 3 }
        } else if (element.radius > minSize) { element.radius -= 1 }

        element.draw()
    })

}

animate();