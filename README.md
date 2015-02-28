`````
                                                   ___
       __                                         /\_ \
  ___ /\_\    ___     ___   __  __    ___         \//\ \     ___      __      __      __   _ __
 /'___\/\ \ /' _ `\  / __`\/\ \/\ \  / __`\  _______\ \ \   / __`\  /'_ `\  /'_ `\  /'__`\/\`'__\
/\ \__/\ \ \/\ \/\ \/\ \L\ \ \ \_/ |/\ \L\ \/\______\\_\ \_/\ \L\ \/\ \L\ \/\ \L\ \/\  __/\ \ \/
\ \____\\ \_\ \_\ \_\ \____/\ \___/ \ \____/\/______//\____\ \____/\ \____ \ \____ \ \____\\ \_\
 \/____/ \/_/\/_/\/_/\/___/  \/__/   \/___/          \/____/\/___/  \/___L\ \/___L\ \/____/ \/_/
                                                                      /\____/ /\____/
                                                                      \_/__/  \_/__/
`````

[![Build Status](https://secure.travis-ci.org/michaelwittig/node-logger-lib.png)](http://travis-ci.org/michaelwittig/node-logger-lib)
[![NPM version](https://badge.fury.io/js/cinovo-logger-lib.png)](http://badge.fury.io/js/cinovo-logger-lib)
[![NPM dependencies](https://david-dm.org/michaelwittig/node-logger-lib.png)](https://david-dm.org/michaelwittig/node-logger-lib)

# cinovo-logger-lib

Shared code used by all [cinovo-logger](https://github.com/michaelwittig/node-logger) endpoints.

## Custom Endpoint

You must extend the require("cinovo-logger-lib").Endpoint.

`````javascript
var lib = require("cinovo-logger-lib");
function CustomEndpoint(debug, info, error, critical) {
	lib.Endpoint.call(this, debug, info, error, critical, "customName");
}
util.inherits(CustomEndpoint, lib.Endpoint);
`````

And you must implement at least this two methods:

`````javascript
CustomEndpoint.prototype._log = function(log, callback) {
	// write the log object and call the callback if the log is written
	callback();
};
CustomEndpoint.prototype._stop = function(callback) {
	// stop the endpoint, call the callback if finished and all logs are written
	callback();
};
`````

### API

#### stop(callback)

Stop endpoint to avoid data loss.

* `callback`: Function(err)
    * `err`: Error

#### log(log, callback)

* `log`: Log https://github.com/michaelwittig/node-logger#log
* `callback`: Function(err)
    * `err`: Error

### Events

#### stop()

Endpoint was stopped.

#### stopping()

Endpoint is stopping.
