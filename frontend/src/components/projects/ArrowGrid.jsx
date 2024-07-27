import React from "react";
import { ReactP5Wrapper } from "@p5-wrapper/react";
import "../../App.css";

const ArrowGrid = () => {
    let cols, rows, scl, w, h;

    const setup = (p5, canvasParentRef) => {
        w = p5.windowWidth;
        h = p5.windowHeight;
        scl = Math.ceil(w / 30);
        cols = Math.ceil(w / scl);
        rows = Math.ceil(h / scl);
        p5.createCanvas(w, h).parent(canvasParentRef);
    };

    const draw = (p5) => {
        p5.background(getComputedStyle(document.documentElement).getPropertyValue('--main-bg-color'));
        p5.stroke(getComputedStyle(document.documentElement).getPropertyValue('--main-text-color'));
        p5.strokeWeight(0.5);

        let line_len = 20;
        let user_x = p5.mouseX - p5.width / 2;
        let user_y = p5.mouseY - p5.height / 2;

        p5.translate(p5.width / 2 + scl / 2, p5.height / 2 + scl / 2);

        for (let x = -cols / 2; x < cols / 2; x++) {
            for (let y = -rows / 2; y < rows / 2; y++) {
                let pos_x = x * scl;
                let pos_y = y * scl;
                let angle = p5.atan2(user_y - pos_y, user_x - pos_x);
                p5.push();
                p5.translate(pos_x, pos_y);
                p5.rotate(angle);
                p5.line(0, 0, line_len, 0);
                p5.pop();
            }
        }
    };

    const windowResized = (p5) => {
        w = p5.windowWidth;
        h = p5.windowHeight;
        scl = Math.ceil(w / 30);
        cols = Math.ceil(w / scl);
        rows = Math.ceil(h / scl);
        p5.resizeCanvas(w, h);
    };

    return (
        <ReactP5Wrapper
            sketch={(p) => {
                p.setup = () => setup(p);
                p.draw = () => draw(p);
                p.windowResized = () => windowResized(p);
            }}
        />
    );
};

export default ArrowGrid;
