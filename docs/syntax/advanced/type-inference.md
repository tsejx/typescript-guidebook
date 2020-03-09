---
title: 类型推论
order: 3
group:
  title: 进阶
  order: 2
nav:
  title: 语法
  order: 1
---

# 类型推论

如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）（又称类型推断、类型判断）的规则推断出一个类型。

以下代码虽然没有指定类型，但是会在编译的时候报错：

```ts
let num = 'seven';
num = 7;

// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
```

事实上，它等价于：

```ts
let num: string = 'seven';
num = 7;

// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
```

TypeScript 会在没有明确的指定类型的时候推测出一个类型，这就是类型推论。

如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 `any` 类型而完全不被类型检查：

```ts
let num;
num = 'seven';
num = 7;
```
