// chapter_3_mc.js / chapter_3_mc.md
// schemas:
// [
//  [QUESTION, ANSWER],
//  [QUESTION, ANSWER],
//  [QUESTION, ANSWER],
//  ...
// ]

// schemas:
// [
//  [QUESTION, ANSWER],
//  [QUESTION, ANSWER],
//  [QUESTION, ANSWER],
//  ...
// ]

// for example, the question answer pair like below in md file:
// 1. 根據陰陽的變化規律，以下哪一項**不屬於**陰陽的主要變化規律？
//
// - A. 陰陽對立
// - B. 陰陽依存
// - C. 陰陽消長與轉化
// - D. 陰陽永恆不變
//
// **答案：D**
// > **解析：** 陰陽的變化規律包括「陰陽對立」、「陰陽依存」以及「陰陽消長與轉化」。陰陽係處於動態變化之中，並非「永恆不變」。

// becomes the array pair like below in html file:
// [`
// <div style="text-align: left">
// 1. 根據陰陽的變化規律，以下哪一項**不屬於**陰陽的主要變化規律？
// - A. 陰陽對立
// - B. 陰陽依存
// - C. 陰陽消長與轉化
// - D. 陰陽永恆不變
// </div>
// `,
// `
// <div style="text-align: left">
// **答案：D**
// > **解析：** 陰陽的變化規律包括「陰陽對立」、「陰陽依存」以及「陰陽消長與轉化」。陰陽係處於動態變化之中，並非「永恆不變」。
// </div>
// `,
// ]


let FLASHCARDS = [
    [
        `
<div style="text-align: left">
1. 根據文本，中藥藥材嘅奠基發展地位與以下哪一個地區相關？
- A. 旺角
- B. 西營盤
- C. 上環
- D. 灣仔
</div>
`,
        `
<div style="text-align: left">
**答案：B**
> **解析：** 文本明確標示「中藥藥材奠基 西營盤」，指出該地點喺中藥藥材發展上嘅奠基角色。
</div>
`,
    ],
    [
        `
<div style="text-align: left">
2. 根據文本，香港現時大約有多少種中藥材？
- A. 一千多種
- B. 二千多種
- C. 三千多種
- D. 四千多種
</div>
`,
        `
<div style="text-align: left">
**答案：B**
> **解析：** 文本明確指出「香港的中藥材有二千多種」。
</div>
`,
    ],
    [
        `
<div style="text-align: left">
3. 根據文本，香港嘅中藥材當中有幾多成係由內地輸入？
- A. 5-6 成
- B. 6-7 成
- C. 7-8 成
- D. 8-9 成
</div>
`,
        `
<div style="text-align: left">
**答案：D**
> **解析：** 文本明確提及「其中有 8-9 成是由內地輸入」。
</div>
`,
    ],
];