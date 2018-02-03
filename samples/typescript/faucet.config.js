"use strict";

module.exports = {
	js: [{
		source: "./index.ts",
		target: "./dist/bundle.js",
		transpiler: {
			features: ["typescript"]
		}
	}]
};
