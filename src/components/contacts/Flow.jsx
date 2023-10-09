import 'react'
import Sketch from 'react-p5'
import "../../App.css"

const Flow = () => {
    let w, h, cols, rows, size, nums;
    let zOff = 0;
    let scl = 0.001;
    let speed = 12;
    let particles = []

    const setup = (p5, canvasParentRef) => {
        nums = 2000;
        w = p5.windowWidth
        h = p5.windowHeight
        size = h / 50;
        cols = Math.ceil(w / size);
        rows = Math.ceil(h / size);
        p5.frameRate(30)
        p5.createCanvas(w, h, p5.WEBGL).parent(canvasParentRef)

        for (let i = 0; i < nums; i++) {
            particles.push(p5.createVector(p5.random(w), p5.random(h)))
        }
    }

    const draw = (p5) => {
        p5.background(getComputedStyle(document.documentElement).getPropertyValue('--main-bg-color'));
        p5.stroke(getComputedStyle(document.documentElement).getPropertyValue('--main-text-color'));
        p5.translate(-w / 2, -h / 2)
        p5.strokeWeight(3)


        for (let i = 0; i < nums; i++) {
            let p = particles[i]
            p5.point(p.x, p.y)
            let n = p5.noise(p.x * scl, p.y * scl, zOff);
            let angle = p5.TWO_PI * n
            p.x += Math.cos(angle) * speed
            p.y += Math.sin(angle) * speed
            if (!onScreen(p)) {
                p.x = p5.random(w)
                p.y = p5.random(h)
            }
        }

        zOff += 0.0075
    }

    const onScreen = (v) => {
        return v.x >= 0 && v.x <= w && v.y >= 0 && v.y < h
    }

    return (
        <Sketch setup={setup} draw={draw} />
    )
}

export default Flow