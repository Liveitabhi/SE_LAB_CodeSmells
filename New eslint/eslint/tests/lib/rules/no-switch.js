/**
 * @fileoverview Tests for no-switch rule.
 * @author Elijah Manor
 * @copyright 2015 Elijah Manor. All rights reserved.
 */
"use strict";

/*
 * ------------------------------------------------------------------------------
 * Requirements
 * ------------------------------------------------------------------------------
 */

const rule = require("../../../lib/rules/no-switch"),
    { RuleTester } = require("../../../lib/rule-tester");

/*
 * ------------------------------------------------------------------------------
 * Tests
 * ------------------------------------------------------------------------------
 */

const HARMFUL = "switch can be harmful.";
const TYPE = "SwitchStatement";
const ruleTester = new RuleTester();

ruleTester.run("no-switch", rule, {

    // Examples of code that should not trigger the rule
    valid: [
        "function doSomething(e) { var f = e; }",
        "function doSomething() { var f = doSomething; }",
        "function foo() { } function doSomething() { var f = foo; }"
    ],

    // Examples of code that should trigger the rule
    invalid: [
        {
            code: 'var option = 0; switch(option) { case "a": break; }',
            errors: [{ message: HARMFUL, type: TYPE }]
        },
        {
            code: 'var option = 0; switch(option) { case "a": option++; break; }',
            errors: [{ message: HARMFUL, type: TYPE }]
        },
        {
            code: 'function doSomething(option) { switch(option) { case "a": break; } }',
            errors: [{ message: HARMFUL, type: TYPE }]
        }
    ]
});
