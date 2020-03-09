---
title: 条件类型
order: 14
group:
  title: 进阶
  order: 2
nav:
  title: 语法
  order: 1
---

# 条件类型

条件类型（Conditional Types）用于表达非均匀类型映射（non-uniform type mapping），能够根据类型兼容关系（即条件）从两个类型中选出一个

```ts
T extends U ? X : Y
```

语义类似于三目运算符，若 `T` 是 `U` 的自类型，则为 `X` 类型，否则就是 `Y` 类型。另外，还有一种情况是条件的真假无法确定（无法确定 `T` 是不是 `U` 的子类型），此时为 `X | Y` 类型。

🌰 **示例**：

```ts
declare function fn<T extends boolean>(x: T): T extends true ? string : number;

// x 的类型为 string | number
let x = fn(Math.random() < 0.5);
```

另外，如果 `T` 或 `U` 含有类型变量，就要等到类型变量都有对应的具体类型后才能得出条件类型的结果。

🌰 **示例**：

```ts
interface Foo {
  x: boolean;
  y: boolean;
}

declare function fn<T>(x: T): T extends Foo ? string : number;

function foo<U>(x: U) {
  // a 的类型为 U extends Foo ? string : number;
  let a = fn(x);
  let b: string | number = a;
}
```

其中 `a` 的类型为 `U extends Foo ? string : number`（即条件不确定的情况），因为 `fn(x)` 中 `x` 的类型 `U` 尚不确定，无从得知 `U` 是不是 `Foo` 的子类型。但条件类型无非两种可能类型，所以 `let b: string | number = a;` 一定是合法的（无论 `x` 是什么类型）。

## 嵌套条件类型



## 可分配条件类型

可分配条件类型（distributive conditional type）中被检查的类型是个裸类型参数（naked type parameter）。其特殊之处在于满足分配律：

```ts
(A | B | C) extends U ? X : Y
```

等价于

```ts
(A extends U ? X : Y) | (B extends U ? X : Y) | (C extends U ? X : Y)
```

🌰 **示例**：嵌套的条件类型类似于模式匹配

```ts
type TypeName<T> =
    T extends string ? 'string' :
    T extends number ? 'number' :
    T extends boolean ? 'boolean' :
    T extends undefined ? 'undefined' :
    T extends Function ? 'Function' :
    'object';

type T1 = TypeName<string>; // 'string'
type T2 = TypeName<'foo'>; // 'string'
type T3 = TypeName<true>; // 'boolean'
type T4 = TypeName<() => void>; // 'function'
type T5 = TypeName<string[]>; // 'object'
type T6 = TypeName<string | (() => void)>;
```

另外，在 `T extends U ? X : Y` 中，`X` 中出现的 `T` 都具有 `U` 类型约束：

```ts
type BoxedValue<T> = { value: T };
type BoxedArray<T> = { array: T[] };
type Boxed<T> = T extends any[] ? BoxedArray<T[number]> : BoxedValue<T>;

// T 类型等价于联合类型 BoxedValue<string> | BoxedArray<boolean>
type T = Boxed<string | boolean[]>;
```

上述代码中 `Boxed<T>` 的 `true` 分支具有 `any[]` 类型约束，因此能够通过索引访问（`T[number]`）得到数组元素的类型。

**应用场景**

条件类型结合映射类型能够实现具有针对性的类型映射（不同源类型能够对应不同的映射规则）。

🌰 **示例**：

```ts
type FunctionPropertyNames<T> = {[K in keyof T]: T[K] extends Function ? K : never}[keyof T];

// 摘出所有函数类型的属性
type FunctionProperties<T> = Pick<T, FunctionPropertyNames<T>>;

interface Part {
    id: number;
    name: string;
    subparts: Part[];
    updatePart(newName: string): void;
}

// T 类型等价于字符串字面量类型 "updatePart"
type T = FunctionPropertyNames<Part>;
```

可分配条件类型通常用来筛选联合类型：

```ts
type Diff<T, U> = T extends U ? never : T;

// T 类型等价于联合类型 "b" | "d"
type T = Diff<"a" | "b" | "c", "a" | "e">;

// 更进一步的
type NeverNullable<T> = Diff<T, null | undefined>;

function fn<T>(x: T, y: NeverNullable<T>) {
    x = y;
    // Error Type 'T' is not assignable to type 'Diff<T, null>'
    y = x;
}
```

拆解逻辑分析：

1. 先判断 `"a"` 是否可以被赋值给这个字面量联合类型 `"a"| "e"`，答案是可以的，所以返回 `never`
2. 继续，因为 `"b"` 不可以被赋值给字面量联合类型 `"a"| "e"`，所以返回 `"b"`
3. 继续，因为 `"c"` 不可以被赋值给字面量联合类型 `"a"| "e"`，所以返回 `"c"`
4. 最后，`never`、`"b"` 和 `"c"` 的联合类型为 `"b" | "c"`

## 条件类型中的类型推断

在条件类型的 `extends` 子句中，可以通过 `infer` 声明引入一个将被推断的类型变量。

🌰 **示例**：

```ts
type ReturnType<T> = T extends (...args: any[] => infer R ? R : any);
```

上例中引入了类型变量 `R` 表示函数返回类型，并在 `true` 分支中引用，从而提取出返回类型。

> 如果存在重载，就取最后一个签名（按照惯例，最后一个通常是最宽泛的）进行推断

🌰 **示例**：

```ts
declare function foo(x: string): number;
declare function foo(x: number): string;
declare function foo(x: string | number): string | number;

// T 类型等价于联合类型 string | number
type T = ReturnType<typeof foo>;
```

更多示例参阅 [Type inference in conditional types](https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-inference-in-conditional-types)

## 预定义的条件类型

TypeScript 还内置了一些常用的条件类型：

```ts
// 从 T 中去掉属于 U 的子类型的部分，即之前示例中的 Diff
type Exclude<T, U> = T extends U ? never : T;

// 从 T 中筛选出属于 U 的子类型的部分，之前示例中的 Filter
type Extract<T, U> = T extends U ? T : never;

// 从 T 中去掉 null 与 undefined 部分
type NonNullable<T> = T extends null | undefined ? never : T;

// 取出函数类型的返回类型
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

// 取出构造函数类型的示例类型
type InstanceType<T extends new (...args: nay) => any> = T extends new (...args: any) => infer R ? R : any;
```

摘自 [TypeScript/lib/lib.es5.d.ts](https://github.com/Microsoft/TypeScript/blob/master/lib/lib.es5.d.ts)

具体示例参阅 [Predefined conditional types](https://www.typescriptlang.org/docs/handbook/advanced-types.html#predefined-conditional-types)