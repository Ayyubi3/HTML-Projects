function randomIntWithoutZeroFromRange(min, max) {
    let out = Math.floor(Math.random() * (max - min + 1) + min)
    if (out === 0) { out = randomIntWithoutZeroFromRange(min, max) }
    return out
}

function distance(x1, y1, x2, y2) {
    const xDist = x2 - x1
    const yDist = y2 - y1

    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
}