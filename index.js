var events = require("events"),
	util = require("util"),
	assert = require("assert-plus"),
	safejson = require("./lib/safejson");

function Endpoint(debug, info, error, critical, name) {
	assert.bool(debug, "debug");
	assert.bool(info, "info");
	assert.bool(error, "error");
	assert.bool(critical, "critical");
	assert.string(name, "name");
	events.EventEmitter.call(this);
	this.levels = {
		debug: debug,
		info: info,
		error: error,
		critical: critical
	};
	this.name = name;
	this.logErrCount = 0;
	this.stopping = false;
	this.stopped = false;
}
util.inherits(Endpoint, events.EventEmitter);
Endpoint.prototype.stop = function(callback) {
	if (this.stopping === true) {
		callback(new Error("Already stopped"));
	}
	this.stopping = true;
	var self = this;
	this._stop(function(err) {
		if (err) {
			callback(err);
		} else {
			self.stopped = true;
			try {
				callback();
			} finally {
				self.emit("stop");
			}
		}
	});
};
Endpoint.prototype.log = function(log, callback) {
	if (this.stopping === false && this.stopped == false) {
		this._log(log, callback);
	} else {
		callback(new Error("Endpoint is not started"));
	}
};

exports.safejson = safejson;
exports.Endpoint = Endpoint;
