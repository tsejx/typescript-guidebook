---
title: 类型保护
order: 4
group:
  title: 进阶
  order: 2
nav:
  title: 语法
  order: 1
---

# 类型保护

对于联合类型的变量，我们是无法知道编译时的具体类型的。JavaScript 中常用的方式是检查成员是否存在，但是 TypeScript 中联合类型只有访问联合类型中共同拥有的成员。

可是通过类型断言来进行类型判断，但是有个问题就是每个分支都需要进行类型判断。

TypeScript 的类型保护机制：一次判断，整个作用域/所有分支有效。

类型保护（Type Guards）就是一些表达式，会在运行时检查以确保在某个作用域内的类型。

## typeof 类型保护

`typeof` 类型保护用于判断变量是哪种原始类型。

```ts
function fn(param: string | number) {
  if (typeof param === 'string') {
    console.log('string');
  }
  if (typeof param === 'number') {
    console.log('number');
  }
}
```

原本是联合类型，由于应用了 `typeof`，后面作用域的 `param` 就确定为 `number` 类型。

`typeof` 类型保护只有两种形式能被识别：

- `typeof val === 'typename'`
- `typeof val !== 'typename'`

`typename` 必须为 `number`、`string`、`boolean` 或 `symbol` 类型。

但是 TypeScript 并不会阻止与其他字符串比较，语言不会把那些表达式识别为类型保护。

## instanceof 类型保护

`instanceof` 类型保护和 `typeof` 类型保护用法相似，它主要用于判断是否是一个类的对象或继承对象的。

```ts
const foo: Date | RegExp;

if (foo instanceof RegExp) {
  // 正确 instanceof 类型保护，自动对应到 RegExp 实例类型
  foo.test('');
} else {
  // 正确 自动对应到 Date 实例类型
  foo.getTime();
}
```

```ts
interface DateOrRegExp {
  // 这里表示构造器无参，Date 类型的类
  new (): Date;
  new (value?: string): RegExp;
}

let Foo: DateOrRegExp;

let foo;
if (foo instanceof Foo) {
  // foo 从 any 到 RexExp | Date
  console.log(foo);
}
```

`instanceof` 类型保护是通过构造函数来细化类型，其右侧要求是一个构造函数，TypeScript 将细化为：

1. 此构造函数的 `prototype` 属性的类型，如果它的类型不为 `any`
2. 构造签名所返回类型的联合

## 自定义类型保护

`typeof` 和 `instanceof` 类型保护能够满足一般场景，对于一些更加特殊的，可以通过自定义类型保护来对应类型，比如我们自己定义一个请求参数的接口类型。

```ts
interface RequestParams {
  url: string;
  onSuccess?: () => void;
  onFailed?: () => void;
}

function isValidRequestParams(request: any): request is RequestParams {
  return request && request.url;
}

let request;
// 检测客户端发送过来的参数
if (isValidRequestParams(requst)) {
  request.url;
}
```

这里面通过判断，我们需要手动告诉编译器通过 `isValidRequestParams` 的判断则 `request` 就是 `RequestParams` 类型的参数，编译器通过类型谓词 `parameterName is Type` 得知，`isValidRequestParams` 返回了 `true` 则 `request` 就是 `RequestParams` 类型。

其他用法和上面所列举一致。

```ts
let isNumber: (value: any) => value is number;

let foo: string | number;
if (isNumber(foo)) {
  // 缩窄到 number
  foo.toFixed(2);
} else {
  // 通过类型保护，编译器知道不是 number 就是 string
  foo.toUpperCase();
}
```
