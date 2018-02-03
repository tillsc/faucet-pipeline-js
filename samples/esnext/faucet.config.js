"use strict";

module.exports = {
	manifest: {
		file: "./dist/manifest.json"
	},
	js: [{
		source: "./index.js",
		target: "./dist/bundle.js",
		transpiler: {
			features: ["es2015"]
		}
	}]
};
