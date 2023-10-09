// A Perlin Noise Flow Feild
import 'react'
import Sketch from 'react-p5'
import "../../App.css"

const Flow = () => {
    let w, h, nums;
    let zOff = 0;
    let scl = 0.001;
    let speed = 12;
    let particles = []

    const setup = (p5, canvasParentRef) => {
        // Sets initial conditions
        w = p5.windowWidth
        h = p5.windowHeight
        nums = Math.ceil((w + h) / 1.5)
        p5.frameRate(30)
        p5.createCanvas(w, h, p5.WEBGL).parent(canvasParentRef)

        // Creates particle vectors
        for (let i = 0; i < nums; i++) {
            particles.push(p5.createVector(p5.random(w), p5.random(h)))
        }
    }

    const draw = (p5) => {
        // Styling
        p5.background(getComputedStyle(document.documentElement).getPropertyValue('--main-bg-color'));
        p5.stroke(getComputedStyle(document.documentElement).getPropertyValue('--main-text-color'));
        p5.translate(-w / 2, -h / 2)
        p5.strokeWeight(3)


        // Brains of the flow feild, takes the positions and modifies the particles positions given by noise
        for (let i = 0; i < nums; i++) {
            let p = particles[i]
            p5.point(p.x, p.y)
            let n = p5.noise(p.x * scl, p.y * scl, zOff * 3);
            let angle = p5.TWO_PI * n
            p.x += Math.cos(angle) * speed
            p.y += Math.sin(angle) * speed
            if (!onScreen(p)) {
                p.x = p5.random(w)
                p.y = p5.random(h)
            }
        }

        zOff += 0.002
    }

    const onScreen = (v) => {
        return v.x >= 0 && v.x <= w && v.y >= 0 && v.y < h
    }

    const windowResized = (p5) => {
        w = p5.windowWidth;
        h = p5.windowHeight;
        nums = Math.ceil((w + h) / 1.5)
        p5.resizeCanvas(w, h);
    };

    return (
        <Sketch setup={setup} draw={draw} windowResized={windowResized}/>
    )
}

export default Flow