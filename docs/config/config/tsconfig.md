---
title: 工程配置文件
order: 1
group:
  title: 工程配置
  order: 2
nav:
  title: 配置
  order: 2
---

# 工程配置文件

`tsconfig.json` 是 TypeScript 项目的配置文件，如果一个目录下存在一个 `tsconfig.json` 文件，那么它意味着这个目录是 TypeScript 项目的根目录。TypeScript 编译器编译代码之前，首先读取这个配置文件，并根据其中的属性来设置 TypeScript 项目的编译参数。

- 不带任何输入文件的情况下调用 `tsc`，编译器会从当前目录开始去查找 `tsconfig.json` 文件，逐级向上搜索父目录
- 不带任何输入文件的情况下调用 `tsc`，且使用命令行参数 `--project`（或 `-p`）指定一个包含 `tsconfig.json` 文件的目录

⚠️ **注意**：当命令行上指定了输入文件时，`tsconfig.json` 文件将会被忽略。

这里有完整的选项说明 [TypeScript 中文网：编译选项](https://www.tslang.cn/docs/handbook/compiler-options.html) 或者 [Intro to the TSConfig Reference](https://www.typescriptlang.org/tsconfig/)。

规则分类：

- File Inclusion 文件包含
- Project Options 项目基本配置
- Strict Checks 严格检测
- Module Resolution 模块解析
- Source Maps
- Linter Checks
- Experimental 实验配置
- Advanced 高阶配置
- Watch Options 监视文件配置
- Command Line 命令行配置

## 文件包含

除了 `compilerOptions` 外的 `tsconfig.json` 顶层属性。

### extends

`extends` 属性作用是引入其他配置文件，继承配置。

默认包含当前目录和子目录下所有 TypeScript 文件。

```json
{
  // 把基础配置抽离成 tsconfig.base.json 文件，然后引入
  "extends": "./tsconfig.base.json"
}
```

### exclude

`exclude` 属性作用是指定编译器需要排除的文件或文件夹。

默认排除 `node_modules` 文件夹下文件。

```json
{
  // 排除 src 目录下的 lib 文件夹下的文件不会编译
  "exclude": ["src/lib"]
}
```

和 `include` 属性一样，支持 `glob` 通配符：

- `*` 匹配 0 或多个字符（不包括目录分隔符）
- `?` 匹配一个任意字符（不包括目录分隔符）
- `**/` 递归匹配任意子目录

如果一个 `glob` 模式里的某部分只包含 `*` 或 `.*`，那么仅有支持的文件扩展名类型被包含在内（比如默认 `.ts`，`.tsx` 和 `.d.ts`， 如果 `allowJs` 设置能 `true` 还包含 `.js` 和 `.jsx`）。

### include

include 属性作用是指定编译需要编译的文件或目录。

```json
{
  "include": [
    // "scr"        // 会编译 src 目录下的所有文件，包括子目录
    // "scr/*"      // 只会编译 scr 一级目录下的文件
    "scr/*/*" // 只会编译 scr 二级目录下的文件
  ]
}
```

如果 `"files"` 和 `"include"` 都没有被指定，编译器默认包含当前目录和子目录下所有的 TypeScript 文件（`.ts`, `.d.ts` 和 `.tsx`），排除在 `"exclude"` 里指定的文件。JS 文件（`.js` 和 `.jsx`）也被包含进来如果 `allowJs` 被设置成`true`。 如果指定了 `"files"` 或 `"include"`，编译器会将它们结合一并包含进来。 使用 `"outDir"` 指定的目录下的文件永远会被编译器排除，除非你明确地使用 `"files"` 将其包含进来（这时就算用 `exclude` 指定也没用）。

### files

`files` 属性作用是指定需要编译的单个文件列表。

默认包含当前目录和子目录下所有 TypeScript 文件。

```json
{
  // ...
  "files": [
    // 指定编译文件是 src 目录下的 index.ts 文件
    "scr/index.ts"
  ]
}
```

### references

`references` 属性作用是指定工程引用依赖。
在项目开发中，有时候我们为了方便将前端项目和后端 `node` 项目放在同一个目录下开发，两个项目依赖同一个配置文件和通用文件，但我们希望前后端项目进行灵活的分别打包，那么我们可以进行如下配置：

```json
{
  // ...
  "references": [
    // 指定依赖的工程
    { "path": "./common" }
  ]
}
```

### typeAcquisition

`typeAcquisition` 属性作用是设置自动引入库类型定义文件 `.d.ts` 相关。

包含 3 个子属性：

- `enable`：布尔类型，是否开启自动引入库类型定义文件 `.d.ts`，默认为 `false`
- `include`：数组类型，允许自动引入的库名，如：`[ "jquery", "lodash" ]`
- `exculde`：数组类型，排除的库名。

```json
{
  // ...
  "typeAcquisition": {
    "enable": false,
    "exclude": ["jquery"],
    "include": ["jest"]
  }
}
```

### compileOnSave

compileOnSave 属性作用是设置保存文件的时候自动编译，但需要编译器支持。

```json
{
  // ...
  "compileOnSave": false
}
```

## 项目配置

这里只对几个重要的、使用度高、易混淆的配置项进行说明。

### lib

TypeScript 包括内置对象的默认类型定义集合（例如 `Math`、`Number`），以及浏览器环境（如 `document`）中的类型定义。TypeScript 还包括指定 `target` 相匹配的较新 JS 特性的 API；例如，如果 `target` 是 `ES2015` 或更高版本，则 `Map` 的定义是可用的。

你可能还需要更改这些设置，原因如下：

- 你的程序不在浏览器中运行，所以你不需要 DOM 类型定义
- 你的运行时平台提供了某些 JavaScript API 对象（可能通过 `polyfills`），但还不支持给定 ECMAScript 版本的完整语法
- 对更高级别的 ECMAScript 版本，您有一些（但不是全部）的 `polyfill` 或原生实现

| Name       | Contents                                                                                                                                |
| :--------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| ES5        | Core definitions for all ES3 and ES5 functionality                                                                                      |
| ES2015     | Additional APIs available in ES2015 (also known as ES6) - array.find, Promise, Proxy, Symbol, Map, Set, Reflect, etc.                   |
| ES6        | Alias for “ES2015”                                                                                                                      |
| ES2016     | Additional APIs available in ES2016 - array.include, etc.                                                                               |
| ES7        | Alias for “ES2016”                                                                                                                      |
| ES2017     | Additional APIs available in ES2017 - Object.entries, Object.values, Atomics, SharedArrayBuffer, date.formatToParts, typed arrays, etc. |
| ES2018     | Additional APIs available in ES2018 - async iterables, promise.finally, Intl.PluralRules, rexexp.groups, etc.                           |
| ES2019     | Additional APIs available in ES2019 - array.flat, array.flatMap, Object.fromEntries, string.trimStart, string.trimEnd, etc.             |
| ES2020     | Additional APIs available in ES2020 - string.matchAll, etc.                                                                             |
| ESNext     | Additional APIs available in ESNext - This changes as the JavaScript specification evolves                                              |
| DOM        | DOM definitions - window, document, etc.                                                                                                |
| WebWorker  | APIs available in WebWorker contexts                                                                                                    |
| ScriptHost | APIs for the Windows Script Hosting System                                                                                              |

单个库组件：

- DOM.Iterable
- ES2015.Core
- ES2015.Collection
- ES2015.Generator
- ES2015.Iterable
- ES2015.Promise
- ES2015.Proxy
- ES2015.Reflect
- ES2015.Symbol
- ES2015.Symbol.WellKnown
- ES2016.Array.Include
- ES2017.object
- ES2017.Intl
- ES2017.SharedMemory
- ES2017.String
- ES2017.TypedArrays
- ES2018.Intl
- ES2018.Promise
- ES2018.RegExp
- ES2019.Array
- ES2019.Full
- ES2019.Object
- ES2019.String
- ES2019.Symbol
- ES2020.Full
- ES2020.String
- ES2020.Symbol.wellknown
- ESNext.AsyncIterable
- ESNext.Array
- ESNext.Intl
- ESNext.Symbol

这个配置名单可能会随时过期，完整列表可以直接查阅源码 [TypeScript source code](https://github.com/microsoft/TypeScript/tree/master/lib)

### target

现代浏览器支持所有 ES6 功能，因此 ES6 是一个不错的选择。如果您的代码已部署到较低版本的运行时环境中，则可以选择设置较低版本的的 `target`；如果您的代码保证在较新环境中运行，则可以选择设置较高的 `target`。

`target` 设置会更改哪些 JS 功能被降级并且保持完整。例如，如果目标是 ES5 或更低，则箭头函数 `() =>` 将变为等效函数表达式。

更改 `target` 也会更改 `lib` 配置项的默认值。您可以根据需要 **混合和匹配** `target` 和 `lib` 设置，但为方便起见，您可以只设置 `target`。

如果你只在一起工作 Node.js，以下是基于节点版本的推荐目标：

| Name    | Supported Target |
| :------ | :--------------- |
| Node 8  | ES2017           |
| Node 10 | ES2018           |
| Node 12 | ES2019           |

这些都是基于 Node 的支持数据库。

特殊的 ESNext 值是指您的 TypeScript 版本支持的最高版本。应该谨慎使用此设置，因为它并不意味着不同类型脚本版本之间的相同之处，并且可能使升级不太可预测。

### module

下面以示例说明输出不同模块：

```js
// @filename: index.ts
import { valueOfPi } from './constants';

export const twoPi = valueOfPi * 2;
```

#### CommonJS

```js
const constants_1 = require('./constants');
exports.twoPi = constants_1.valueOfPi * 2;
```

#### UMD

```js
(function(factory) {
  if (typeof module === 'object' && typeof module.exports === 'object') {
    var v = factory(require, exports);
    if (v !== undefined) module.exports = v;
  } else if (typeof define === 'function' && define.amd) {
    define(['require', 'exports', './constants'], factory);
  }
})(function(require, exports) {
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  exports.twoPi = void 0;
  const constants_1 = require('./constants');
  exports.twoPi = constants_1.valueOfPi * 2;
});
```

#### AMD

```js
define(['require', 'exports', './constants'], function(require, exports, constants_1) {
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  exports.twoPi = void 0;
  exports.twoPi = constants_1.valueOfPi * 2;
});
```

#### System

```js
System.register(['./constants'], function(exports_1, context_1) {
  'use strict';
  var constants_1, twoPi;
  var __moduleName = context_1 && context_1.id;
  return {
    setters: [
      function(constants_1_1) {
        constants_1 = constants_1_1;
      },
    ],
    execute: function() {
      exports_1('twoPi', (twoPi = constants_1.valueOfPi * 2));
    },
  };
});
```

#### ESNext

```js
import { valueOfPi } from './constants';
export const twoPi = valueOfPi * 2;
```

#### ES2020

```js
import { valueOfPi } from './constants';
export const twoPi = valueOfPi * 2;
```

#### None

```js
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.twoPi = void 0;
const constants_1 = require('./constants');
exports.twoPi = constants_1.valueOfPi * 2;
```

## 模块解析

### baseUrl

让您设置一个基本目录来解析非绝对模块名称。

您可以定义一个可以进行绝对文件解析的根文件夹。例如：

```bash
baseUrl
├── ex.ts
├── hello
│   └── world.ts
└── tsconfig.json
```

使用 `"baseUrl"："./"` 在此项目中，TypeScript 将查找与 `tsconfig.json` 所在文件夹下的文件。

### paths

重新映射导入到相对于 `baseUrl` 配置项的查找位置的一系列条目，[手册](https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping) 中的路径覆盖范围更大。

路径允许告知 TypeScript 应如何解析 `require` 或 `import` 中的导入。

```json
{
  "compilerOptions": {
    "baseUrl": ".", // this must be specified if "paths" is specified.
    "paths": {
      "jquery": ["node_modules/jquery/dist/jquery"] // this mapping is relative to "baseUrl"
    }
  }
}
```

这将使您能够编写导入 `jquery`，并在本地获得所有正确的打字方式。

```json
{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
        "app/*": ["app/*"],
        "config/*": ["app/_config/*"],
        "environment/*": ["environments/*"],
        "shared/*": ["app/_shared/*"],
        "helpers/*": ["helpers/*"],
        "tests/*": ["tests/*"]
    },
}
```

在这种情况下，您可以告诉排版文件 `resolver` 支持许多自定义前缀来查找代码。此模式可用于避免代码库中的长相对路径。

### rootDirs

使用 `rootDirs`，可以在构建时让编译器将这个路径列表中的路径的内容都放到一个文件夹中。

```bash
 src
 └── views
     └── view1.ts (can import "./template1", "./view2`)
     └── view2.ts (can import "./template1", "./view1`)

 generated
 └── templates
         └── views
             └── template1.ts (can import "./view1", "./view2")
```

配置：

```json
{
  "compilerOptions": {
    "rootDirs": ["src/views", "generated/templates/views"]
  }
}
```

这不会影响 TypeScript 如何触发 JavaScript，它只会模拟它们在运行时能够通过这些相对路径工作的假设。

### typeRoots

默认情况下，所有可见的 `@type` 前缀开头的 npm 依赖包都包括在编译过程中。`node_modules/@type` 中任何封闭文件夹中的包都被认为是可见的。

例如，这意味着包括在 `./node_modules/@types/`、`../node_modules/@types/`、`../../node_modules/@types/` 等等。

如果指定了 `typerRoots`，那么编译时会只使用 `typerRoots` 下的 npm 依赖包：

```json
{
  "compilerOptions": {
    "typeRoots": ["./typings", "./vendor/types"]
  }
}
```

此配置文件将包含 `./typings` 和 `./vendor/types` 下的所有 npm 依赖包，并且不包含 `./node_modules/@types` 中的软件包。所有路径都是相对于 `tsconfig.json`。

### types

如果配置了 `types` 配置项，那么只有列出的 npm 依赖包才会包含在全局范围内，例如：

```json
{
  "compilerOptions": {
    "types": ["node", "jest", "express"]
  }
}
```

这个 `tsconfig.json` 文件将只包括 `./node_modules/@types/node`、`./node_modules/@types/jest` 和 `./node_modules/@types/express`。`node_modules/@types/*` 下的其他 npm 依赖包将不包括在内。

这会有什么影响呢？

此选项不会影响程序代码中包含 `@types/*` 的方式，例如，如果您有上述编译选项示例，代码如下：

```js
import * as moment from 'moment';

moment().format('MMMM Do YYYY, h:mm:ss a');
```

`moment` 的导入将会完全 `typed`。

设置此选项时，请不要在 `types` 数组中包含一个模块：

- 不会添加到项目中的全局环境属性（例如 Node 中的 `process`，或 Jest 中的 `expect`）
- 不会有导出作为自动导入建议出现

此功能与 `typerRoots` 的不同之处在于，它仅指定要包含的确切类型，而 `typerRoots` 支持说要特定文件夹。

## 严格检测

### noImplicitThis

`this` 隐式具有 `any` 类型，如果没有指定类型注解，编译器会提示 `this` 隐式具有类型 `any`，因为它没有类型注释。

解决方法有两种：

1. 指定 `this` 类型，如 `HTMLElment` 类型。`HTMLElement` 接口表示所有 HTML 元素，一些 HTML 元素直接实现了 `HTMLElement` 接口，其他的间接实现 `HTMLElement` 接口。
2. 使用 `--noImplicitThis` 配置项，表示当 `this` 表达式值为 `any` 类型时生成一个错误信息。设置为 `true` 后就能正常编译。

## 默认配置

```json
{
  /* 文件包含 File Inclusion */
  // extends 可以通过指定一个其他的 tsconfig.json 文件路径，来继承这个配置文件里的配置，继承来的文件的配置会覆盖当前文件定义的配置
  // TS 在 3.2 版本开始，支持继承一个来自 Node.js 包的 tsconfig.json 配置文件
  "extends": false,
  // exclude 表示要排除的、不编译的文件，它也可以指定一个列表，规则和include一样，可以是文件或文件夹，可以是相对路径或绝对路径，可以使用通配符
  "exclude": ["node_modules", "bower_components", "jspm_packages"],
  // include 也可以指定要编译的路径列表，但是和 files 的区别在于，这里的路径可以是文件夹，也可以是文件，可以使用相对和绝对路径，而且可以使用通配符
  // 比如 './src' 即表示要编译 src 文件夹下的所有文件以及子文件夹的文件
  "include": false,
  // files 可以配置一个数组列表，里面包含指定文件的相对或绝对路径，编译器在编译的时候只会编译包含在 files 中列出的文件
  // 如果不指定，则取决于有没有设置 include 选项
  // 如果没有 include 选项，则默认会编译根目录以及所有子目录中的文件
  // 这里列出的路径必须是指定文件，而不是某个文件夹，而且不能使用 * ? **/ 等通配符
  "files": false,
  // 一个对象数组，指定要引用的项目
  "references": false,
  // 设置自动引入库类型定义文件 `.d.ts` 相关
  "typeAcquisition": {
    "enable": false
  },

  "compilerOptions": {
    /* 项目基础配置 */
    /* allowJs 设置的值为 true 或 false，用来指定是否允许编译 JS 文件，默认是 false，即不编译 JS 文件 */
    "allowJs": false,
    /* checkJs 的值为 true 或 false，用来指定是否检查和报告 JS 文件中的错误，默认是 false */
    "checkJs": false,
    /* 是否编译构建引用项目  */
    "composite": true,
    /* declaration 的值为 true 或 false，用来指定是否在编译的时候生成相应的 `.d.ts` 声明文件
    // 如果设为 true，编译每个 ts 文件之后会生成一个 JS 文件和一个声明文件。但是 declaration 和 allowJs 不能同时设为 true */
    "declaration": true,
    /* 值为 true 或 false，指定是否为声明文件 `.d.ts` 生成 map 文件 */
    "declarationMap": false,
    /* 当 target 为 ES5 或者 ES3时，为 for-of, spread, 和 destructuring 中的迭代器提供完全支持 */
    "downlevelIteration": false,
    /* importHelpers 的值为 true 或 false，指定是否引入 tslib 里的辅助工具函数，默认为 false */
    "importHelpers": false,
    /* 是否启用增量编译*/
    "incremental": true,
    /* isolatedModules 的值为 true 或 false，指定是否将每个文件作为单独的模块，默认为 true，它不可以和 declaration 同时设定 */
    "isolatedModules": false,
    /* 指定 JSX 代码用于的开发环境: 'preserve', 'react-native', or 'react'. */
    "jsx": "react",
    /* lib 用于指定要包含在编译中的库文件，默认值看主要内容 */
    "lib": [],
    /* target 用于指定编译生成 JavaScript 文件之后遵循的标准版本: 'ES3' (default), 'ES5', 'ES6/ES2015', 'ES7/ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020' or 'ESNEXT'. */
    "target": "es5",
    /* 用来指定要使用的模块标准: 'None', 'CommonJS', 'AMD', 'System', 'UMD', 'ES6/ES2015', 'ES2020', or 'ESNext'. */
    /* CommonJS(default if `target` is ES3 or ES5)，ES6/ES2015（synonymous, default for target ES6 and higher）*/
    "module": "CommonJS",
    /* outFile 用于指定将输出文件合并为一个文件，它的值为一个文件路径名。比如设置为 `./dist/main.js`，则输出的文件为一个 main.js 文件。但是要注意，只有设置 module 的值为 amd 和 system 模块时才支持这个配置 */
    "outFile": "./",
    /* outDir 用来指定输出文件夹，值为一个文件夹路径字符串，输出的文件都将放置在这个文件夹 */
    "outDir": "./",
    /* 用来指定编译文件的根目录，编译器会在根目录查找入口文件，如果编译器发现以 rootDir 的值作为根目录查找入口文件并不会把所有文件加载进去的话会报错，但是不会停止编译 */
    "rootDir": "./",
    /* 不生成编译文件，这个一般比较少用 */
    "noEmit": false,
    /* 编译插件*/
    "plugins": [],
    /* removeComments 的值为 true 或 false，用于指定是否将编译后的文件中的注释删掉，设为 true 的话即删掉注释，默认为 false */
    "removeComments": false,
    /* sourceMap的值为true或false，用来指定编译时是否生成.map文件 */
    "sourceMap": false,
    /* 指定文件用来存储增量编译信息 */
    "tsBuildInfoFile": ".tsbuildinfo",

    /* 严格检查 */
    /* strict 的值为 true 或 false，用于指定是否启动所有类型检查，如果设为 true 则会同时开启下面这几个严格类型检查，默认为 false */
    "strict": false,
    /* alwaysStrict 的值为 true 或 false，指定始终以严格模式检查每个模块，并且在编译之后的 JS 文件中加入 "use strict" 字符串，用来告诉浏览器该 JS 为严格模式 */
    "alwaysStrict": false,
    /* noImplicitAny 的值为 true 或 false，如果我们没有为一些值设置明确的类型，编译器会默认认为这个值为 any，如果 noImplicitAny 的值为 true 的话。则没有明确的类型会报错。默认值为 false */
    "noImplicitAny": false,
    /* 当 this 表达式的值为 any 类型的时候，生成一个错误 */
    "noImplicitThis": false,
    /* 设为 true 后会对 bind、call 和 apply 绑定的方法的参数的检测是严格检测的 */
    "strictBindCallApply": false,
    /* strictFunctionTypes 的值为 true 或 false，用于指定是否使用函数参数双向协变检查 */
    "strictFunctionTypes": false,
    /* strictNullChecks 为 true 时，null 和 undefined 值不能赋给非这两种类型的值，别的类型也不能赋给他们，除了 any 类型。还有个例外就是 undefined 可以赋值给 void 类型 */
    "strictNullChecks": false,
    /* 设为 true 后会检查类的非 undefined 属性是否已经在构造函数里初始化，如果要开启这项，需要同时开启 strictNullChecks，默认为 false */
    "strictPropertyInitialization": false,

    /* 模块解析 */
    /* 用来指定允许从没有默认导出的模块中默认导入，默认值 module === `system` or `esModuleInterop` */
    "allowSyntheticDefaultImports": true,
    "allowUmdGlobalAccess": false,
    /* baseUrl 用于设置解析非相对模块名称的基本目录，相对模块不会受 baseUrl 的影响 */
    /* 如果使用 `./` 则会从 tsconfig.json 所在目录查找文件 */
    "baseUrl": "./",
    /* 通过为导入内容创建命名空间，实现 CommonJS 和 ES 模块之间的互操作性 */
    "esModuleInterop": true,
    /* 用于选择模块解析策略，有 `node` 和 `classic` 两种类型，默认值 module === AMD,System,ES6,Classic */
    "moduleResolution": "node",
    /* 用于设置模块名称到基于 baseUrl 的路径映射 */
    "paths": {},
    /* 不把符号链接解析为其真实路径，具体可以了解下 webpack 和 nodejs 的 symlink 相关知识 */
    "preserveSymlinks": false,
    /* rootDirs 可以指定一个路径列表，在构建时编译器会将这个路径列表中的路径的内容都放到一个文件夹中 */
    "rootDirs": [],
    /* typeRoots 用来指定声明文件或文件夹的路径列表，如果指定了此项，则只有在这里列出的声明文件才会被加载 */
    "typeRoots": [],
    /* types 用来指定需要包含的模块，只有在这里列出的模块的声明文件才会被加载进来 */
    "types": [],

    /* SourceMap 配置 */
    /* 指定是否将 map 文件的内容和 js 文件编译在同一个 js 文件中
    // 如果设为 true，则 map 的内容会以 `//# sourceMappingURL=` 然后拼接 `base64` 字符串的形式插入在 js 文件底部 */
    "inlineSourceMap": false,
    /* 用于指定是否进一步将 `.ts` 文件的内容也包含到输入文件中 */
    "inlineSources": false,
    /* mapRoot 用于指定调试器找到映射文件而非生成文件的位置，指定 map 文件的根路径，该选项会影响 `.map` 文件中的 sources 属性 */
    "mapRoot": "",
    /* sourceRoot 用于指定调试器应该找到 TypeScript 文件而不是源文件位置，这个值会被写进 `.map` 文件里 */
    "sourceRoot": "",

    /* Linter Checks */
    /* 用于检查 switch 中是否有 case 没有使用 break 跳出 switch，默认为 false */
    "noFallthroughCasesInSwitch": false,
    /* 用于检查函数是否有返回值，设为 true 后，如果函数没有返回值则会提示，默认为 false */
    "noImplicitReturns": false,
    /* 用于检查是否有定义了但是没有使用的变量，对于这一点的检测，使用eslint可以在你书写代码的时候做提示，你可以配合使用。它的默认值为 false */
    "noUnusedLocals": false,
    /* 用于检查是否有在函数体中没有使用的参数，这个也可以配合 ESLint 来做检查，默认为 false */
    "noUnusedParameters": false,

    /* 实验配置 */
    /* 用于指定是否为装饰器提供元数据支持，关于元数据，也是ES6的新标准，可以通过 Reflect 提供的静态方法获取元数据，如果需要使用Reflect的一些方法，需要引入ES2015.Reflect这个库 */
    "emitDecoratorMetadata": true,
    /* 用于指定是否启用实验性的装饰器特性，引擎里的部分库使用了最新的语法，需要开启这个配置 */
    "experimentalDecorators": true,

    /* 高阶配置 */
    "allowUnreachableCode": false,
    "allowUnusedLabels": false,
    "assumeChangesOnlyAffectDirectDependencies": [],
    "declarationDir": [],
    "disableSizeLimit": false,
    "disableSolutionSearching": false,
    "disableSourceOfProjectReferenceRedirect": false,
    "emitBOM": false,
    "emitDeclarationOnly": false,
    "extendedDiagnostics": false,
    "forceConsistentCasingInFileNames": true,
    "generateCpuProfile": "profile.cpuprofile",
    "importsNotUsedAsValues": "remove",
    "jsxFactory": "React.createElement",
    "jsxFragmentFactory": "Fragment",
    "listEmittedFiles": false,
    "listFiles": false,
    "maxNodeModuleJsDepth": 0,
    "newLine": "LF",
    "noEmitHelpers": false,
    "noEmitOnError": false,
    "noImplicitUseStrict": false,
    "noLib": false,
    "noResolve": false,
    "noStrictGenericChecks": false,
    "preserveConstEnums": false,
    "reactNamespace": "React",
    "resolveJsonModule": false,
    "skipDefaultLibCheck": false,
    "skipLibCheck": false,
    "stripInternal": false,
    "suppressExcessPropertyErrors": false,
    "suppressImplicitAnyIndexErrors": false,
    "traceResolution": false,
    "useDefineForClassFields": false,

    /* 命令行相关配置 */
    "preserveWatchOutput": false,
    "pretty": true,

    /* 监视文件配置 */
    "fallbackPolling": "fixedPollingInterval",
    "watchDirectory": "useFsEvents",
    "watchFile": "useFsEvents"
  },

  // compileOnSave 的值是 true 或 false
  // 如果设为 true，在我们编辑了项目中的文件保存的时候，编辑器会根据 tsconfig.json 中的配置重新生成文件，不过这个要编辑器支持
  "compileOnSave": true
}
```

---

**参考资料：**

- [📖 TypeScript: TSConfig Reference](https://www.typescriptlang.org/tsconfig)
- [📖 tsconfig JSON Schema 规则](http://json.schemastore.org/tsconfig)
- [📖 TypeScript Handbook（中文版）：工程配置](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/tsconfig.json.html)
- [📝 tsconfig.json 配置详解](https://jack-cool.github.io/2019/08/05/tsconfig-json-%E9%85%8D%E7%BD%AE%E8%AF%A6%E8%A7%A3/)
- [📝 了不起的 tsconfig.json 指南](https://www.imooc.com/article/305339?block_id=tuijian_wz)
