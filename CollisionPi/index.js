const canvas = document.querySelector("canvas")
const ctx = canvas.getContext('2d')

canvas.width = innerWidth;
canvas.height = innerHeight - 100;

class Block {
    constructor(x, velocity, size, mass, color) {
        this.x = x;
        this.y = 400
        this.v = velocity
        this.size = size;
        this.mass = mass

        this.color = color;
    }

    update() {
        this.x += this.v
    }

    collide(other) {
        if (this.x + this.size < other.x || this.x > other.x + other.size) {
            return true;
        }
        return false;
    }
    bounce(other) {
        let sumM = this.mass + other.mass
        let newV = (this.mass - other.mass) / sumM * this.v
        newV += (2 * other.mass / sumM) * other.v
        return newV
    }
    draw() {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.size, this.size);
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.closePath();
    }


}

let count = 0;
//Timesteps calculate the position more often to get better results
//Euler integration

//Set time step to 100 and right.mass to the digitcount after the comma u want
const TimeSteps = 1000000

let left = new Block()
left.x = 10
left.v = 0
left.size = 10
left.mass = 1
left.color = "red"

let right = new Block()
right.x = 100
right.v = -1 / TimeSteps
right.size = 100
right.mass = Math.pow(100, 8)
right.color = "red"

const animate = () => {
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (let i = 0; i < TimeSteps; i++) {

        if (!left.collide(right)) {
            count++
            document.getElementById("hombre").innerHTML = count
            const v1 = left.bounce(right)
            const v2 = right.bounce(left)

            left.v = v1
            right.v = v2
        }

        if (left.x <= 0) {
            left.v = -left.v
            count++
            document.getElementById("hombre").innerHTML = count

        }


        left.update()
        right.update()
    }

    left.draw();
    right.draw();

}

animate();