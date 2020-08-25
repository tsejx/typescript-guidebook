---
title: 实用工具类型
order: 19
group:
  title: 进阶
  order: 2
nav:
  title: 语法
  order: 1
---

# 实用工具类型

## Partial 可选泛型

`Partial<T>` 构造类型 `T`，并将它 **所有的属性** 设置为 **可选的**。它的返回类型表示输入类型的所有子类型。

```ts
interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: 'organize desk',
  description: 'clear clutter',
};

const todo2 = {
  description: 'throw out trash',
};
```

## Readonly 只读泛型

`Readonly<T>` 构造函数 `T`，并将它 **所有的属性** 设置为 **只读** `readonly`，也就是说构造出的类型的属性不能被再次赋值。

```ts
interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  title: 'Delete inactive users',
};

todo.title = 'Hello';
// Error: cannot reassign a readonly property
```

这个工具可用来表示在运行时会失败的赋值表达式（比如，当尝试给冻结对象的属性再次赋值时）。

```ts
function freeze<T>(obj: T): Readonly<T>;
```

## Record 键值泛型

`Record<K, T>` 构造一个类型，其 **属性名** 的类型为 `K`，**属性值** 的类型为 `T`。这个工具可用来将某个类型的属性映射到另一个类型上。

```ts
type Key = 'home' | 'about' | 'contact';

interface Value {
  title: string;
}

const x: Record<Key, Value> = {
  about: { title: 'about' },
  contact: { title: 'contact' },
  home: { title: 'home' },
};
```

## Pick 挑选属性泛型

`Pick<T, K>` 从类型 `T` 中 **挑选部分属性** `K` 来构造类型。

```ts
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
  title: 'Clean Room',
  completed: false,
};
```

## Exclude 剔除属性泛型

`Exclude<T, U>` 从类型 `T` 中 **剔除所有** 可以赋值给 `U` 的属性，然后构造一个类型。

```ts
type T0 = Exclude<'a' | 'b' | 'c', 'a'>;
// "b" | "c"

type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>;
// "c"

type T2 = Exclude<string | number | (() => void), Function>;
// string | number
```

## Extract 提取属性泛型

`Extract<T, U>` 从类型 `T` 中 **提取所有** 可以赋值给 `U` 的类型，然后构造一个类型。

```ts
type T0 = Extract<'a' | 'b' | 'c', 'a' | 'f'>;
// "a"

type T1 = Extract<string | number | (() => void), Function>;
// () => void
```

## Omit

`Omit<T, K>` 通过从 T 中 **选取** 所有属性 **然后删除** 传入的属性 K 来构造新类型。

```ts
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Omit<Todo, 'description'>;

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
};
```

## NonNullable 剔除空属性泛型

`NonNullable<T>` 从类型 `T` 中剔除 `null` 和 `undefined`，然后构造一个类型。

```ts
type T0 = NonNullable<string | number | undefined>;
// string | number

type T1 = NonNullable<string[] | null | undefined>;
// string[]
```

## ReturnType 返回值类型泛型

`ReturnType<T>` 由函数类型 `T` 的返回值类型构造一个类型。

```ts
type T0 = ReturnType<() => string>;
// string

type T1 = ReturnType<(s: string) => void>;
// void

type T2 = ReturnType<<T>() => T>;
// {}

type T3 = ReturnType<<T extends U, U extends number[]>() => T>;
// number[]

type T4 = ReturnType<typeof f1>;
// { a: number, b: string }

type T5 = ReturnType<any>;
// any

type T6 = ReturnType<never>;
// any

type T7 = ReturnType<string>;
// Error

type T8 = ReturnType<Function>;
// Error
```

## InstanceType 实例泛型

`InstanceType<T>` 由构造函数类型 `T` 的实例类型构造一个类型。

```ts
class C {
  x = 0;
  y = 0;
}

type T0 = InstanceType<typeof C>;
// C
type T1 = InstanceType<any>;
// any
type T2 = InstanceType<never>;
// any
type T3 = InstanceType<string>;
// Error
type T4 = InstanceType<Function>;
// Error
```

## Required 必须泛型

`Required<T>` 构造一个类型，使类型 `T` 的所有属性为必须 `required`

```ts
interface Props {
  a?: number;
  b?: string;
}

const obj1: Props = { a: 5 };

const obj2: Required<Props> = { a: 5 };
// Error: property 'b' missing
```

## ThisType

这个工具不会返回一个转换后的类型。它做为上下文的 `this` 类型的一个标记。注意，若想使用此类型，必须启用 `--noImpliciThis`。

```ts
// Compile with --noImplicitThis

type ObjectDescription<D, M> = {
  data?: D,
  methods?: M & ThisType<D & M>;  // Type of 'this' in methods is D & M
}

function makeObj<D, M>(desc: ObjectDescriptor<D, M>): D & M {
  let data: object = desc.data || {};
  let methods: object = desc.methods || {};
  return { ...data, ...methods } as D & M;
}

let obj = makeObject({
  data: { x: 0, y: 0 },
  methods: {
    moveBy(dx: number, dy: number) {
      this.x += dx;   // Strongly typed this
      this.y += dy;   // Strongly typed this
    }
  }
});((

obj.x = 10;
obj.y = 20;
obj.moveBy(5, 5);
```

上面例子中，`makeObject` 参数里的 `methods` 对象具有一个上下文类型 `ThisType<D & M>`，因此 `methods` 对象的方法里 `this` 的类型为 `{x: number, y: number} & { moveBy(dx: number, dy: number): number}`

在 `lib.d.ts` 里，`ThisType<T>` 标志性接口是个简单的空接口声明。除了在被识别对象子棉量的上下文类型之外，这个接口与一般的空接口没有什么不同。

## Parameters

`Parameters<T>` 构造一个关于函数类型 T 的 **参数类型** 的元组类型。

```ts
declare function foo(arg: { a: number; b: string }): void;

type T0 = Parameters<() => string>;
// []

type T1 = Parameters<(s: string) => void>;
// [string]

type T2 = Parameters<<T>(arg: T) => T>;
// [unknown]

type T3 = Parameters<typeof foo>;
// { a: number, b: string }

type T4 = Parameters<any>;
// unknown[]

type T5 = Parameters<never>;
// any

type T6 = Parameters<string>;
// Error

type T7 = Parameters<Function>;
// Error
```

## ConstructorParameters

通过 `ConstructorParameters<T>` 类型，我们可以提取构造函数类型的所有参数类型。 它会生成构造函数所具有的所有参数类型的元组类型（如果 T 不是函数，则不返回）。

```ts
/**
 * Obtain the parameters of a constructor function type in a tuple
 */
type ConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer P) => any ? P : never;
```

示例：

```ts
type T0 = ConstructorParameters<ErrorConstructor>;
// [(string | undefined)?]

type T1 = ConstructorParameters<FunctionConstructor>;
// string[]

type T2 = ConstructorParameters<RegExpConstructor>;
// [string, (string | undefined)?]
```

实例：

```ts
class Animal {
  constructor(name: string, age: number) {
    return {
      name,
      age
    }
  }
}

type Result = ConstructorParameters<typeof Animal>;
// type Result = [string, number]
```