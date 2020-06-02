/**
 * @fileoverview Rule to flag use of `switch` statement
 * @author Deep Abhishek
 */

'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = function(context) {
  return {
    SwitchStatement: function(node) {
      context.report(node, 'switch can be harmful.');
    }
  };
};
