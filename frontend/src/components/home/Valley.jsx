import React from "react";
import { ReactP5Wrapper } from "@p5-wrapper/react";
import "../../App.css";

const Valley = () => {
	let cols, rows, size, w, h;
	let v = 0;
	let terrain = [];

	const setup = (p5, canvasParentRef) => {
		w = p5.windowWidth * 1.2;
		h = p5.windowHeight;
		size = Math.ceil(w / 50);
		cols = Math.ceil(w / size);
		rows = Math.ceil(h / size);

		p5.noiseDetail(32, 0.55);
		p5.createCanvas(window.innerWidth, window.innerHeight, p5.WEBGL).parent(canvasParentRef);
		p5.frameRate(25)
	};

	const draw = (p5) => {
		for (let x = 0; x < cols; x++) {
			terrain[x] = Array.from({ length: rows }, () => 0);
		}

		v -= 0.1;
		let yOff = v;
		for (let y = 0; y < rows; y++) {
			let xOff = 0;
			for (let x = 0; x < cols; x++) {
				terrain[x][y] = valleyNoise(p5, x, xOff, yOff * 5);
				xOff += 0.2;
			}
			yOff += 0.1;
		}

		p5.background(0, 0);
		p5.fill(getComputedStyle(document.documentElement).getPropertyValue('--main-bg-color'));
		p5.stroke(getComputedStyle(document.documentElement).getPropertyValue('--main-text-color'));
		p5.strokeWeight(0.5);
		p5.translate(-w / 2 - 5, 200, -235);
		p5.rotateX(1.6);

		for (let y = 0; y < rows - 1; y++) {
			p5.beginShape(p5.TRIANGLE_STRIP);
			for (let x = 0; x < cols; x++) {
				p5.vertex(x * size, y * size, terrain[x][y]);
				p5.vertex(x * size, (y + 1) * size, terrain[x][y + 1]);
			}
			p5.endShape();
		}
	};

	const windowResized = (p5) => {
		w = p5.windowWidth * 1.2;
		h = p5.windowHeight;
		size = Math.ceil(w / 50);
		cols = Math.ceil(w / size);
		rows = Math.ceil(h / size);
		const centerX = -w / 2 + (p5.windowWidth - w) / 2;

		p5.resizeCanvas(p5.windowWidth, h);
		p5.translate(centerX, 100, -150);
	};

	const valleyNoise = (p5, x, xOff, yOff) => {
		const halfCols = cols / 2;
		const top = Math.abs(x - halfCols) / cols * h;
		const ret = Math.pow(p5.map(p5.noise(xOff, yOff), 0, 1, -50, top), 1.1);
		return ret;
	};

	return (
		<ReactP5Wrapper sketch={p => {
				p.setup = () => setup(p);
				p.draw = () => draw(p);
				p.windowResized = () => windowResized(p);
			}}
		/>
	);
};

export default Valley;
