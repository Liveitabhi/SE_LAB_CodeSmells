/* eslint-disable eslint-plugin/require-meta-docs-description */
/**
 * @fileoverview Rule to flag use of `switch` statement
 * @author Elijah Manor
 * @copyright 2015 Elijah Manor. All rights reserved.
 */

"use strict";

/*
 * ------------------------------------------------------------------------------
 * Rule Definition
 * ------------------------------------------------------------------------------
 */

module.exports = {
    meta: {
        type: "problem",

        docs: {
            description: "discourage switch statement use",
            category: "Possible Errors",
            recommended: false,
            url: "https://eslint.org/docs/rules/no-switch"
        },

        schema: [],

        messages: {
            unexpectedSparseArray: "Multiple complex switch statements."
        }
    },

    create(context) {


        //--------------------------------------------------------------------------
        // Public
        //--------------------------------------------------------------------------

        return {

            SwitchStatement(node) {

                context.report({ node, message: "switch can be harmful." });
            }

        };

    }
};
