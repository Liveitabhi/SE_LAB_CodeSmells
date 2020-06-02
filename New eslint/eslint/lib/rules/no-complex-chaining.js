/**
 * @fileoverview Rule to flag use of `switch` statement
 * @author Deep Abhishek
 */

'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

var ERROR = 'Too complex chaining.';

module.exports = function(context) {
  function levelOfChaining(node) {
    var level = 0, callee;

    while (node) {
      callee = node.callee || {};
      level += callee.type === 'MemberExpression' || callee.type === 'CallExpression' ? 1 : 0;
      node = node.parent;
    }

    return level;
  }

  return {
    CallExpression: function(node) {
      if (levelOfChaining(node) > 2) {
        context.report(node, ERROR);
      }
    }
  };
};
