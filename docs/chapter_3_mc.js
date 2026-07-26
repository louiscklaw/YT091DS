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
21. 根據文本，以下哪一種藥材以「味酸」為佳？
- A. 玄參
- B. 烏梅
- C. 白薇
- D. 檀香
</div>
`,
        `
<div style="text-align: left">
**答案：B**
> **解析：** 文本明確標明「以味酸為佳的藥材為：烏梅」。
</div>
`,
    ],
    [
        `
<div style="text-align: left">
22. 根據文本，藥材「白前」屬於以下哪一個科別嘅植物？
- A. 毛茛科
- B. 五加科
- C. 蘿藦科
- D. 菊科
</div>
`,
        `
<div style="text-align: left">
**答案：C**
> **解析：** 文本明確指出「白前屬蘿藦科植物」。
</div>
`,
    ],
    [
        `
<div style="text-align: left">
23. 根據文本，以下哪一種藥材同白前一樣，同屬於「蘿藦科」植物？
- A. 黃連
- B. 白薇
- C. 人參
- D. 黃耆
</div>
`,
        `
<div style="text-align: left">
**答案：B**
> **解析：** 文本記載「白薇屬蘿藦科植物」，與白前同屬蘿藦科。
</div>
`,
    ],
    [
        `
<div style="text-align: left">
24. 藥材「黃連」喺植物學分類上屬於咩科？
- A. 蘿藦科
- B. 五加科
- C. 毛茛科
- D. 唇形科
</div>
`,
        `
<div style="text-align: left">
**答案：C**
> **解析：** 文本明確標明「黃連屬毛茛科植物」。
</div>
`,
    ],
    [
        `
<div style="text-align: left">
25. 根據文本，藥材「人參」屬於以下哪一個科別？
- A. 五加科
- B. 毛茛科
- C. 蘿藦科
- D. 繖形科
</div>
`,
        `
<div style="text-align: left">
**答案：A**
> **解析：** 文本指出「人參屬五加科植物」。
</div>
`,
    ],
    [
        `
<div style="text-align: left">
26. 綜合文本內容，以下哪一組藥材與科別嘅配對係**不正確**嘅？
- A. 白前 —— 蘿藦科
- B. 黃連 —— 毛茛科
- C. 人參 —— 五加科
- D. 白薇 —— 毛茛科
</div>
`,
        `
<div style="text-align: left">
**答案：D**
> **解析：** 文本明確指出白薇與白前皆屬「蘿藦科植物」，而非毛茛科（屬毛茛科者為黃連）。
</div>
`,
    ],
    [
        `
<div style="text-align: left">
27. 根據文本，中藥藥性中嘅「四氣」係指邊四種藥性？
- A. 酸、苦、甘、辛
- B. 寒、熱、溫、涼
- C. 升、降、浮、沉
- D. 補、瀉、溫、清
</div>
`,
        `
<div style="text-align: left">
**答案：B**
> **解析：** 文本明確指出「四氣即寒、熱、溫、涼」。
</div>
`,
    ],
    [
        `
<div style="text-align: left">
28. 以下哪一項**不屬於**文本中提及嘅「四氣」內容之一？
- A. 寒
- B. 熱
- C. 平
- D. 涼
</div>
`,
        `
<div style="text-align: left">
**答案：C**
> **解析：** 文本定義嘅四氣僅包含「寒、熱、溫、涼」，並不包含「平」。
</div>
`,
    ],
    [
        `
<div style="text-align: left">
29. 根據文本，寒涼藥具有以下哪一種主要作用？
- A. 溫中散寒
- B. 清熱解毒
- C. 補氣養血
- D. 活血化瘀
</div>
`,
        `
<div style="text-align: left">
**答案：B**
> **解析：** 文本明確指出「寒涼藥有清熱解毒的作用」。
</div>
`,
    ],
    [
        `
<div style="text-align: left">
30. 根據文本，若要達到「清熱解毒」嘅功效，通常會選用具有咩藥性嘅中藥？
- A. 溫性
- B. 熱性
- C. 寒涼
- D. 剛燥
</div>
`,
        `
<div style="text-align: left">
**答案：C**
> **解析：** 文本直接說明「寒涼藥有清熱解毒的作用」，故選用寒涼藥。
</div>
`,
    ],
];