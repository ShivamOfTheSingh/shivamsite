import 'react'
import Sketch from 'react-p5'
import "../../App.css"

const Flow = () => {
    let w, h, cols, rows, size;
    let zOff = 0;

    const setup = (p5, canvasParentRef) => {
        w = p5.windowWidth
        h = p5.windowHeight
        size = h / 12;
        cols = Math.ceil(w / size);
        rows = Math.ceil(h / size);
        p5.frameRate(60)
        p5.createCanvas(w, h, p5.WEBGL).parent(canvasParentRef)
    }

    const draw = (p5) => {
        p5.background(getComputedStyle(document.documentElement).getPropertyValue('--main-bg-color'));
        p5.stroke(getComputedStyle(document.documentElement).getPropertyValue('--main-text-color'));
        p5.translate(-w / 2, -h / 2)
        p5.strokeWeight(0.5)

        let yOff = 0;
        for (let y = 0; y <= rows; y++) {
            let xOff = 0;
            for (let x = 0; x <= cols; x++) {
                const angle = p5.noise(xOff, yOff, zOff) * p5.TWO_PI;
                const v = p5.createVector(p5.cos(angle), p5.sin(angle));
                p5.line(x * size, y * size, (x + v.x) * size, (y + v.y) * size);
                xOff += 0.15;
            }
            yOff += 0.15;
        }

        zOff += 0.05
    }

    return (
        <Sketch setup={setup} draw={draw} />
    )
}

export default Flow