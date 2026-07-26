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
1. 根據陰陽的變化規律，以下哪一項**不屬於**陰陽的主要變化規律？
- A. 陰陽對立
- B. 陰陽依存
- C. 陰陽消長與轉化
- D. 陰陽永恆不變
</div>
`,
        `
<div style="text-align: left">
**答案：D**
> **解析：** 陰陽的變化規律包括「陰陽對立」、「陰陽依存」以及「陰陽消長與轉化」。陰陽係處於動態變化之中，並非「永恆不變」。
</div>
`,
    ],
];