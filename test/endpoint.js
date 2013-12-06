var assert = require("assert-plus"),
	util = require("util"),
	index = require("../index");

describe("API", function() {
	"use strict";
	describe("Endpoint", function() {
		it("should work if all params are set", function() {
			return new index.Endpoint(true, true, true, true, "test");
		});
		it("should not work if one of params are not set", function() {
			assert.throws(function() {
				return new index.Endpoint(true, true, true, true);
			});
		});
		it("should not work if one of params is not not bool", function() {
			assert.throws(function() {
				return new index.Endpoint(true, true, true, "true", "test");
			});
		});
		it("should emit events", function(done){
			var endpoint = new index.Endpoint(true, true, true, true, "test");
			endpoint.once("test", function(err) {
				if (err) {
					throw err;
				}
				done();
			});
			endpoint.emit("test");
		});
	});
});