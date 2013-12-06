var safejson = require("../lib/safejson"),
	assert = require("assert-plus");

describe("formatter.json", function() {
	"use strict";
	describe("()", function() {
		it("should handle circular dependencies", function() {
			var json, circular = {
				a: 1
			};
			circular.b = circular;
			json = safejson(circular);
			assert.equal(json, '{"a":1,"b":"Circular<b>"}', "json");
		});
	});
});
