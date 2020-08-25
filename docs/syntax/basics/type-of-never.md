---
nav:
  title: 语法
  order: 1
group:
  title: 基础
  order: 1
title: never 类型
order: 5
---

# never 类型

`never` 类型表示那些永不存在的值的类型。特别的，`never` 可以是永远不反悔的函数的返回值类型，也可以是变量在类型收窄中不可能为真的类型。

`never` 类型具有以下特征：

- 没有类型是 `never` 的子类型，并且可以赋值给任何类型
- 没有类型是 `never` 的子类型或者可以拷贝给 `never`（除了 `never` 本身）
- 在一个没有返回值标注的函数表达式或箭头函数中，如果函数没有 `return` 语句，或者仅有表达式类型为 `never` 的 `retur` 语句，并且函数的终止点无法被执行到（按照控制流分析），则推导出的函数返回值类型是 `never`
- 在一个明确指定了 `never` 返回值类型的函数中，所有 `return` 语句（如果有）表达式的值必须为 `never` 类型，且函数不应能执行到终止点

`never` 类型同时也是 TypeScript 中的底层类型，下列是一些自然被分配的例子：

- 一个从来不会有返回值的函数（如：函数内含有 `while(true) {}`）
- 一个总是会抛出错误的函数（如：`function foo() { throw new Error('Not Implemented') }`，`foo` 的返回类型是 `never`）

```ts
function infiniteloop(): never {
  while (true) {}
}

function error(message: string): never {
  throw Error('message');
}

function fail() {
  return error('Something wrong happen.');
}
```

由于 `never` 是所有类型的子类型，在联合类型中它始终被省略，并且只要函数有其他返回的类型，推导出的函数返回值类型中就会忽略它。

因为 `never` 可以赋值给任何类型，返回 `never` 的函数可以在回调需要返回一个具体类型的时候被使用：

```ts
function foo(cb: () => string) {
  let res = cb();
  return res;
}

foo(() => 'Hello world!');
foo(() => fail());
foo(() => {
  throw new Error();
});
```

## 与 `void` 的差异

一旦有人告诉你，`never` 表示一个从来不会优雅的返回的函数时，你可能马上就会想到与类似的 `void`，然而实际上，`void` 表示没有任何类型，`never` 表示永远不存在的值的类型。

当一个函数没有返回值时，它返回了一个 `void` 类型，但是，当一个函数根本就没有返回值时（或者总是抛出错误），它返回了一个 `never`，`void` 指可以被赋值的类型（在 `strictNullChecking` 为 `false` 时），但是 `never` 不能赋值给其他任何类型，除了 `never`。

---

**参考资料：**

- [知乎：TypeScript 中的 nerver 类型具体有什么用？](https://www.zhihu.com/question/354601204)
- [TS 中何时使用 never 与 unknown 类型](https://www.zhangxinghai.cn/2019/07/24/when-to-use-never-and-unknown-in-typescript.html)
