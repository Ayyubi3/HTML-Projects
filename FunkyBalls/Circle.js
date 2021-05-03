class Circle {
    constructor(x, y, dx, dy, radius, color) {
        this.x = x
        this.y = y

        this.dx = dx
        this.dy = dy

        this.radius = radius
        this.color = color
    }
    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
        c.closePath()
    }
}