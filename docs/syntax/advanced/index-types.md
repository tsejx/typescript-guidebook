---
title: 索引类型
order: 12
group:
  title: 进阶
  order: 2
nav:
  title: 语法
  order: 1
---

# 索引类型

索引类型（Index Types）的使用让编译器能够检查使用了动态属性名的类型。

常见的 JavaScript 模式就是从对象中选取属性的子集。

🌰 **示例：**

```ts
function pluck<T, K extends keyof T>(o: T, names: K[]): T[k][] {
  return names.map(n => o[n]);
}

interface Person {
  name: string;
  age: number;
}

const tom: Person = {
  name: 'Tom',
  age: 25,
};

const values: string[] = pluck(tom, ['name']);
```

上述代码会检查 `name` 是否真的是 `Person` 的一个属性。本例还引入了几个新的类型操作符，比如 `keyof T`，索引类型的查询操作符。

## 索引查询操作符

索引类型的查询操作符 `keyof T`。

对于任何类型查询操作符，假设 `T` 是一个类型，那么 `keyof T` 产生的类型是 `T` 的属性名称字符串字面量类型构成的联合类型。

```ts
interface Person {
  name: string;
  age: number;
  address: string;
}

type person = keyof Person; // 'name' | 'age' | 'address'
```

`keyof Person` 是完全可以与 `'name' | 'age' | 'address'` 互相替换的。

不同的是如果你添加了其他的属性到 `Person`，例如 `gender: string`，那么 `keyof Person` 会**自动**变为 `'name' | 'age' | 'address' | 'gender'`。

你可以在像 `pluck` 函数这类上下文中使用 `keyof`，因为在使用之前你并不清楚可能出现的属性名。但编译器会检查你是否传入正确的属性名给 `pluck`：

```ts
pluck(tom, ['age', 'unknow']); // error: 'unknown' is not in 'name' | 'age'
```

## 索引访问操作符

索引访问操作符 `T[K]`，表示 `T` 的属性 `K` 的类型。

```ts
interface Person {
  name: string;
  age: number;
}

type name = Person['name'];
// type name = string
```

就像索引类型查询一样，可以在普通的上下文中使用 `T[K]`，这正是它强大所在。只要确保类型变量 `K extends keyof T` 就可以了。

🌰 **示例：**

```ts
function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
  return o[name]; // o[name] is of type T[K]
}
```

`getProperty` 里的 `o: T` 和 `name: K`，意味着 `o[name]: T[K]`。当你返回 `T[K]` 的结果，编译器会实例化键的真实类型，因此 `getProperty` 的返回值类型会随着你需要的属性改变。

```ts
const name: string = getProperty(person, 'name');
const age: number = getProperty(person, 'age');

const unknown = getProperty(person, 'unknown'); // error, 'unknown' is not in 'name' | 'age'
```

## 字符串索引签名

如果类型 `T` 带有字符串索引签名，那么 `keyof T` 为 `string | number` 类型。

如果类型 `T` 带有数字索引签名，那么 `keyof T` 为 `number` 类型。

如果类型 `T` 带有索引签名，那么 `T[K]` 为索引签名的类型。

```ts
interface Map<T> {
  [key: string]: T;
}

let keys: keyof Map<number>;    // string

let value: Map<number>['foo'];  // number
```
