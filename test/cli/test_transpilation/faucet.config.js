"use strict";

let path = require("path");

module.exports = {
	js: [{
		entryPoint: "./src/index.js",
		target: "./dist/bundle.js",
		transpiler: {
			features: ["es2015"]
		}
	}],
	plugins: {
		js: path.resolve(__dirname, "../../..")
	}
};
