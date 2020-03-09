---
title: 映射类型
order: 13
group:
  title: 进阶
  order: 2
nav:
  title: 语法
  order: 1
---

# 映射类型

映射类型（Mapped Types）可以基于旧类型创建新类型。

常见使用场景：

- 将现有类型转换为可选的
- 将现有类型转换为只读的

在实际应用中，可能需要将现有类型转换为可选的。

🌰 **示例：**

```ts
interface Person {
  name: string;
  age: number;
  address: string;
}
```

将上述代码接口类型中的属性转换为可选。

```ts
interface PartialPerson {
  name?: string;
  age?: number;
  address?: string;
}
```

映射类型转换可以使用如下方式：

```ts
// 将原有类型所有属性转为可选的
type Partial<T> = {
  [P in keyof T]?: T[P];
};

type PartialPerson = Partial<Person>;

// 将原有类型所有属性转为只读的
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
```

`[P in keyof T]`：类型变量 `K` 会把字符串字面量联合类型 `T` 的每个字符串都映射为属性。

当然，由于 `Partial<T>` 和 `Readonly<T>` 实用性强，它们与 `Pick` 和 `Record` 共同被包含进了 TypeScript 的标准库中。

```ts
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type Record<K extends string, T> = {
  [P in K]: T;
};
```

`Readonly`，`Partial` 和 `Pick` 是同态的，但 `Record` 不是。 因为 `Record` 并不需要输入类型来拷贝属性，所以它不属于同态：

```ts
type ThreeStringProps = Record<'prop1' | 'prop2' | 'prop3', string>;
```

非同态类型本质上会创建新的属性，因此它们不会从它处拷贝属性修饰符。

## 其他映射类型转化案例

在真正的应用里，可能不同于上面的 Readonly 或 Partial。 它们会基于一些已存在的类型，且按照一定的方式转换字段。 这就是 `keyof` 和索引访问类型要做的事情：

```ts
type NullablePerson = {
    [P in keyof Person]: Person[P] | null,
}

type PartialPerson = {
    [P in keyof Person]?: Person[P]
}
```

但它更有用的地方是可以有一些通用的版本。

```ts
type Nullable<T> = {
  [P in keyof Person]: T[P] | null;
};

type Partial<T> = {
  [P in keyof T]?: T[P];
};
```

在这些例子中，属性列表是 `keyof T` 且结果类型是 `T[P]` 的变体。这是使用通用映射类型的一个好模版。因为这类转换是同态的，映射只作用于 `T` 的属性而没有其他的。编译器知道在添加任何新属性之前可以拷贝所以所存在的属性修饰符。例如，假设 `Person.name` 是只读的，那么 `Partial<Person>.name` 也将是只读的且为可选的。

## 由映射类型进行推断

现在你了解了如何包装一个类型的属性，那么接下来就是如何拆包。 其实这也非常容易：

```ts
function unproxify<T>(t: Proxify<T>): T {
  let result = {} as T;
  for (const k in t) {
    result[k] = t[k].get();
  }
  return result;
}

let originalProps = unproxify(proxyProps);
```

注意这个拆包推断只适用于**同态**的映射类型。 如果映射类型不是同态的，那么需要给拆包函数一个明确的类型参数。
