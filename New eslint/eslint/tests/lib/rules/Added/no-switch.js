/**
 * @fileoverview Tests for no-switch rule.
 * @author Deep Abhishek
 */
'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

var eslint = require('eslint').linter,
  ESLintTester = require('eslint-tester');

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

var HARMFUL = 'switch can be harmful.';
var TYPE = 'SwitchStatement';
var eslintTester = new ESLintTester(eslint);

eslintTester.addRuleTest('lib/rules/no-switch', {
  // Examples of code that should not trigger the rule
  valid: [
    'function doSomething(e) { var f = e; }',
    'function doSomething() { var f = doSomething; }',
    'function foo() { } function doSomething() { var f = foo; }'
  ],
  // Examples of code that should trigger the rule
  invalid: [
    {
      code: 'var option = 0; switch(option) { case "a": break; }',
      errors: [{message: HARMFUL, type: TYPE}]
    },
    {
      code: 'var option = 0; switch(option) { case "a": option++; break; }',
      errors: [{message: HARMFUL, type: TYPE}]
    },
    {
      code: 'function doSomething(option) { switch(option) { case "a": break; } }',
      errors: [{message: HARMFUL, type: TYPE}]
    }
  ]
});
