(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{RCkY:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),l=t.n(a),r=(t("B2uJ"),t("+su7"),t("qOys")),o=t.n(r);t("5Yjd");n["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"\u4ea4\u53c9\u7c7b\u578b"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u4ea4\u53c9\u7c7b\u578b"},l.a.createElement("span",{className:"icon icon-link"})),"\u4ea4\u53c9\u7c7b\u578b"),l.a.createElement("p",null,"\u4ea4\u53c9\u7c7b\u578b\uff08Intersection Types\uff09\u662f\u5c06\u591a\u4e2a\u7c7b\u578b\u53e0\u52a0\u5408\u5e76\u7ec4\u6210\u65b0\u7684\u7c7b\u578b\uff0c\u65b0\u7c7b\u578b\u5305\u542b\u4e86\u6240\u6709\u88ab\u5408\u5e76\u7c7b\u578b\u7684\u6240\u6709\u5c5e\u6027\u3002"),l.a.createElement("p",null,"\u4ea4\u53c9\u7c7b\u578b\u7684\u4f7f\u7528\u573a\u666f\uff1aMixins\u3001\u4e0d\u9002\u5408\u7528\u7c7b\u6765\u5b9a\u4e49\u7684\u573a\u666f"),l.a.createElement("p",null,"\u4f8b\u5982\uff0c\u4e0b\u8ff0\u4ee3\u7801\u663e\u793a\u4e86\u4ea4\u53c9\u7c7b\u578b ",l.a.createElement("code",null,"Foo & Bar")," \u540c\u65f6\u5177\u5907 ",l.a.createElement("code",null,"Foo")," \u548c ",l.a.createElement("code",null,"Bar")," \u4e24\u79cd\u7c7b\u578b\u7684\u6210\u5458\uff0c\u5c31\u662f\u8bf4\u8fd9\u4e2a\u7c7b\u578b\u7684\u5bf9\u8c61\u540c\u65f6\u62e5\u6709\u4e86\u8fd9\u4e24\u79cd\u7c7b\u578b\u7684\u6210\u5458\u3002"),l.a.createElement(o.a,{code:"interface Foo {\n  name: string;\n  age: number;\n  sayName: (name: string) => void;\n}\n\ninterface Bar {\n  name: string;\n  gender: number;\n  sayGender: (gender: string) => void;\n}\n\nlet Tom: Foo & Bar;\n\nconsole.log(Tom.age);\nconsole.log(Tom.gender);\n",lang:"ts"}),l.a.createElement("p",null,"\u8f83\u591a\u5728\u6df7\u5165\uff08Mixins\uff09\u6216\u5176\u4ed6\u4e0d\u9002\u5408\u5178\u578b\u9762\u5411\u5bf9\u8c61\u6a21\u578b\u7684\u5730\u65b9\u770b\u5230\u4ea4\u53c9\u7c7b\u578b\u7684\u4f7f\u7528\u3002"),l.a.createElement("p",null,"\ud83c\udf30 ",l.a.createElement("strong",null,"\u793a\u4f8b"),"\uff1a\u4e0b\u9762\u4ee3\u7801\uff08",l.a.createElement("a",{href:"http://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types",target:"_blank",rel:"noopener noreferrer"},"\u5b98\u65b9\u793a\u4f8b",l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},l.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),l.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}))),"\uff09\u5c55\u793a\u4e86\u5982\u4f55\u521b\u5efa\u4e00\u4e2a\u6df7\u5165\u7684\u7b80\u5355\u4f8b\u5b50"),l.a.createElement(o.a,{code:"function extend<T, U>(first: T, second: U): T & U {\n  let result = <T & U>{};\n  for (let prop in first) {\n    (<any>result)[prop] = (<any>first)[prop];\n  }\n  for (let prop in second) {\n    if (!result.hasOwnProperty(id)) {\n      (<any>result)[prop] = (<any>second)[prop];\n    }\n  }\n  return result;\n}\n\nclass Person {\n  constructor(public name: string) {}\n}\ninterface Loggable {\n  log(): void;\n}\nclass ConsoleLogger implements Loggable {\n  log() {\n    // ...\n  }\n}\n\nconst tom = extend(new Person('Jim'), new ConsoleLogger());\nconst name = tom.name;\n\ntom.log();\n",lang:"ts"}),l.a.createElement("p",null,"\u4e0a\u8ff0\u4ee3\u7801\u76f8\u5bf9\u6bd4\u8f83\u7b80\u5355\uff0c\u4f46\u53ef\u80fd\u5bf9\u4e0b\u9762\u8fd9\u6bb5\u4ee3\u7801\u4f1a\u4ea7\u751f\u7591\u95ee\uff1a"),l.a.createElement(o.a,{code:"(<any>result)[prop] = first[prop];\n",lang:"ts"}),l.a.createElement("p",null,"\u65e2\u7136 ",l.a.createElement("code",null,"result")," \u5df2\u7ecf\u88ab\u65ad\u8a00\u4e3a\u4ea4\u53c9\u7c7b\u578b\uff0c\u90a3\u4e48 ",l.a.createElement("code",null,"first")," \u6240\u5177\u6709\u7684\u5c5e\u6027 ",l.a.createElement("code",null,"result")," \u90fd\u662f\u5177\u6709\u7684\u3002"),l.a.createElement("p",null,"\u4e3a\u4ec0\u4e48\u8fd8\u8981\u5c06 ",l.a.createElement("code",null,"result")," \u65ad\u8a00\u4e3a ",l.a.createElement("code",null,"any")," \u7c7b\u578b\u5462\uff0c\u56e0\u4e3a\u4ea4\u53c9\u7c7b\u578b\u53ef\u80fd\u5bfc\u81f4\u7c7b\u578b\u51b2\u7a81\u3002"),l.a.createElement("p",null,"\ud83c\udf30 ",l.a.createElement("strong",null,"\u793a\u4f8b"),"\uff1a"),l.a.createElement(o.a,{code:"interface Foo {\n  x: boolean;\n  y: string;\n}\n\ninterface Bar {\n  x: boolean;\n  y: number;\n}\n\ntype Baz = Foo & Bar;\n\ntype X = Baz['x']; // boolean\ntype Y = Baz['y']; // string & number\n\ndeclare const baz: Baz;\ndeclare const foo: Foo;\n\nbaz['y'] = foo['y'];\n",lang:"ts"}),l.a.createElement("p",null,"\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d\uff0c",l.a.createElement("code",null,"Foo")," \u548c ",l.a.createElement("code",null,"Bar")," \u63a5\u53e3\u4e2d\uff0c",l.a.createElement("code",null,"y")," \u5c5e\u6027\u7c7b\u578b\u51b2\u7a81\uff0c\u90a3\u4e48\u6700\u7ec8 ",l.a.createElement("code",null,"y")," \u5c5e\u6027\u7c7b\u578b\u4e3a\u4ea4\u53c9\u7c7b\u578b ",l.a.createElement("code",null,"string & number"),"\uff0c\u540c\u65f6 ",l.a.createElement("code",null,"string")," \u7c7b\u578b\u6216\u8005 ",l.a.createElement("code",null,"number")," \u7c7b\u578b\u65e0\u6cd5\u8d4b\u503c\u7ed9\u4ea4\u53c9\u7c7b\u578b ",l.a.createElement("code",null,"string & number"),"\uff0c\u6700\u7ec8\u5bfc\u81f4\u62a5\u9519\u3002\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u53ef\u4ee5\u5c06 ",l.a.createElement("code",null,"result")," \u518d\u65ad\u8a00\u4e3a ",l.a.createElement("code",null,"any")," \u7c7b\u578b\uff0c\u8fd9\u6837 ",l.a.createElement("code",null,"result")," \u6240\u6709\u5c5e\u6027\u5747\u4e3a ",l.a.createElement("code",null,"any")," \u7c7b\u578b\uff0c\u90a3\u4e48\u8d4b\u503c\u5c31\u4e0d\u4f1a\u62a5\u9519\u4e86\u3002")))}}}]);