---
title: This类型
order: 15
group:
  title: 进阶
  order: 2
nav:
  title: 语法
  order: 1
---

# This 类型

This 类型（This Types）表示所属类或接口的子类型（称之为有界多态性 F-bounded polymorphism）。

🌰 **示例**：

```ts
class BasicDOMNode {
    constructor (private el: Element) {}
    addClass(cssClass: string) {
        this.el.classList.add(cssClass);
        return this;
    }
}

class DOMNode extends BasicDOMNode {
    addClasses(cssClasses: string[]) {
        fo (let cssClass of cssClasses) {
            this.addClass(cssClass)
        }
        return this;
    }
}

const node = new DOMNode(document.querySelector('div'));

node.addClass('page').addCLasses(['active', 'spring']).addClass('first');
```

上述示例代码中，`addClass` 与 `addCLasses` 的类型签名分别是：

```ts
addClass(cssClass: string): this;
addClasses(cssClasses: string[]): this;
```

上述的链式调用中，`this` 类型能够自动对应到所属类实例类型上。没错，这种 JavaScript 运行时特性，在 TypeScript 静态类型系统中同样支持。

具体地，TypeScript 中的 This 类型分为两类：

- 类/接口（的成员方法）中的 `this` 类型
- 普通函数中的 `this` 类型

## 类/接口中 this 类型

我们知道运行时 `this` 指向当前类或其子类实例，这在 JavaScript 运行时是一种非常常见的行为。

也就是说，`this` 的类型并不是固定的，取决于其调用上下文。

🌰 **示例**：

```ts
class A {
  foo() {
    return this;
  }
}

class B extends A {
  bar() {
    return this;
  }
}

// A 类实例类型
const res1 = new A().foo();

// B 类实例类型
const res2 = new B().foo();

// B 类实例类型
const res3 = new A().foo.call(new B());
```

类 `A` 中 `this` 并不总是指向 `A` 类实例（也有可能是 `A` 的子类实例），那么，应该如何描述 `this` 的类型？

如果给最初的场景添上类型描述的话，我们可能会这样尝试：

```ts
declare class A {
  foo(): A;
}

declare class B extends A {
  bar(): B;
}

// Error: Property 'bar' does not exist on type 'A'.
const res = new B().foo().bar();
```

意料之中的结果，`foo(): A` 返回 `A` 类实例，当然找不到子类 `B` 的成员方法。实际期望的是：

```
   A类实例类型，具有foo()方法
       |
new B().foo().bar()
             |
         B类实例类型，具有bar()方法
```

那么，进一步尝试：

```ts
declare class A {
  foo(): A & B;
}

declare class B extends A {
  bar(): B & A;
}

const res = new B().foo().bar();
```

`B` 类中的 `this` 既是 `B` 类实例也是 `A` 类实例，姑且认为 `bar(): B & A` 是合适的，但无论如何 `foo(): A & B` 是不合理的，因为基类实例并不一定是子类实例。我们似乎没有办法给 `this` 标出一个合适的类型，尤其是在 `superThis.subMethod()` 的场景。

因此，针对类似的场景，有必要引入一种特殊的类型，即 `this` 类型：

`this` 类型表现为所属类/接口的子类型，这与 JavaScript 运行时的 `this` 机制一致。

🌰 **示例**：

```ts
class A {
  foo(): this {
    return this;
  }
}

class B extends A {
  bar(): this {
    return this;
  }
}

const res = new B().foo().bar();
```

也就是说，this 类型就是 this 值的类型：

> In a non-static member of a class or interface, this in a type position refers to the type of this.

其实现原理，就是把类/接口看作是具有隐式类型参数 `this` 的泛型，并加上其所在类/接口相关的类型约束。

具体地，`this` 类型在实现上相当于 `A<this extends A<A>>`（即经典的 [CRTP 奇异递归模版模式](https://en.wikipedia.org/wiki/Curiously_recurring_template_pattern)），类中 `this` 值的类型就是泛型参数 `this`。出了当前类/接口的上下文，`this` 的类型就是 `A<this: A>`，类型兼容性等与泛型一致。

所以，`this` 类型就像一个带有类派生关系约束的隐式类型参数。

## 函数中的 this 类型

除了类/接口外，`this` 类型还适用于普通函数。

不同于类或接口中的 `this` 类型通常隐式发挥作用（如自动 [类型推论](./type-inference)），函数中的 `this` 类型大都通过现式声明来约束函数体中 `this` 值的类型。

把 `this` 显式地作为函数的（第一个）参数，从而限定其类型，像普通参数一样进行类型检查。

🌰 **示例**：仅在显式声明了 `this` 值类型时才进行检查

```ts
declare class Person {
  foo();
}

const bar = new Person();

// baz 类型为 (this: Person) => any
let baz = bar.foo;

baz();
```

特殊地，肩痛函数（lambda）的 `this` 无法手动限定其类型。

## 应用场景

### 流式接口

`this` 类型让流式接口（fluent interface）变得很容易描述。

```ts
class A {
  foo(): this {
    return this;
  }
}

class B {
  bar(): this {
    return this;
  }
}

const res = new B().foo().bar();
```

所谓的流式接口（设计层面），可以简单理解为链式调用（实现层面）。

简言之，流式接口式 OOP 中的一种 API 设计方式，通过链式方法调用让远吗具有可读性。

[Fluent Interface](https://en.wikipedia.org/wiki/Fluent_interface)

### 描述 this 的类型

普通函数中的 `this` 类型允许我们像描述普通参数一样限定 `this` 的类型，这在回调函数场景尤为重要。

🌰 **示例**：

```ts
class Cat {
  constructor(public name: string) {}
  meow(this: Cat) {
    console.log('Meow~~');
  }
}

class EventBus {
  on(type: string, handler: (this: void, ...params) => void) {
    /* ... */
  }
}

// Error: Argument of type '(this: Cat) => void' is not assignable to parameter of type '(this: void, ...params: any[]) => void'.
new EventBus().on('click', new Cat('Neko').meow);
```

### 追踪上下文类型

有了 `this` 类型，`bind`、`call`、`apply` 等场景也能正确维持类型约束，要求当前函数 `this` 与传入的目标对象类型一致：

```ts
apply<T, A extends any[], R>(this: (this: T, ...args: A) => R, thisArg: T, args: A): R;
call<T, A extends any[], R>(this: (this: T, ...args: A) => R, thisArg: T, ...args: A): R;
bind<T, A extends any[], R>(this: (this: T, ...args: A) => R, thisArg: T): (...args: A) => R;
```

让类似的错误暴露出来（需要开启 strictBindCallApply 选项）。

```ts
class Foo {
  constructor(a: number, b: string) {}
  bar(this: this, a: number, b: string): string {
    return '';
  }
}

declare let foo: Foo;

let bind = foo.bar.bind(undefined); // Error
let call = foo.bar.call(undefined, 10, 'Hello'); // Error
let apply = foo.bar.apply(undefined, [10, 'Hello']); // Error
```

关于 `bind`、`call`、a`pply` 等类型约束的更多信息，见 [Strict bind, call, and apply methods on functions](https://github.com/Microsoft/TypeScript/pull/27028)。
