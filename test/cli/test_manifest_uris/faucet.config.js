"use strict";

let path = require("path");

module.exports = {
	js: [{
		entryPoint: "./src/foo.js",
		target: "./dist/foo.js"
	}, {
		entryPoint: "./src/bar.js",
		target: "./dist/bar.js",
		transpiler: {
			features: ["es2015"]
		}
	}],
	manifest: {
		file: "./dist/manifest.json",
		value: bundlePath => assetURI(bundlePath)
	},
	plugins: {
		js: path.resolve(__dirname, "../../..")
	}
};

function assetURI(filepath) {
	let filename = path.basename(filepath);
	return `/assets/${filename}`;
}
