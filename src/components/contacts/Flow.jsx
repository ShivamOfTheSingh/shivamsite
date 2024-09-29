import React from 'react';
import { ReactP5Wrapper } from "@p5-wrapper/react";
import "../../App.css";

const Flow = () => {
    let w, h, nums;
    let zOff = 10;
    let scl = 0.0025;
    let speed = 2;
    let particles = [];
    let cursor;

    const setup = (p5, canvasParentRef) => {
        w = p5.windowWidth;
        h = p5.windowHeight;
        nums = 2000;
        p5.frameRate(60);
        p5.createCanvas(w, h, p5.WEBGL).parent(canvasParentRef);

        for (let i = 0; i < nums; i++) {
            particles.push(p5.createVector(p5.random(w), p5.random(h)));
        }

        cursor = p5.createVector(p5.mouseX, p5.mouseY);
    }

    const draw = (p5) => {
        p5.background(getComputedStyle(document.documentElement).getPropertyValue('--main-bg-color'));
        p5.stroke(getComputedStyle(document.documentElement).getPropertyValue('--main-text-color'));
        p5.translate(-w / 2, -h / 2);
        p5.strokeWeight(1.75);
        cursor.set(p5.mouseX, p5.mouseY);

        for (let i = 0; i < nums; i++) {
            let p = particles[i];
            let distance = p5.dist(p.x, p.y, cursor.x, cursor.y);

            if (distance < 50) {
                let dir = p5.createVector(p.x, p.y);
                dir.sub(cursor);
                dir.normalize();
                let repulsion = 3;
                dir.mult(repulsion);
                p.add(dir);
            }

            let n = p5.noise(p.x * scl, p.y * scl, zOff);
            let angle = p5.TWO_PI * n;
            p.x += Math.cos(angle) * speed;
            p.y += Math.sin(angle) * speed;

            if (!onScreen(p, w, h)) {
                p.x = p5.random(p5.windowWidth);
                p.y = p5.random(p5.windowHeight);
            }

            p5.point(p.x, p.y);
        }

        zOff += 0.002;
    }

    const onScreen = (v, w, h) => {
        return v.x >= 0 && v.x <= w && v.y >= 0 && v.y <= h;
    }

    const windowResized = (p5) => {
        w = p5.windowWidth;
        h = p5.windowHeight;
        p5.resizeCanvas(w, h);
    };

    return (
        <ReactP5Wrapper sketch={p => {
            p.setup = () => setup(p);
            p.draw = () => draw(p);
            p.windowResized = () => windowResized(p);
        }}
        />
    )
}

export default Flow;
