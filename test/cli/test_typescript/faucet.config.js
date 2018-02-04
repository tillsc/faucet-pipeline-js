"use strict";

let path = require("path");

module.exports = {
	js: [{
		source: "./src/index.ts",
		target: "./dist/bundle.js",
		transpiler: {
			features: ["typescript"]
		}
	}],
	plugins: {
		js: path.resolve(__dirname, "../../..")
	}
};
