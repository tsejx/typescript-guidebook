(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[32],{Ht7n:function(e,n,t){"use strict";t.r(n);var a=t("55Ip"),l=t("q1tI"),r=t.n(l),c=(t("B2uJ"),t("+su7"),t("qOys")),s=t.n(c);t("5Yjd");n["default"]=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"this-\u7c7b\u578b"},r.a.createElement("a",{"aria-hidden":"true",href:"#this-\u7c7b\u578b"},r.a.createElement("span",{className:"icon icon-link"})),"This \u7c7b\u578b"),r.a.createElement("p",null,"This \u7c7b\u578b\uff08This Types\uff09\u8868\u793a\u6240\u5c5e\u7c7b\u6216\u63a5\u53e3\u7684\u5b50\u7c7b\u578b\uff08\u79f0\u4e4b\u4e3a\u6709\u754c\u591a\u6001\u6027 F-bounded polymorphism\uff09\u3002"),r.a.createElement("p",null,"\ud83c\udf30 ",r.a.createElement("strong",null,"\u793a\u4f8b"),"\uff1a"),r.a.createElement(s.a,{code:"class BasicDOMNode {\n    constructor (private el: Element) {}\n    addClass(cssClass: string) {\n        this.el.classList.add(cssClass);\n        return this;\n    }\n}\n\nclass DOMNode extends BasicDOMNode {\n    addClasses(cssClasses: string[]) {\n        fo (let cssClass of cssClasses) {\n            this.addClass(cssClass)\n        }\n        return this;\n    }\n}\n\nconst node = new DOMNode(document.querySelector('div'));\n\nnode.addClass('page').addCLasses(['active', 'spring']).addClass('first');\n",lang:"ts"}),r.a.createElement("p",null,"\u4e0a\u8ff0\u793a\u4f8b\u4ee3\u7801\u4e2d\uff0c",r.a.createElement("code",null,"addClass")," \u4e0e ",r.a.createElement("code",null,"addCLasses")," \u7684\u7c7b\u578b\u7b7e\u540d\u5206\u522b\u662f\uff1a"),r.a.createElement(s.a,{code:"addClass(cssClass: string): this;\naddClasses(cssClasses: string[]): this;\n",lang:"ts"}),r.a.createElement("p",null,"\u4e0a\u8ff0\u7684\u94fe\u5f0f\u8c03\u7528\u4e2d\uff0c",r.a.createElement("code",null,"this")," \u7c7b\u578b\u80fd\u591f\u81ea\u52a8\u5bf9\u5e94\u5230\u6240\u5c5e\u7c7b\u5b9e\u4f8b\u7c7b\u578b\u4e0a\u3002\u6ca1\u9519\uff0c\u8fd9\u79cd JavaScript \u8fd0\u884c\u65f6\u7279\u6027\uff0c\u5728 TypeScript \u9759\u6001\u7c7b\u578b\u7cfb\u7edf\u4e2d\u540c\u6837\u652f\u6301\u3002"),r.a.createElement("p",null,"\u5177\u4f53\u5730\uff0cTypeScript \u4e2d\u7684 This \u7c7b\u578b\u5206\u4e3a\u4e24\u7c7b\uff1a"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u7c7b/\u63a5\u53e3\uff08\u7684\u6210\u5458\u65b9\u6cd5\uff09\u4e2d\u7684 ",r.a.createElement("code",null,"this")," \u7c7b\u578b"),r.a.createElement("li",null,"\u666e\u901a\u51fd\u6570\u4e2d\u7684 ",r.a.createElement("code",null,"this")," \u7c7b\u578b")),r.a.createElement("h2",{id:"\u7c7b\u63a5\u53e3\u4e2d-this-\u7c7b\u578b"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u7c7b\u63a5\u53e3\u4e2d-this-\u7c7b\u578b"},r.a.createElement("span",{className:"icon icon-link"})),"\u7c7b/\u63a5\u53e3\u4e2d this \u7c7b\u578b"),r.a.createElement("p",null,"\u6211\u4eec\u77e5\u9053\u8fd0\u884c\u65f6 ",r.a.createElement("code",null,"this")," \u6307\u5411\u5f53\u524d\u7c7b\u6216\u5176\u5b50\u7c7b\u5b9e\u4f8b\uff0c\u8fd9\u5728 JavaScript \u8fd0\u884c\u65f6\u662f\u4e00\u79cd\u975e\u5e38\u5e38\u89c1\u7684\u884c\u4e3a\u3002"),r.a.createElement("p",null,"\u4e5f\u5c31\u662f\u8bf4\uff0c",r.a.createElement("code",null,"this")," \u7684\u7c7b\u578b\u5e76\u4e0d\u662f\u56fa\u5b9a\u7684\uff0c\u53d6\u51b3\u4e8e\u5176\u8c03\u7528\u4e0a\u4e0b\u6587\u3002"),r.a.createElement("p",null,"\ud83c\udf30 ",r.a.createElement("strong",null,"\u793a\u4f8b"),"\uff1a"),r.a.createElement(s.a,{code:"class A {\n  foo() {\n    return this;\n  }\n}\n\nclass B extends A {\n  bar() {\n    return this;\n  }\n}\n\n// A \u7c7b\u5b9e\u4f8b\u7c7b\u578b\nconst res1 = new A().foo();\n\n// B \u7c7b\u5b9e\u4f8b\u7c7b\u578b\nconst res2 = new B().foo();\n\n// B \u7c7b\u5b9e\u4f8b\u7c7b\u578b\nconst res3 = new A().foo.call(new B());\n",lang:"ts"}),r.a.createElement("p",null,"\u7c7b ",r.a.createElement("code",null,"A")," \u4e2d ",r.a.createElement("code",null,"this")," \u5e76\u4e0d\u603b\u662f\u6307\u5411 ",r.a.createElement("code",null,"A")," \u7c7b\u5b9e\u4f8b\uff08\u4e5f\u6709\u53ef\u80fd\u662f ",r.a.createElement("code",null,"A")," \u7684\u5b50\u7c7b\u5b9e\u4f8b\uff09\uff0c\u90a3\u4e48\uff0c\u5e94\u8be5\u5982\u4f55\u63cf\u8ff0 ",r.a.createElement("code",null,"this")," \u7684\u7c7b\u578b\uff1f"),r.a.createElement("p",null,"\u5982\u679c\u7ed9\u6700\u521d\u7684\u573a\u666f\u6dfb\u4e0a\u7c7b\u578b\u63cf\u8ff0\u7684\u8bdd\uff0c\u6211\u4eec\u53ef\u80fd\u4f1a\u8fd9\u6837\u5c1d\u8bd5\uff1a"),r.a.createElement(s.a,{code:"declare class A {\n  foo(): A;\n}\n\ndeclare class B extends A {\n  bar(): B;\n}\n\n// Error: Property 'bar' does not exist on type 'A'.\nconst res = new B().foo().bar();\n",lang:"ts"}),r.a.createElement("p",null,"\u610f\u6599\u4e4b\u4e2d\u7684\u7ed3\u679c\uff0c",r.a.createElement("code",null,"foo(): A")," \u8fd4\u56de ",r.a.createElement("code",null,"A")," \u7c7b\u5b9e\u4f8b\uff0c\u5f53\u7136\u627e\u4e0d\u5230\u5b50\u7c7b ",r.a.createElement("code",null,"B")," \u7684\u6210\u5458\u65b9\u6cd5\u3002\u5b9e\u9645\u671f\u671b\u7684\u662f\uff1a"),r.a.createElement(s.a,{code:"   A\u7c7b\u5b9e\u4f8b\u7c7b\u578b\uff0c\u5177\u6709foo()\u65b9\u6cd5\n       |\nnew B().foo().bar()\n             |\n         B\u7c7b\u5b9e\u4f8b\u7c7b\u578b\uff0c\u5177\u6709bar()\u65b9\u6cd5\n",lang:"unknown"}),r.a.createElement("p",null,"\u90a3\u4e48\uff0c\u8fdb\u4e00\u6b65\u5c1d\u8bd5\uff1a"),r.a.createElement(s.a,{code:"declare class A {\n  foo(): A & B;\n}\n\ndeclare class B extends A {\n  bar(): B & A;\n}\n\nconst res = new B().foo().bar();\n",lang:"ts"}),r.a.createElement("p",null,r.a.createElement("code",null,"B")," \u7c7b\u4e2d\u7684 ",r.a.createElement("code",null,"this")," \u65e2\u662f ",r.a.createElement("code",null,"B")," \u7c7b\u5b9e\u4f8b\u4e5f\u662f ",r.a.createElement("code",null,"A")," \u7c7b\u5b9e\u4f8b\uff0c\u59d1\u4e14\u8ba4\u4e3a ",r.a.createElement("code",null,"bar(): B & A")," \u662f\u5408\u9002\u7684\uff0c\u4f46\u65e0\u8bba\u5982\u4f55 ",r.a.createElement("code",null,"foo(): A & B")," \u662f\u4e0d\u5408\u7406\u7684\uff0c\u56e0\u4e3a\u57fa\u7c7b\u5b9e\u4f8b\u5e76\u4e0d\u4e00\u5b9a\u662f\u5b50\u7c7b\u5b9e\u4f8b\u3002\u6211\u4eec\u4f3c\u4e4e\u6ca1\u6709\u529e\u6cd5\u7ed9 ",r.a.createElement("code",null,"this")," \u6807\u51fa\u4e00\u4e2a\u5408\u9002\u7684\u7c7b\u578b\uff0c\u5c24\u5176\u662f\u5728 ",r.a.createElement("code",null,"superThis.subMethod()")," \u7684\u573a\u666f\u3002"),r.a.createElement("p",null,"\u56e0\u6b64\uff0c\u9488\u5bf9\u7c7b\u4f3c\u7684\u573a\u666f\uff0c\u6709\u5fc5\u8981\u5f15\u5165\u4e00\u79cd\u7279\u6b8a\u7684\u7c7b\u578b\uff0c\u5373 ",r.a.createElement("code",null,"this")," \u7c7b\u578b\uff1a"),r.a.createElement("p",null,r.a.createElement("code",null,"this")," \u7c7b\u578b\u8868\u73b0\u4e3a\u6240\u5c5e\u7c7b/\u63a5\u53e3\u7684\u5b50\u7c7b\u578b\uff0c\u8fd9\u4e0e JavaScript \u8fd0\u884c\u65f6\u7684 ",r.a.createElement("code",null,"this")," \u673a\u5236\u4e00\u81f4\u3002"),r.a.createElement("p",null,"\ud83c\udf30 ",r.a.createElement("strong",null,"\u793a\u4f8b"),"\uff1a"),r.a.createElement(s.a,{code:"class A {\n  foo(): this {\n    return this;\n  }\n}\n\nclass B extends A {\n  bar(): this {\n    return this;\n  }\n}\n\nconst res = new B().foo().bar();\n",lang:"ts"}),r.a.createElement("p",null,"\u4e5f\u5c31\u662f\u8bf4\uff0cthis \u7c7b\u578b\u5c31\u662f this \u503c\u7684\u7c7b\u578b\uff1a"),r.a.createElement("blockquote",null,r.a.createElement("p",null,"In a non-static member of a class or interface, this in a type position refers to the type of this.")),r.a.createElement("p",null,"\u5176\u5b9e\u73b0\u539f\u7406\uff0c\u5c31\u662f\u628a\u7c7b/\u63a5\u53e3\u770b\u4f5c\u662f\u5177\u6709\u9690\u5f0f\u7c7b\u578b\u53c2\u6570 ",r.a.createElement("code",null,"this")," \u7684\u6cdb\u578b\uff0c\u5e76\u52a0\u4e0a\u5176\u6240\u5728\u7c7b/\u63a5\u53e3\u76f8\u5173\u7684\u7c7b\u578b\u7ea6\u675f\u3002"),r.a.createElement("p",null,"\u5177\u4f53\u5730\uff0c",r.a.createElement("code",null,"this")," \u7c7b\u578b\u5728\u5b9e\u73b0\u4e0a\u76f8\u5f53\u4e8e ",r.a.createElement("code",null,"A<this extends A<A>>"),"\uff08\u5373\u7ecf\u5178\u7684 ",r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Curiously_recurring_template_pattern",target:"_blank",rel:"noopener noreferrer"},"CRTP \u5947\u5f02\u9012\u5f52\u6a21\u7248\u6a21\u5f0f",r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},r.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),r.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}))),"\uff09\uff0c\u7c7b\u4e2d ",r.a.createElement("code",null,"this")," \u503c\u7684\u7c7b\u578b\u5c31\u662f\u6cdb\u578b\u53c2\u6570 ",r.a.createElement("code",null,"this"),"\u3002\u51fa\u4e86\u5f53\u524d\u7c7b/\u63a5\u53e3\u7684\u4e0a\u4e0b\u6587\uff0c",r.a.createElement("code",null,"this")," \u7684\u7c7b\u578b\u5c31\u662f ",r.a.createElement("code",null,"A<this: A>"),"\uff0c\u7c7b\u578b\u517c\u5bb9\u6027\u7b49\u4e0e\u6cdb\u578b\u4e00\u81f4\u3002"),r.a.createElement("p",null,"\u6240\u4ee5\uff0c",r.a.createElement("code",null,"this")," \u7c7b\u578b\u5c31\u50cf\u4e00\u4e2a\u5e26\u6709\u7c7b\u6d3e\u751f\u5173\u7cfb\u7ea6\u675f\u7684\u9690\u5f0f\u7c7b\u578b\u53c2\u6570\u3002"),r.a.createElement("h2",{id:"\u51fd\u6570\u4e2d\u7684-this-\u7c7b\u578b"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u51fd\u6570\u4e2d\u7684-this-\u7c7b\u578b"},r.a.createElement("span",{className:"icon icon-link"})),"\u51fd\u6570\u4e2d\u7684 this \u7c7b\u578b"),r.a.createElement("p",null,"\u9664\u4e86\u7c7b/\u63a5\u53e3\u5916\uff0c",r.a.createElement("code",null,"this")," \u7c7b\u578b\u8fd8\u9002\u7528\u4e8e\u666e\u901a\u51fd\u6570\u3002"),r.a.createElement("p",null,"\u4e0d\u540c\u4e8e\u7c7b\u6216\u63a5\u53e3\u4e2d\u7684 ",r.a.createElement("code",null,"this")," \u7c7b\u578b\u901a\u5e38\u9690\u5f0f\u53d1\u6325\u4f5c\u7528\uff08\u5982\u81ea\u52a8 ",r.a.createElement(a["a"],{to:"./type-inference"},"\u7c7b\u578b\u63a8\u8bba"),"\uff09\uff0c\u51fd\u6570\u4e2d\u7684 ",r.a.createElement("code",null,"this")," \u7c7b\u578b\u5927\u90fd\u901a\u8fc7\u73b0\u5f0f\u58f0\u660e\u6765\u7ea6\u675f\u51fd\u6570\u4f53\u4e2d ",r.a.createElement("code",null,"this")," \u503c\u7684\u7c7b\u578b\u3002"),r.a.createElement("p",null,"\u628a ",r.a.createElement("code",null,"this")," \u663e\u5f0f\u5730\u4f5c\u4e3a\u51fd\u6570\u7684\uff08\u7b2c\u4e00\u4e2a\uff09\u53c2\u6570\uff0c\u4ece\u800c\u9650\u5b9a\u5176\u7c7b\u578b\uff0c\u50cf\u666e\u901a\u53c2\u6570\u4e00\u6837\u8fdb\u884c\u7c7b\u578b\u68c0\u67e5\u3002"),r.a.createElement("p",null,"\ud83c\udf30 ",r.a.createElement("strong",null,"\u793a\u4f8b"),"\uff1a\u4ec5\u5728\u663e\u5f0f\u58f0\u660e\u4e86 ",r.a.createElement("code",null,"this")," \u503c\u7c7b\u578b\u65f6\u624d\u8fdb\u884c\u68c0\u67e5"),r.a.createElement(s.a,{code:"declare class Person {\n  foo();\n}\n\nconst bar = new Person();\n\n// baz \u7c7b\u578b\u4e3a (this: Person) => any\nlet baz = bar.foo;\n\nbaz();\n",lang:"ts"}),r.a.createElement("p",null,"\u7279\u6b8a\u5730\uff0c\u80a9\u75db\u51fd\u6570\uff08lambda\uff09\u7684 ",r.a.createElement("code",null,"this")," \u65e0\u6cd5\u624b\u52a8\u9650\u5b9a\u5176\u7c7b\u578b\u3002"),r.a.createElement("h2",{id:"\u5e94\u7528\u573a\u666f"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u5e94\u7528\u573a\u666f"},r.a.createElement("span",{className:"icon icon-link"})),"\u5e94\u7528\u573a\u666f"),r.a.createElement("h3",{id:"\u6d41\u5f0f\u63a5\u53e3"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u6d41\u5f0f\u63a5\u53e3"},r.a.createElement("span",{className:"icon icon-link"})),"\u6d41\u5f0f\u63a5\u53e3"),r.a.createElement("p",null,r.a.createElement("code",null,"this")," \u7c7b\u578b\u8ba9\u6d41\u5f0f\u63a5\u53e3\uff08fluent interface\uff09\u53d8\u5f97\u5f88\u5bb9\u6613\u63cf\u8ff0\u3002"),r.a.createElement(s.a,{code:"class A {\n  foo(): this {\n    return this;\n  }\n}\n\nclass B {\n  bar(): this {\n    return this;\n  }\n}\n\nconst res = new B().foo().bar();\n",lang:"ts"}),r.a.createElement("p",null,"\u6240\u8c13\u7684\u6d41\u5f0f\u63a5\u53e3\uff08\u8bbe\u8ba1\u5c42\u9762\uff09\uff0c\u53ef\u4ee5\u7b80\u5355\u7406\u89e3\u4e3a\u94fe\u5f0f\u8c03\u7528\uff08\u5b9e\u73b0\u5c42\u9762\uff09\u3002"),r.a.createElement("p",null,"\u7b80\u8a00\u4e4b\uff0c\u6d41\u5f0f\u63a5\u53e3\u5f0f OOP \u4e2d\u7684\u4e00\u79cd API \u8bbe\u8ba1\u65b9\u5f0f\uff0c\u901a\u8fc7\u94fe\u5f0f\u65b9\u6cd5\u8c03\u7528\u8ba9\u8fdc\u5417\u5177\u6709\u53ef\u8bfb\u6027\u3002"),r.a.createElement("p",null,r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Fluent_interface",target:"_blank",rel:"noopener noreferrer"},"Fluent Interface",r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},r.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),r.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))),r.a.createElement("h3",{id:"\u63cf\u8ff0-this-\u7684\u7c7b\u578b"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u63cf\u8ff0-this-\u7684\u7c7b\u578b"},r.a.createElement("span",{className:"icon icon-link"})),"\u63cf\u8ff0 this \u7684\u7c7b\u578b"),r.a.createElement("p",null,"\u666e\u901a\u51fd\u6570\u4e2d\u7684 ",r.a.createElement("code",null,"this")," \u7c7b\u578b\u5141\u8bb8\u6211\u4eec\u50cf\u63cf\u8ff0\u666e\u901a\u53c2\u6570\u4e00\u6837\u9650\u5b9a ",r.a.createElement("code",null,"this")," \u7684\u7c7b\u578b\uff0c\u8fd9\u5728\u56de\u8c03\u51fd\u6570\u573a\u666f\u5c24\u4e3a\u91cd\u8981\u3002"),r.a.createElement("p",null,"\ud83c\udf30 ",r.a.createElement("strong",null,"\u793a\u4f8b"),"\uff1a"),r.a.createElement(s.a,{code:"class Cat {\n  constructor(public name: string) {}\n  meow(this: Cat) {\n    console.log('Meow~~');\n  }\n}\n\nclass EventBus {\n  on(type: string, handler: (this: void, ...params) => void) {\n    /* ... */\n  }\n}\n\n// Error: Argument of type '(this: Cat) => void' is not assignable to parameter of type '(this: void, ...params: any[]) => void'.\nnew EventBus().on('click', new Cat('Neko').meow);\n",lang:"ts"}),r.a.createElement("h3",{id:"\u8ffd\u8e2a\u4e0a\u4e0b\u6587\u7c7b\u578b"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u8ffd\u8e2a\u4e0a\u4e0b\u6587\u7c7b\u578b"},r.a.createElement("span",{className:"icon icon-link"})),"\u8ffd\u8e2a\u4e0a\u4e0b\u6587\u7c7b\u578b"),r.a.createElement("p",null,"\u6709\u4e86 ",r.a.createElement("code",null,"this")," \u7c7b\u578b\uff0c",r.a.createElement("code",null,"bind"),"\u3001",r.a.createElement("code",null,"call"),"\u3001",r.a.createElement("code",null,"apply")," \u7b49\u573a\u666f\u4e5f\u80fd\u6b63\u786e\u7ef4\u6301\u7c7b\u578b\u7ea6\u675f\uff0c\u8981\u6c42\u5f53\u524d\u51fd\u6570 ",r.a.createElement("code",null,"this")," \u4e0e\u4f20\u5165\u7684\u76ee\u6807\u5bf9\u8c61\u7c7b\u578b\u4e00\u81f4\uff1a"),r.a.createElement(s.a,{code:"apply<T, A extends any[], R>(this: (this: T, ...args: A) => R, thisArg: T, args: A): R;\ncall<T, A extends any[], R>(this: (this: T, ...args: A) => R, thisArg: T, ...args: A): R;\nbind<T, A extends any[], R>(this: (this: T, ...args: A) => R, thisArg: T): (...args: A) => R;\n",lang:"ts"}),r.a.createElement("p",null,"\u8ba9\u7c7b\u4f3c\u7684\u9519\u8bef\u66b4\u9732\u51fa\u6765\uff08\u9700\u8981\u5f00\u542f strictBindCallApply \u9009\u9879\uff09\u3002"),r.a.createElement(s.a,{code:"class Foo {\n  constructor(a: number, b: string) {}\n  bar(this: this, a: number, b: string): string {\n    return '';\n  }\n}\n\ndeclare let foo: Foo;\n\nlet bind = foo.bar.bind(undefined); // Error\nlet call = foo.bar.call(undefined, 10, 'Hello'); // Error\nlet apply = foo.bar.apply(undefined, [10, 'Hello']); // Error\n",lang:"ts"}),r.a.createElement("p",null,"\u5173\u4e8e ",r.a.createElement("code",null,"bind"),"\u3001",r.a.createElement("code",null,"call"),"\u3001a",r.a.createElement("code",null,"pply")," \u7b49\u7c7b\u578b\u7ea6\u675f\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u89c1 ",r.a.createElement("a",{href:"https://github.com/Microsoft/TypeScript/pull/27028",target:"_blank",rel:"noopener noreferrer"},"Strict bind, call, and apply methods on functions",r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},r.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),r.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}))),"\u3002")))}}}]);