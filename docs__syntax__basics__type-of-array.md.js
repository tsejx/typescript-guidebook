(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[47],{"5jKX":function(e,n,a){"use strict";a.r(n);var t=a("55Ip"),l=a("q1tI"),r=a.n(l),c=(a("B2uJ"),a("+su7"),a("qOys")),m=a.n(c);a("5Yjd");n["default"]=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"\u6570\u7ec4\u7684\u7c7b\u578b"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u6570\u7ec4\u7684\u7c7b\u578b"},r.a.createElement("span",{className:"icon icon-link"})),"\u6570\u7ec4\u7684\u7c7b\u578b"),r.a.createElement("p",null,"\u5728 TypeScript \u4e2d\uff0c\u6570\u7ec4\u7c7b\u578b\u6709\u591a\u79cd\u5b9a\u4e49\u65b9\u5f0f\uff0c\u6bd4\u8f83\u7075\u6d3b\u3002"),r.a.createElement("h2",{id:"\u6570\u7ec4\u6210\u5458\u7c7b\u578b"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u6570\u7ec4\u6210\u5458\u7c7b\u578b"},r.a.createElement("span",{className:"icon icon-link"})),"\u6570\u7ec4\u6210\u5458\u7c7b\u578b"),r.a.createElement("p",null,"\u6700\u7b80\u5355\u7684\u65b9\u6cd5\u662f\u4f7f\u7528\u300c\u7c7b\u578b + \u65b9\u62ec\u53f7\u300d\u6765\u8868\u793a\u6570\u7ec4\uff1a"),r.a.createElement(m.a,{code:"let fibonacci: number[] = [1, 1, 2, 3, 5];\n",lang:"ts"}),r.a.createElement("p",null,"\u6570\u7ec4\u7684\u9879\u4e2d\u4e0d\u5141\u8bb8\u51fa\u73b0\u5176\u4ed6\u7684\u7c7b\u578b\uff1a"),r.a.createElement(m.a,{code:"let fibonacci: number[] = [1, '1', 2, 3, 5];\n\n// Type 'string' is not assignable to type 'number'.\n",lang:"ts"}),r.a.createElement("p",null,"\u6570\u7ec4\u7684\u4e00\u4e9b\u65b9\u6cd5\u7684\u53c2\u6570\u4e5f\u4f1a\u6839\u636e\u6570\u7ec4\u5728\u5b9a\u4e49\u65f6\u7ea6\u5b9a\u7684\u7c7b\u578b\u8fdb\u884c\u9650\u5236\uff1a"),r.a.createElement(m.a,{code:"let fibonacci: number[] = [1, 1, 2, 3, 5];\nfibonacci.push('8');\n\n// Argument of type '\"8\"' is not assignable to parameter of type 'number'.\n",lang:"ts"}),r.a.createElement("p",null,"\u4e0a\u4f8b\u4e2d\uff0c",r.a.createElement("code",null,"push")," \u65b9\u6cd5\u53ea\u5141\u8bb8\u4f20\u5165 ",r.a.createElement("code",null,"number")," \u7c7b\u578b\u7684\u53c2\u6570\uff0c\u4f46\u662f\u5374\u4f20\u4e86\u4e00\u4e2a ",r.a.createElement("code",null,'"8"')," \u7c7b\u578b\u7684\u53c2\u6570\uff0c\u6240\u4ee5\u62a5\u9519\u4e86\u3002"),r.a.createElement("p",null,"\u8fd9\u91cc ",r.a.createElement("code",null,'"8"')," \u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\u5b57\u9762\u91cf\u7c7b\u578b\uff0c\u4f1a\u5728\u540e\u7eed\u7ae0\u8282\u4e2d\u8be6\u7ec6\u4ecb\u7ecd\u3002"),r.a.createElement("h2",{id:"\u6570\u7ec4\u6cdb\u578b"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u6570\u7ec4\u6cdb\u578b"},r.a.createElement("span",{className:"icon icon-link"})),"\u6570\u7ec4\u6cdb\u578b"),r.a.createElement("p",null,"\u6211\u4eec\u4e5f\u53ef\u4ee5\u4f7f\u7528\u6570\u7ec4\u6cdb\u578b\uff08Array Generic\uff09",r.a.createElement("code",null,"Array<elemType>")," \u6765\u8868\u793a\u6570\u7ec4\uff1a"),r.a.createElement(m.a,{code:"// \u8868\u793a\u58f0\u660e\u7684\u6570\u7ec4\u5fc5\u987b\u662f\u6570\u5b57\u7c7b\u578b\nlet fibonacci: Array<number> = [1, 1, 2, 3, 5];\n\n// \u8868\u793a\u58f0\u660e\u7684\u6570\u7ec4\u53ef\u4ee5\u662f\u4efb\u610f\u7c7b\u578b\nlet foo: Array<any>;\n\n// \u8868\u793a\u58f0\u660e\u7684\u6570\u7ec4\u5143\u7d20\u5fc5\u987b\u662f\u5305\u542b name \u4e0e age \u7684\u5bf9\u8c61\uff0c\u5e76\u4e14 name \u4e3a\u5b57\u7b26\u4e32\uff0cage \u4e3a\u6570\u5b57\nlet bar: Array<{name: string; age: number}>;\n\n// \u8868\u793a\u6570\u7ec4\u5143\u7d20\u5fc5\u987b\u4e3a name \u7684\u5bf9\u8c61\u7231\u54ea\u4e2a\uff0cage \u53ef\u9009\nlet baz: Array<{name: string; age?: number}>\n",lang:"ts"}),r.a.createElement("p",null,"\u5173\u4e8e\u6cdb\u578b\uff0c\u53ef\u4ee5\u53c2\u8003 ",r.a.createElement(t["a"],{to:"../advanced/generics"},"\u6cdb\u578b")," \u4e00\u7ae0\u3002"),r.a.createElement("h2",{id:"\u7528\u63a5\u53e3\u8868\u793a\u6570\u7ec4"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u7528\u63a5\u53e3\u8868\u793a\u6570\u7ec4"},r.a.createElement("span",{className:"icon icon-link"})),"\u7528\u63a5\u53e3\u8868\u793a\u6570\u7ec4"),r.a.createElement("p",null,"\u63a5\u53e3\u4e5f\u53ef\u4ee5\u7528\u6765\u63cf\u8ff0\u6570\u7ec4\uff1a"),r.a.createElement(m.a,{code:"interface NumberArray {\n  [index: number]: number;\n}\n\nlet fibonacci: NumberArray = [1, 1, 2, 3, 5];\n",lang:"ts"}),r.a.createElement("p",null,r.a.createElement("code",null,"NumberArray")," \u8868\u793a\uff1a\u53ea\u8981\u7d22\u5f15\u7684\u7c7b\u578b\u662f\u6570\u5b57\u65f6\uff0c\u90a3\u4e48\u503c\u7684\u7c7b\u578b\u5fc5\u987b\u662f\u6570\u5b57\u3002"),r.a.createElement("p",null,"\u867d\u7136\u63a5\u53e3\u4e5f\u53ef\u4ee5\u7528\u6765\u63cf\u8ff0\u6570\u7ec4\uff0c\u4f46\u662f\u6211\u4eec\u4e00\u822c\u4e0d\u4f1a\u8fd9\u4e48\u505a\uff0c\u56e0\u4e3a\u8fd9\u79cd\u65b9\u5f0f\u6bd4\u524d\u4e24\u79cd\u65b9\u5f0f\u590d\u6742\u591a\u4e86\u3002"),r.a.createElement("h2",{id:"\u7c7b\u6570\u7ec4"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u7c7b\u6570\u7ec4"},r.a.createElement("span",{className:"icon icon-link"})),"\u7c7b\u6570\u7ec4"),r.a.createElement("p",null,"\u7c7b\u6570\u7ec4\uff08Array-like Object\uff09\u4e0d\u662f\u6570\u7ec4\u7c7b\u578b\uff0c\u6bd4\u5982 ",r.a.createElement("code",null,"arguments"),"\uff1a"),r.a.createElement(m.a,{code:"function sum() {\n  let args: number[] = arguments;\n}\n\n// Type 'IArguments' is missing the following properties from type 'number[]' : pop, push, concat, join, and 24 more.\n",lang:"ts"}),r.a.createElement("p",null,"\u4e0a\u4f8b\u4e2d\uff0c",r.a.createElement("code",null,"arguments")," \u5b9e\u9645\u4e0a\u662f\u4e00\u4e2a\u7c7b\u6570\u7ec4\uff0c\u4e0d\u80fd\u7528\u666e\u901a\u7684\u6570\u7ec4\u65b9\u5f0f\u6765\u63cf\u8ff0\uff0c\u800c\u5e94\u8be5\u7528\u63a5\u53e3\u3002"),r.a.createElement(m.a,{code:"function sum() {\n  let args: {\n    [index: number]: number;\n    length: number;\n    calle: Funcition;\n  } = arguments;\n}\n",lang:"ts"}),r.a.createElement("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u9664\u4e86\u7ea6\u675f\u5f53\u7d22\u5f15\u7684\u7c7b\u578b\u662f\u6570\u5b57\u65f6\uff0c\u503c\u7684\u7c7b\u578b\u5fc5\u987b\u662f\u6570\u5b57\u4e4b\u5916\uff0c\u4e5f\u7ea6\u675f\u4e86\u5b83\u8fd8\u6709 ",r.a.createElement("code",null,"length")," \u548c ",r.a.createElement("code",null,"callee")," \u4e24\u4e2a\u5c5e\u6027\u3002"),r.a.createElement("p",null,"\u4e8b\u5b9e\u4e0a\u5e38\u7528\u7684\u7d2f\u6570\u7ec4\u90fd\u6709\u81ea\u5df1\u7684\u63a5\u53e3\u5b9a\u4e49\uff0c\u5982 ",r.a.createElement("code",null,"IArguments"),"\u3001",r.a.createElement("code",null,"NodeList"),"\u3001",r.a.createElement("code",null,"HTMLCollection")," \u7b49\u3002"),r.a.createElement(m.a,{code:"function sum() {\n  let args = (IArguments = arguments);\n}\n",lang:"ts"}),r.a.createElement("p",null,"\u5176\u4e2d ",r.a.createElement("code",null,"IArguments")," \u662f TypeScript \u4e2d\u5b9a\u4e49\u597d\u4e86\u7684\u7c7b\u578b\uff0c\u5b83\u5b9e\u9645\u4e0a\u662f\uff1a"),r.a.createElement(m.a,{code:"interface IArguments {\n  [index: number]: any;\n  length: number;\n  callee: musi;\n}\n",lang:"ts"}),r.a.createElement("h2",{id:"\u4efb\u610f\u503c\u5728\u6570\u7ec4\u4e2d\u7684\u5e94\u7528"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u4efb\u610f\u503c\u5728\u6570\u7ec4\u4e2d\u7684\u5e94\u7528"},r.a.createElement("span",{className:"icon icon-link"})),"\u4efb\u610f\u503c\u5728\u6570\u7ec4\u4e2d\u7684\u5e94\u7528"),r.a.createElement("p",null,"\u4e00\u4e2a\u6bd4\u8f83\u5e38\u89c1\u7684\u505a\u6cd5\u662f\uff0c\u7528 ",r.a.createElement("code",null,"any")," \u8868\u793a\u6570\u7ec4\u4e2d\u5141\u8bb8\u51fa\u73b0\u4efb\u610f\u7c7b\u578b\uff1a"),r.a.createElement(m.a,{code:"let list = any[] = ['xcailiu', 25 { website: 'http://'}]\n",lang:"ts"})))}}}]);