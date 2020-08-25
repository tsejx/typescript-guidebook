(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[40],{TsbC:function(e,n,a){"use strict";a.r(n);var l=a("q1tI"),t=a.n(l),r=(a("B2uJ"),a("+su7"),a("qOys")),c=a.n(r);a("5Yjd");n["default"]=function(){return t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"markdown"},t.a.createElement("h1",{id:"\u539f\u59cb\u6570\u636e\u7c7b\u578b"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u539f\u59cb\u6570\u636e\u7c7b\u578b"},t.a.createElement("span",{className:"icon icon-link"})),"\u539f\u59cb\u6570\u636e\u7c7b\u578b"),t.a.createElement("p",null,"JavaScript \u7684\u7c7b\u578b\u5206\u4e3a\u4e24\u79cd\uff1a\u539f\u59cb\u6570\u636e\u7c7b\u578b\uff08Primitive data types\uff09\u548c\u5bf9\u8c61\u7c7b\u578b\uff08Object types\uff09\u3002"),t.a.createElement("p",null,"\u539f\u59cb\u6570\u636e\u7c7b\u578b\u5305\u62ec\uff1a"),t.a.createElement("ul",null,t.a.createElement("li",null,"\u5e03\u5c14\u503c"),t.a.createElement("li",null,"\u6570\u503c"),t.a.createElement("li",null,"\u5b57\u7b26\u4e32"),t.a.createElement("li",null,t.a.createElement("code",null,"null")),t.a.createElement("li",null,t.a.createElement("code",null,"undefined")),t.a.createElement("li",null,"ES \u4e2d\u7684\u65b0\u7c7b\u578b ",t.a.createElement("code",null,"Symbol"))),t.a.createElement("h2",{id:"\u5e03\u5c14\u503c"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u5e03\u5c14\u503c"},t.a.createElement("span",{className:"icon icon-link"})),"\u5e03\u5c14\u503c"),t.a.createElement("p",null,"\u5e03\u5c14\u503c\u662f\u6700\u57fa\u7840\u7684\u6570\u636e\u7c7b\u578b\uff0c\u5728 TypeScript \u4e2d\uff0c\u4f7f\u7528 boolean \u5b9a\u4e49\u5e03\u5c14\u503c\u7c7b\u578b\uff1a"),t.a.createElement(c.a,{code:"let isDone: boolean = false;\n",lang:"ts"}),t.a.createElement("p",null,"\u6ce8\u610f\uff0c\u4f7f\u7528\u6784\u9020\u51fd\u6570 Boolean \u521b\u9020\u7684\u5bf9\u8c61\u4e0d\u662f\u5e03\u5c14\u503c\uff1a"),t.a.createElement(c.a,{code:"let createdByNewBoolean: boolean = new Boolean(1);\n\n// Type 'Boolean' is not assignable to type 'boolean'.\n//   'boolean' is a primitive, but 'Boolean' is a wrapper object. Prefer using 'boolean' when possible.\n",lang:"ts"}),t.a.createElement("p",null,"\u4e8b\u5b9e\u4e0a ",t.a.createElement("code",null,"new Boolean()")," \u8fd4\u56de\u7684\u662f\u4e00\u4e2a ",t.a.createElement("code",null,"Boolean")," \u5bf9\u8c61\uff1a"),t.a.createElement(c.a,{code:"let createdByNewBoolean: Boolean = new Boolean(1);\n",lang:"ts"}),t.a.createElement("p",null,"\u76f4\u63a5\u8c03\u7528 Boolean \u4e5f\u53ef\u4ee5\u8fd4\u56de\u4e00\u4e2a boolean \u7c7b\u578b\uff1a"),t.a.createElement(c.a,{code:"let createdByNewBoolean: boolean = Boolean(1);\n",lang:"ts"}),t.a.createElement("p",null,"\u5728 TypeScript \u4e2d boolean \u662f JavaScript \u4e2d\u7684\u57fa\u672c\u7c7b\u578b\uff0c\u800c ",t.a.createElement("code",null,"Boolean")," \u662f JavaScript \u4e2d\u7684\u6784\u9020\u51fd\u6570\u3002\u5176\u4ed6\u57fa\u672c\u7c7b\u578b\uff08\u9664\u4e86 ",t.a.createElement("code",null,"null")," \u548c ",t.a.createElement("code",null,"undefined"),"\uff09\u4e00\u6837\uff0c\u4e0d\u518d\u8d58\u8ff0\u3002"),t.a.createElement("h2",{id:"\u6570\u503c"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u6570\u503c"},t.a.createElement("span",{className:"icon icon-link"})),"\u6570\u503c"),t.a.createElement("p",null,"\u4f7f\u7528 number \u5b9a\u4e49\u6570\u503c\u7c7b\u578b\uff1a"),t.a.createElement(c.a,{code:"let decLiteral: number = 6;\nlet hexLiteral: number = 0xf00d;\n\n// ES6 \u4e2d\u7684\u4e8c\u8fdb\u5236\u8868\u793a\u6cd5\nlet binaryLiteral: number = 0b1010;\n\n// ES6 \u4e2d\u7684\u516b\u8fdb\u5236\u8868\u793a\u6cd5\nlet octalLiteral: number = 0o744;\n\nlet notANumber: number = NaN;\nlet infinityNumber: number = Infinity;\n",lang:"ts"}),t.a.createElement("p",null,"\u7f16\u8bd1\u7ed3\u679c\uff1a"),t.a.createElement(c.a,{code:"var decLiteral = 6;\nvar hexLiteral = 0xf00d;\n\n// ES6 \u4e2d\u7684\u4e8c\u8fdb\u5236\u8868\u793a\u6cd5\nvar binaryLiteral = 10;\n\n// ES6 \u4e2d\u7684\u516b\u8fdb\u5236\u8868\u793a\u6cd5\nvar octalLiteral = 484;\n\nvar notANumber = NaN;\nvar infinityNumber = Infinity;\n",lang:"ts"}),t.a.createElement("p",null,"\u5176\u4e2d ",t.a.createElement("code",null,"0b1010")," \u548c ",t.a.createElement("code",null,"0o744")," \u662f ",t.a.createElement("a",{href:"http://es6.ruanyifeng.com/#docs/number#%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%92%8C%E5%85%AB%E8%BF%9B%E5%88%B6%E8%A1%A8%E7%A4%BA%E6%B3%95",target:"_blank",rel:"noopener noreferrer"},"ES6 \u4e2d\u7684\u4e8c\u8fdb\u5236\u548c\u516b\u8fdb\u5236\u8868\u793a\u6cd5",t.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},t.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),t.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}))),"\uff0c\u5b83\u4eec\u4f1a\u88ab\u7f16\u8bd1\u4e3a\u5341\u8fdb\u5236\u6570\u5b57\u3002"),t.a.createElement("h2",{id:"\u5b57\u7b26\u4e32"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u5b57\u7b26\u4e32"},t.a.createElement("span",{className:"icon icon-link"})),"\u5b57\u7b26\u4e32"),t.a.createElement("p",null,"\u4f7f\u7528 ",t.a.createElement("code",null,"string")," \u5b9a\u4e49\u5b57\u7b26\u4e32\u7c7b\u578b\uff1a"),t.a.createElement(c.a,{code:"let name: string = 'Tom';\nlet age: number = 25;\n\n// \u6a21\u677f\u5b57\u7b26\u4e32\nlet sentence: string = `Hello, my name is ${name}.\nI'll be ${age + 1} years old next month.`;\n",lang:"ts"}),t.a.createElement("p",null,"\u7f16\u8bd1\u7ed3\u679c\uff1a"),t.a.createElement(c.a,{code:"var name = 'Tom';\nvar age = 25;\n// \u6a21\u677f\u5b57\u7b26\u4e32\nvar sentence =\n  'Hello, my name is ' + name + \".\\nI'll be \" + (age + 1) + ' years old next month.';\n",lang:"ts"}),t.a.createElement("p",null,t.a.createElement("code",null,"$(expr)")," \u7528\u6765\u5728\u6a21\u7248\u5b57\u7b26\u4e32\u4e2d\u5d4c\u5165\u8868\u8fbe\u5f0f\u3002"),t.a.createElement("h2",{id:"\u7a7a\u503c"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u7a7a\u503c"},t.a.createElement("span",{className:"icon icon-link"})),"\u7a7a\u503c"),t.a.createElement("p",null,"JavaScript \u6ca1\u6709\u7a7a\u503c\uff08void\uff09\u7684\u6982\u5ff5\uff0c\u5728 TypeScript \u4e2d\uff0c\u8868\u793a\u6ca1\u6709\u4efb\u4f55\u8fd4\u56de\u503c\u7684\u51fd\u6570"),t.a.createElement(c.a,{code:"function alertName(): void {\n  alert('My name is Tom');\n}\n",lang:"ts"}),t.a.createElement("p",null,"\u58f0\u660e\u4e00\u4e2a ",t.a.createElement("code",null,"void")," \u7c7b\u578b\u7684\u53d8\u91cf\u6ca1\u6709\u4ec0\u4e48\u7528\uff0c\u56e0\u4e3a\u4f60\u53ea\u80fd\u5c06\u5b83\u8d4b\u503c\u4e3a ",t.a.createElement("code",null,"undefined")," \u548c ",t.a.createElement("code",null,"null"),"\u3002"),t.a.createElement(c.a,{code:"let unusable: void = undefined;\n",lang:"ts"}),t.a.createElement("h2",{id:"null-\u548c-undefined"},t.a.createElement("a",{"aria-hidden":"true",href:"#null-\u548c-undefined"},t.a.createElement("span",{className:"icon icon-link"})),"Null \u548c Undefined"),t.a.createElement("p",null,"\u5728 TypeScript \u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528 ",t.a.createElement("code",null,"null")," \u548c ",t.a.createElement("code",null,"undefined")," \u6765\u5b9a\u4e49\u8fd9\u4e24\u4e2a\u539f\u59cb\u6570\u636e\u7c7b\u578b\uff1a"),t.a.createElement(c.a,{code:"let u: undefined = undefined;\nlet n: null = null;\n",lang:"ts"}),t.a.createElement("p",null,"\u4e0e ",t.a.createElement("code",null,"void")," \u7684\u533a\u522b\u662f\uff0c",t.a.createElement("code",null,"undefined")," \u548c ",t.a.createElement("code",null,"null")," \u662f\u6240\u6709\u7c7b\u578b\u7684\u5b50\u7c7b\u578b\u3002\u4e5f\u5c31\u662f\u8bf4 ",t.a.createElement("code",null,"undefined")," \u7c7b\u578b\u7684\u53d8\u91cf\uff0c\u53ef\u4ee5\u8d4b\u503c\u7ed9 ",t.a.createElement("code",null,"number")," \u7c7b\u578b\u7684\u53d8\u91cf\u3002"),t.a.createElement(c.a,{code:"// \u8fd9\u6837\u4e0d\u4f1a\u62a5\u9519\nlet num: number = undefined;\n",lang:"ts"}),t.a.createElement(c.a,{code:"// \u8fd9\u6837\u4e5f\u4e0d\u4f1a\u62a5\u9519\nlet u: undefined;\nlet num: number = u;\n",lang:"ts"}),t.a.createElement("p",null,"\u800c ",t.a.createElement("code",null,"void")," \u7c7b\u578b\u7684\u53d8\u91cf\u4e0d\u80fd\u8d4b\u503c\u7ed9 ",t.a.createElement("code",null,"number")," \u7c7b\u578b\u7684\u53d8\u91cf\uff1a"),t.a.createElement(c.a,{code:"let u: void;\nlet num: number = u;\n// Type 'orror' is not assignable to type number\n",lang:"ts"})))}}}]);