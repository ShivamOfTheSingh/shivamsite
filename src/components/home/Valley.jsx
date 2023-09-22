// Inspired by TheCodingTrain's 3D Perlin Noise Generations
// This is my take on it where it generates perlin noise terrain in a valley shape
// This sketch uses the "react-p5" package to become a React component
// Original concept found here: https://www.youtube.com/watch?v=IKB1hWWedMk&t=809s

import React from "react"
import Sketch from "react-p5"

const Valley = (props) => {
	let cols, rows, size, w, h;
	let v = 0;
	let terrain = [];

	// p5.js setup function
	const setup = (p5, canvasParentRef) => {
		// Arbitrarily calculating the rows and columns in my terrain generation in order to achieve my style
		w = p5.windowWidth * 1.2;
		h = p5.windowHeight;
		size = Math.ceil(w / 50);
		cols = Math.ceil(w / size);
		rows = Math.ceil(h / size);

		// Creates a p5.js canvas with a parent reference to the component: Home
		p5.createCanvas(p5.windowWidth, h, p5.WEBGL).parent(canvasParentRef);
	};

	// p5.js draw function
	const draw = (p5) => {
		// Initializes the terrain[][] array, needed in draw as dimensions of terrain need to be redone with window resize
		for (let x = 0; x < cols; x++) {
			terrain[x] = Array.from({ length: rows }, () => 0);
		}

		// Creates the valley terrain noise using valleyNoise()
		// v, xOff, and yOff are parameters responsible for generation and the rate of which the camera "moves"
		v -= 0.075;
		let yOff = v;
		for (let y = 0; y < rows; y++) {
			let xOff = 0;
			for (let x = 0; x < cols; x++) {
				terrain[x][y] = valleyNoise(p5, x, xOff, yOff);
				xOff += 0.2;
			}
			yOff += 0.17;
		}

		// Stylistic changes
		p5.background(0, 0);
		p5.fill(43, 43, 43);
		p5.stroke(193, 193, 156);
		p5.strokeWeight(0.5);
		p5.translate(-w / 2, 200, -200);
		p5.rotateX(1.7);

		// Uses a TRIANGLE_STRIP vector mesh to create the terrain
		for (let y = 0; y < rows - 1; y++) {
			p5.beginShape(p5.TRIANGLE_STRIP);
			for (let x = 0; x < cols; x++) {
				// Creates a vertex grid of triangles with the z values determined by terrain[][]
				p5.vertex(x * size, y * size, terrain[x][y]);
				p5.vertex(x * size, (y + 1) * size, terrain[x][y + 1]);
			}
			p5.endShape();
		}
	};

	// p5.js function used to resize the canvas when the browser window changes in size
	// Used to modify the number of rows and columns (as well as their size) in the terrain generation
	// Same general arbitrary stylistic values used in setup()
	const windowResized = (p5) => {
		w = p5.windowWidth * 1.2;
		h = p5.windowHeight;
		size = Math.ceil(w / 50);
		cols = Math.ceil(w / size);
		rows = Math.ceil(h / size);

		// Calculate the new center for translating the terrain
		const centerX = -w / 2 + (p5.windowWidth - w) / 2;

		p5.resizeCanvas(p5.windowWidth, h);
		p5.translate(centerX, 100, -150); // Update the translation
	};


	// My take on modifying the noise() function to give the terrain generation a valley look
	const valleyNoise = (p5, x, xOff, yOff) => {
		const halfCols = cols / 2;
		const hSize = h / size;
		const ret = Math.pow(p5.map(p5.noise(xOff, yOff), 0, 1, -50, Math.abs(x - halfCols) * hSize), 1.07);
		return ret >= h ? h : ret;
	};


	// The "brains" of this sketch, making it into a React component
	return <Sketch setup={setup} draw={draw} windowResized={windowResized} />;
};

export default Valley;