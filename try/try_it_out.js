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

// 数値
num_decimal = 9980; //10進数
console.log(`10進数の例:${num_decimal}`);

num_binary = 0b0101; //2進数
console.log(`2進数の例:${num_binary}`);

num_octal = 0o156; //8進数
console.log(`8進数の例:${num_octal}`);

num_hexadecimal = 0x00aa; //16進数
console.log(`16進数の例:${num_hexadecimal}`);

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

/*
 ## 演算子
*/

// 単項プラス演算子

console.log(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9);

restaurant_name = "まるまるカフェ";
restaurant_menu = "しかくパン";

console.log(restaurant_name + "で" + restaurant_menu + "を食べます。");

// インクリメント演算子
let increment_num = 1;
increment_num++;
increment_num++;
increment_num++;
console.log("1を3回インクリメントすると" + increment_num);

// 厳密等価演算子
const dog = "ポメラニアン";
const cat = "ラグドール";
const string_wrapper_dog = new String("ポメラニアン");

console.log(dog === cat);
console.log(dog === dog);
console.log(dog === string_wrapper_dog); //Stringでラップすると型が違うと判定される

// AND演算子
console.log(true && "Andはtrueで右側を返すので出力される");
console.log(false && "Andはfalseで左側を返すので出力されない");

// Nullish coalescing演算子
let undefined_value;
// undefined_value = "undefinedじゃなければ左側が出力される";
console.log(undefined_value ?? "undefinedだったら右側が出力される");

// 条件（三項）演算子
console.log(true ? "trueの時に返される左側" : "falseの時に返される右側");
console.log(false ? "trueの時に返される左側" : "falseの時に返される右側");

/*
 ## 暗黙的な型変換
*/

// 文字列型の数字 と 数値型の数字
const x = 1,
  y = "2",
  z = 3;
console.log(x + y + z); // => "123"
console.log(y + x + z); // => "213"
console.log(x + z + y); // => "42"

// 文字列から数値の取り出し
const string_okaikei = "1480円になります。";
console.log(Number.parseInt(string_okaikei, 10)); // => 1480

const string_padding = "余白を10px足してください。";
console.log(Number.parseInt(string_padding, 10)); // => 数値の前に文字列がくるとNaN
