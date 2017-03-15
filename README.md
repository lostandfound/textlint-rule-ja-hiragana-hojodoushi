# textlint-rule-ja-hiragana-hojodoushi

Check easy-to-read Hojodoushi(auxiliary verbs) written in Hiragana than Kanji.

漢字よりもひらがなで表記したほうが読みやすい補助動詞を指摘します。検出には形態素解析を使っています。自動修正にも対応しています。

## Install

Install with [npm](https://www.npmjs.com/):

    npm install textlint-rule-ja-hiragana-hojodoushi

## Usage

Via `.textlintrc`(Recommended)

```json
{
    "rules": {
        "ja-hiragana-hojodoushi": true
    }
}
```

Via CLI

```
textlint --rule ja-hiragana-hojodoushi README.md
```

### Fixable

```
textlint --fix ja-hiragana-hojodoushi README.md
```

### Build

Builds source codes for publish to the `lib` folder.
You can write ES2015+ source codes in `src/` folder.

    npm run build

### Tests

Run test code in `test` folder.
Test textlint rule by [textlint-tester](https://github.com/textlint/textlint-tester "textlint-tester").

    npm test

### List

| from | to |
| --- | --- |
| 〜して頂く | 〜していただく |
| 〜して下さい | 〜してください |
| 〜して行く | 〜していく |
| 〜して来る | 〜してくる |
| 〜致します | 〜いたします |
| 〜し出す | 〜しだす |

## License

MIT © Hiroshi Takase
