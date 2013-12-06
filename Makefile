default: test

jslint:
	@echo "jslint"
	@./node_modules/jslint/bin/jslint.js --white --nomen --node --predef describe --predef it *.js

circular:
	@echo "circular"
	@./node_modules/madge/bin/madge --circular --format amd .

mocha:
	@echo "mocha"
	@./node_modules/mocha/bin/mocha test/*.js
	@echo

test: jslint mocha circular
	@echo "test"
	@echo

outdated:
	@echo "outdated modules?"
	@./node_modules/npmedge/bin/npmedge
