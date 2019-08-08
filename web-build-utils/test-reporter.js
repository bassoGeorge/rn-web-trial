'use strict';

var Base            = require('mocha/lib/reporters/base');
var inherits        = require('mocha/lib/utils').inherits;
var constants       = require('mocha/lib/runner').constants;
var EVENT_RUN_END   = constants.EVENT_RUN_END;
var EVENT_RUN_BEGIN = constants.EVENT_RUN_BEGIN;

/**
 * Expose `CustomMin`.
 */

exports = module.exports = CustomMin;

/**
 * Constructs a new `CustomMin` reporter instance.
 *
 * @description
 * This minimal test reporter is best used with '--watch'.
 *
 * @public
 * @class
 * @memberof Mocha.reporters
 * @extends Mocha.reporters.Base
 * @param {Runner} runner - Instance triggers reporter actions.
 * @param {Object} [options] - runner options
 */
function CustomMin(runner, options) {
	Base.call(this, runner, options);

	runner.on(EVENT_RUN_BEGIN, function () {
		// clear screen
		//process.stdout.write('\u001b[2J');
		// set cursor position
		//process.stdout.write('\u001b[1;3H');
		process.stdout.write("============  Running Tests ==========\n")
	});

	runner.once(EVENT_RUN_END, this.epilogue.bind(this));
}

/**
 * Inherit from `Base.prototype`.
 */
inherits(CustomMin, Base);

CustomMin.description = 'Same as original min reporter but without clearing the screen';
