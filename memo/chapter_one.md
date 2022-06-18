# 第１部: 基本文法

## JavaScript とは

- そもそも JavaScript とはどんなプログラミング言語なのかの理解が深まった。
- ECMAScript
  - 実行環境によらない共通な動作が定義された仕様。
  - ESMAScript の読み方は"エスマスクリプト"
  - ES2015 以降は毎年新しいバージョンがリリースされている。
  - 最新の仕様書: <https://tc39.es/ecma262/>
    - Living Standard(常に最新版を公開する仕組み) で管理されている。
  - 仕様策定のプロセスは 5 段階(0 から 4 まで)のステージに分かれる
    - ステージ 4 未満の使用は安定していないことが多い
- JavaScript のリファレンスサイト: <https://developer.mozilla.org/ja/>

## コメント

### １行コメント

```js
// １行コメント
```

### 複数行コメント

```js
/*
  複数行
  コメント
*/
```

- 複数行コメントの中に複数行コメントを書くことはできない。

### HTML-like コメント

```js
<!-- この行はコメントと認識される
console.log("この行はJavaScriptのコードとして実行される");
-->  この行もコメントと認識される
```

- 後方互換性のための仕様。
- JavaScript は一度入った仕様が後続のバージョンで使用できなくなることはほとんどないが、その代わり新しい機能は増え続けるため学び続ける必要がある。

## 変数と宣言

- `const`, `let`, `var`,の 3 つの宣言キーワードがある

### const

- 再代入できない変数の宣言と初期値の定義ができる。

```js
const 変数名 = 初期値;
```

- `,`(カンマ)で区切ると複数の変数を設定できる(3 つのキーワード共通)。

```js
const bookTitle = "JavaScript Primer",
  bookCategory = "プログラミング";
```

- const キーワードで定義した変数に後から違う値を代入することはできない(エラーになる)。

```js
const bookTitle = "JavaScript Primer";
bookTitle = "新しいタイトル"; // => TypeError: invalid assignment to const 'bookTitle'
```

- 参照透過性
  - 変数の値は最初に定義した値と常に同じである
- 変数への再代入は参照透過性の掟破りになりバグの温床になるからやめよう。
  - 変数に再代入しないケースは`const`の仕様が推奨されている。

### let

- 値の再代入ができる変数の宣言と初期値の定義ができる。

```js
let 変数名 = 初期値;
```

- 初期値を設定しないことも可能。このときは`undefined`という値で初期化。

```js
let bookTitle;
// `bookTitle`は自動的に`undefined`という値になる
```

- 何度でも再代入が可能。

```js
let count = 0;
count = 1;
count = 2;
count = 3;
```

### var

- 値の再代入が可能な変数の宣言と初期化ができる。
- var の使い方は let とほぼ同じ。

- `const`, `let`との違いは同じ名前の変数の再定義ができる点。

```js
// const, let は同じ名前の変数の再定義ができない(エラー発生)
let x;
// 同じ変数名の変数"x"を定義するとSyntaxErrorとなる
let x; // => SyntaxError: redeclaration of let x

// var は同じ名前の変数の再定義ができてしまう(値を置き換えちゃう)
var x = 1;
// 同じ変数名の変数"x"を定義できる
var x = 2;
// 変数xは2となる
```

- `var`にはさまざまな問題があり、ほぼ全てのケースで`const`か`let`に置き換え可能だから使用しないようにしよう。

### 変数名に使える名前のルール

- 識別子のルール

  1. 半角アルファベット、`_`（アンダースコア）、`$`（ダラー）、数字を組み合わせた名前にする
  2. 数字から始まる名前は使えない
  3. 予約語と被る名前は使えない

- JavaScript では大文字と小文字は区別される。

```js
let $; // OK: $が利用できる
let _title; // OK: _が利用できる
let jquery; // OK: 小文字のアルファベットが利用できる
let TITLE; // OK: 大文字のアルファベットが利用できる
let es2015; // OK: 数字は先頭以外なら利用できる
let 日本語の変数名; // OK: 一部の漢字や日本語も利用できる
```

- 漢字や日本語は利用できるが、環境によって全角文字が混じると使用しにくくなるため非推奨。

- 数字始まりの名前はダメ。

```js
let 1st; // NG: 数字から始まっている
let 123; // NG: 数字のみで構成されている
```

- 予約後(構文として意味を持つキーワード)は使用できない。

```js
let let; // NG: `let`は変数宣言のために予約されているので利用できない
let if; // NG: `if`はif文のために予約されているので利用できない
```

- 予約後の一覧は MDN のドキュメントを参照: <https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Lexical_grammar>

### const は定数ではない

- 定数: 一度定義した名前（変数名）が常に同じ値を示すもの
- プリミティブなデータ: 数値や文字列などオブジェクト以外のデータ
- `const`でプリミティブなデータで初期化すると実質的に定数だが、オブジェクトなども定義可能。

```js
// `const`でオブジェクトを定義している
const object = {
  key: "値",
};
// オブジェクトそのものは変更できてしまう
object.key = "新しい値";
```

- `const`で宣言した変数が常に同じ値を示すとは限らないから、定数とは呼べない。

## 値の評価と表示

- 値の評価: 入力した値を評価してその結果を返すこと
- JavaScript Primer では FireFox の開発者ツールを使用した説明が記載されていたが、手元では Chrome を使ってやってみよう。

### ブラウザで JavaScript を実行する

- REPL(read–eval–print loop): コードを評価してその結果を表示する機能
- Chrome で試してみると、エンターキーを押す前に結果が薄い文字で表示されていて便利。
- REPL ではその REPL を終了するまで const キーワードなどで宣言した変数が残り続けるから注意する。
  - たとえば１行ずつ実行したとしても、`const`で同じ変数名で二度目の変数定義をしようとするとエラーになる。
- ブラウザの開発者ツールだとページをリロードすると REPL がリセットされる。
  - redeclaration（再定義）のエラーが出たらとりあえずリロードしてみる。

### HTML ファイルを作成し JavaScript コードを読み込む方法

- エディタの設定

  - 文字コード: UTF-8
  - 改行コード: LF

- `<script src="./index.js"></script>`により同じディレクトリ内の js ファイルを読み込む。
  - [example/index.js](../example/index.js)
  - [example/index.html](../example/index.html)

### Console API

- ブラウザのコンソールに出力する。
- `console.log(引数)`の引数にコンソール表示したい値を渡すことで、評価結果がコンソールに表示される。

- 先に引数である変数を評価してから、その結果をコンソールに表示することも可能。

```js
const total = 42 + 42;
console.log(total); // => 84
```

- プリントデバッグとしても利用される。

### コードの評価とエラー

- エラーには大きく分けて構文エラーと実行時エラーの 2 種類がある。

### 構文エラー

- コードをパース(解釈)する段階で文法の間違いがあるとプログラムは実行されず構文エラーを返す。

```js
console.log(1; // => SyntaxError: missing ) after argument list
```

> SyntaxError: missing ) after argument list[詳細] index.js:1:13

- 下記のようにエラーの種類・内容・ファイル名・行番号・列番号が記される。

```txt
SyntaxError: missing ) after argument list[詳細] index.js:1:13
^^^^^^^^^^^  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^      ^^^^^^^^　^^^^
エラーの種類                |                        | 　行番号:列番号
                  エラー内容の説明                 ファイル名
```

- Firefox では[詳細]というリンクがエラーメッセージに関する MDN の解説ページへのリンクとなっているらしい。
  - Chrome ではリンクにはなっていなかったが検索すると一番上に同じ MDN の解説ページが表示された。

### 実行時エラー

- プログラムを実行中に発生するエラー。ランタイムエラーとも。

```js
const value = "値";
console.log(x); // => ReferenceError: x is not defined
```

> ReferenceError: x is not defined[詳細] index.js:2:1

- 実行時エラーは構文エラーよりも種類が多い。
- デバッグ: エラーの原因を特定し、修正する作業

### エラーの原因を探すのに参考になるサイト

- [MDN JavaScript エラーリファレンス](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Errors)
  - 構文エラー、実行時エラーの典型例がまとまっている
- エラー部の検索に使えるサイト
  - [google](https://www.google.com/)
  - [github](https://github.com/)
  - [Stack Overflow](https://stackoverflow.com/)
