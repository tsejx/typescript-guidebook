---
title: 字符串字面量类型
order: 16
group:
  title: 进阶
  order: 2
nav:
  title: 语法
  order: 1
---

# 字符串字面量类型

字符串字面量类型用来约束取值只能是某几个字符串中的一个。

```ts
type EventName = 'click' | 'scroll' | 'mousemove';
function handleEvent(ele: Element, event: EventNames) {
  // do somthing
}

handleEvent(document.getElementById('hello'), 'scroll'); // 没问题
handleEvent(document.getElementById('world'), 'dbclick'); // 报错，event 不能为 ‘dbclick’
```

上例中，我们使用 `type` 定了一个字符串字面量类型 `EventNames`，它只能取三种字符串中的一种。

注意，类型别名与字符串字面量类型都是使用 `type` 进行定义。
