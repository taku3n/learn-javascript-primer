/*
 ## コメント
*/

// これは１行コメント

/*
  これは複数行
  コメント
*/

/*
 ## 変数と宣言
*/

const morning = "フレンチトースト";
console.log("朝食は" + morning);

let lunch = "カレー";
lunch = "家系ラーメン";
console.log("ランチは" + lunch);

var dinner = "きつねうどん";
console.log("夕食は" + dinner);

/*
 ## データ型とリテラル
*/

console.log(typeof true); // => "boolean"
console.log(typeof 46); // => "number"
console.log(typeof 1996199254740992n); // => "bigint"
console.log(typeof "これは文字列です"); // => "string"
console.log(typeof Symbol("シンボル")); // => "symbol"
console.log(typeof undefined); // => "undefined"
console.log(typeof null); // => "object"
console.log(typeof ["配列"]); // => "object"
console.log(typeof { key: "value" }); // => "object"
console.log(typeof function () {}); // => "function"

console.log(`今日の朝ごはんは${morning}でした。`);

// undefinedが宣言できる(非推奨)
var undefined = "独自の未定義値"; // undefinedという名前の変数をエラーなく定義できる
console.log(undefined); // => "独自の未定義値"

// オブジェクト
const apple = {
  jp_name: "りんご",
  color: "red", // ドキュメント上ではキーもダブルクォートで囲われていたが、Pritterが外している
  shape: "sphere",
};
console.log(`りんごの色は${apple.color}で形は${apple.shape}です。`);

// 配列
const tdd_steps = [
  "テストケースを作成する",
  "テスト結果をグリーンにする",
  "リファクタリングする",
];
console.log(`ToDoは「${tdd_steps[2]}」です。`);
