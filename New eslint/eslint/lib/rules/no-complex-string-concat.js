/**
 * @fileoverview Rule to flag use of `switch` statement
 * @author Deep Abhishek
 */

'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

// http://eslint.org/docs/rules/consistent-this

var ERROR = 'Too complex string concatenation.';

module.exports = function(context) {
  return {
    BinaryExpression: function(node) {
      if (node.operator === '+' && node.parent.operator === '+') {
        context.report(node, ERROR);
      }
    }
  };
};
