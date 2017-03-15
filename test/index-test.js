"use strict";
const TextLintTester = require("textlint-tester");
const tester = new TextLintTester();
// rule
const rule = require("../src/index");
// ruleName, rule, { valid, invalid }
tester.run("rule", rule, {
    valid: [
        // no problem
        "text",
    ],

    invalid: [
        // single match fukushi
        {
            text: "して頂く",
            output: "していただく",
            errors: [
                {
                    message: "ひらがなで表記したほうが読みやすい補助動詞: \"頂く\" > \"いただく\"",
                    line: 1,
                    column: 3
                }
            ]
        },
        {
            text: "して下さい",
            output: "してください",
            errors: [
                {
                    message: "ひらがなで表記したほうが読みやすい補助動詞: \"下さい\" > \"ください\"",
                    line: 1,
                    column: 3
                }
            ]
        },
        {
            text: "して行く",
            output: "していく",
            errors: [
                {
                    message: "ひらがなで表記したほうが読みやすい補助動詞: \"行く\" > \"いく\"",
                    line: 1,
                    column: 3
                }
            ]
        },
        {
            text: "して来て",
            output: "してきて",
            errors: [
                {
                    message: "ひらがなで表記したほうが読みやすい補助動詞: \"来\" > \"き\"",
                    line: 1,
                    column: 3
                }
            ]
        },
        {
            text: "お願い致します",
            output: "お願いいたします",
            errors: [
                {
                    message: "ひらがなで表記したほうが読みやすい補助動詞: \"致し\" > \"いたし\"",
                    line: 1,
                    column: 4
                }
            ]
        },
        // multiple match
        {
            text: `許して頂いた。

見て来よう。`,
            output: `許していただいた。

見てこよう。`,
            errors: [
                {
                    message: "ひらがなで表記したほうが読みやすい補助動詞: \"頂い\" > \"いただい\"",
                    line: 1,
                    column: 4
                },
                {
                    message: "ひらがなで表記したほうが読みやすい補助動詞: \"来よ\" > \"こよ\"",
                    line: 3,
                    column: 3
                }
            ]
        }
    ]

});