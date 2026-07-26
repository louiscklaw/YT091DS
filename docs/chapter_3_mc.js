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
    [
        `
<div style="text-align: left">
4. 根據文本，中藥鑑定學嘅「首要任務」係咩？
- A. 研發新型中藥複方與劑型
- B. 鑑定中藥的真偽優劣以確保中藥的質量
- C. 推廣中藥材嘅海外出口貿易
- D. 簡化中藥材嘅人工栽培過程
</div>
`,
        `
<div style="text-align: left">
**答案：B**
> **解析：** 文本第一句明確指出「中藥鑑定學的首要任務是為了鑑定中藥的真偽優劣以確保中藥的質量」。
</div>
`,
    ],
    [
        `
<div style="text-align: left">
5. 進行中藥鑑定時，最主要嘅參考依據係咩？
- A. 《本草綱目》
- B. 《黃帝內經》
- C. 《國家藥典》
- D. 《神農本草經》
</div>
`,
        `
<div style="text-align: left">
**答案：C**
> **解析：** 文本明確標明「而中藥鑑定的主要依據是《國家藥典》」。
</div>
`,
    ],
    [
        `
<div style="text-align: left">
6. 以下哪一項**不屬於**文本中列出嘅中藥「四大鑑定法」之一？
- A. 來源鑑定
- B. 性狀鑑定
- C. 顯微鑑定
- D. 臨床鑑定
</div>
`,
        `
<div style="text-align: left">
**答案：D**
> **解析：** 文本列出嘅四大鑑定法為「1.來源、2.性狀、3.顯微 及 4.理化」，並不包含臨床鑑定。
</div>
`,
    ],
    [
        `
<div style="text-align: left">
7. 根據文本，中藥嘅四大鑑定法包含以下哪四項？
- A. 來源、性狀、顯微、理化
- B. 寒熱、虛實、表裏、陰陽
- C. 望診、聞診、問診、切診
- D. 君、臣、佐、使
</div>
`,
        `
<div style="text-align: left">
**答案：A**
> **解析：** 文本完整記載「中藥的四大鑑定法為 1.來源、2. 性狀、3.顯微 及 4.理化」。
</div>
`,
    ],
    [
        `
<div style="text-align: left">
8. 關於中藥鑑定學嘅描述，以下哪一項完全符合文本內容？
- A. 中藥鑑定的主要依據是地方地方誌與民間驗方
- B. 中藥鑑定學首要任務係為咗提高藥材產量
- C. 鑑定中藥真偽優劣係確保中藥質量嘅首要任務
- D. 理化鑑定係中藥唯一嘅鑑定方法
</div>
`,
        `
<div style="text-align: left">
**答案：C**
> **解析：** 綜合文本，中藥鑑定學首要任務係鑑定真偽優劣以確保質量，依據係《國家藥典》，方法包含來源、性狀、顯微、理化四大類。
</div>
`,
    ],
    [
        `
<div style="text-align: left">
9. 根據文本嘅取樣要求，當總件數喺 100 至 1000 件之間時，應該按幾多比例進行取樣？
- A. 1%
- B. 3%
- C. 5%
- D. 10%
</div>
`,
        `
<div style="text-align: left">
**答案：C**
> **解析：** 文本明確指出「100～1000 件的，按 5%(0.05)取樣」。
</div>
`,
    ],
];