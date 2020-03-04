---
title: 原始数据类型
order: 1
group:
  title: 基础
  order: 1
nav:
  title: 语法
  order: 1
---

# 原始数据类型

JavaScript 的类型分为两种：原始数据类型（Primitive data types）和对象类型（Object types）。

原始数据类型包括：

- 布尔值
- 数值
- 字符串
- `null`
- `undefined`
- ES 中的新类型 `Symbol`

## 布尔值

布尔值是最基础的数据类型，在 TypeScript 中，使用 boolean 定义布尔值类型：

```ts
let isDone: boolean = false;
```

注意，使用构造函数 Boolean 创造的对象不是布尔值：

```ts
let createdByNewBoolean: boolean = new Boolean(1);

// Type 'Boolean' is not assignable to type 'boolean'.
//   'boolean' is a primitive, but 'Boolean' is a wrapper object. Prefer using 'boolean' when possible.
```

事实上 `new Boolean()` 返回的是一个 `Boolean` 对象：

```ts
let createdByNewBoolean: Boolean = new Boolean(1);
```

直接调用 Boolean 也可以返回一个 boolean 类型：

```ts
let createdByNewBoolean: boolean = Boolean(1);
```

在 TypeScript 中 boolean 是 JavaScript 中的基本类型，而 `Boolean` 是 JavaScript 中的构造函数。其他基本类型（除了 `null` 和 `undefined`）一样，不再赘述。

## 数值

使用 number 定义数值类型：

```ts
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;

// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;

// ES6 中的八进制表示法
let octalLiteral: number = 0o744;

let notANumber: number = NaN;
let infinityNumber: number = Infinity;
```

编译结果：

```ts
var decLiteral = 6;
var hexLiteral = 0xf00d;

// ES6 中的二进制表示法
var binaryLiteral = 10;

// ES6 中的八进制表示法
var octalLiteral = 484;

var notANumber = NaN;
var infinityNumber = Infinity;
```

其中 `0b1010` 和 `0o744` 是 [ES6 中的二进制和八进制表示法](http://es6.ruanyifeng.com/#docs/number#%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%92%8C%E5%85%AB%E8%BF%9B%E5%88%B6%E8%A1%A8%E7%A4%BA%E6%B3%95)，它们会被编译为十进制数字。

## 字符串

使用 `string` 定义字符串类型：

```ts
let name: string = 'Tom';
let age: number = 25;

// 模板字符串
let sentence: string = `Hello, my name is ${name}.
I'll be ${age + 1} years old next month.`;
```

编译结果：

```ts
var name = 'Tom';
var age = 25;
// 模板字符串
var sentence =
  'Hello, my name is ' + name + ".\nI'll be " + (age + 1) + ' years old next month.';
```

`$(expr)` 用来在模版字符串中嵌入表达式。

## 空值

JavaScript 没有空值（void）的概念，在 TypeScript 中，表示没有任何返回值的函数

```ts
function alertName(): void {
  alert('My name is Tom');
}
```

声明一个 `void` 类型的变量没有什么用，因为你只能将它赋值为 `undefined` 和 `null`。

```ts
let unusable: void = undefined;
```

## Null 和 Undefined

在 TypeScript 中，可以使用 `null` 和 `undefined` 来定义这两个原始数据类型：

```ts
let u: undefined = undefined;
let n: null = null;
```

与 `void` 的区别是，`undefined` 和 `null` 是所有类型的子类型。也就是说 `undefined` 类型的变量，可以赋值给 `number` 类型的变量。

```ts
// 这样不会报错
let num: number = undefined;
```

```ts
// 这样也不会报错
let u: undefined;
let num: number = u;
```

而 `void` 类型的变量不能赋值给 `number` 类型的变量：

```ts
let u: void;
let num: number = u;
// Type 'orror' is not assignable to type number
```
