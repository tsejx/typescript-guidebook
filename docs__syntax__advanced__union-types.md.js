(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[37],{"T5+g":function(e,n,t){"use strict";t.r(n);var l=t("55Ip"),a=t("q1tI"),r=t.n(a),c=(t("B2uJ"),t("+su7"),t("qOys")),m=t.n(c);t("5Yjd");n["default"]=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"\u8054\u5408\u7c7b\u578b"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u8054\u5408\u7c7b\u578b"},r.a.createElement("span",{className:"icon icon-link"})),"\u8054\u5408\u7c7b\u578b"),r.a.createElement("p",null,"\u8054\u5408\u7c7b\u578b\uff08Union Types\uff09\u662f\u5177\u6709\u6216\u5173\u7cfb\u7684\u591a\u4e2a\u7c7b\u578b\u7ec4\u5408\u800c\u6210\uff0c\u53ea\u8981\u6ee1\u8db3\u5176\u4e2d\u4e00\u4e2a\u7c7b\u578b\u5373\u53ef\u3002"),r.a.createElement("p",null,"\ud83c\udf30 ",r.a.createElement("strong",null,"\u793a\u4f8b"),"\uff1a"),r.a.createElement(m.a,{code:"let val: string | number;\n",lang:"ts"}),r.a.createElement("p",null,"\u4e0a\u8ff0\u793a\u4f8b\u4ee3\u7801\u8868\u793a ",r.a.createElement("code",null,"val")," \u503c\u53ef\u4ee5\u662f ",r.a.createElement("code",null,"number")," \u7c7b\u578b\u6216\u8005 ",r.a.createElement("code",null,"string")," \u7c7b\u578b\u7684\u5176\u4e2d\u4e00\u79cd\uff0c\u8054\u5408\u7c7b\u578b\u4f7f\u7528 ",r.a.createElement("code",null,"|")," \u5206\u9694\u6bcf\u4e2a\u7c7b\u578b\u3002"),r.a.createElement(m.a,{code:"val = true;\n\n// index.ts(2,1): error TS2322: Type 'boolean' is not assignable to type 'string | number'.\n//   Type 'boolean' is not assignable to type 'number'.\n",lang:"ts"}),r.a.createElement("p",null,"\u8fd9\u91cc\u5c06 ",r.a.createElement("code",null,"val")," \u53d8\u91cf\u8d4b\u503c\u4e3a\u5e03\u5c14\u503c ",r.a.createElement("code",null,"true"),"\uff0c\u65e2\u4e0d\u662f\u5b9a\u4e49\u7684 ",r.a.createElement("code",null,"number")," \u7c7b\u578b\u4e5f\u4e0d\u662f ",r.a.createElement("code",null,"string")," \u7c7b\u578b\uff0c\u56e0\u6b64\u4f1a\u88ab\u7f16\u8bd1\u4e3a\u9519\u8bef\u3002"),r.a.createElement("h2",{id:"\u8bbf\u95ee\u8054\u5408\u7c7b\u578b\u7684\u5c5e\u6027\u6216\u65b9\u6cd5"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u8bbf\u95ee\u8054\u5408\u7c7b\u578b\u7684\u5c5e\u6027\u6216\u65b9\u6cd5"},r.a.createElement("span",{className:"icon icon-link"})),"\u8bbf\u95ee\u8054\u5408\u7c7b\u578b\u7684\u5c5e\u6027\u6216\u65b9\u6cd5"),r.a.createElement("p",null,"\u5f53 TypeScript \u4e0d\u786e\u5b9a\u4e00\u4e2a\u8054\u5408\u7c7b\u578b\u7684\u53d8\u91cf\u5230\u5e95\u662f\u54ea\u4e2a\u7c7b\u578b\u7684\u65f6\u5019\uff0c\u6211\u4eec\u53ea\u80fd\u8bbf\u95ee\u6b64\u8054\u5408\u7c7b\u578b\u7684\u6240\u6709\u7c7b\u578b\u91cc\u5171\u6709\u7684\u5c5e\u6027\u6216\u65b9\u6cd5\uff1a"),r.a.createElement(m.a,{code:"function getLength(val: string | number): number {\n  return val.length;\n}\n\n// index.ts(2,22): error TS2339: Property 'length' does not exist on type 'string | number'.\n//   Property 'length' does not exist on type 'number'.\n",lang:"ts"}),r.a.createElement("p",null,"\u4e0a\u4f8b\u4e2d\uff0c",r.a.createElement("code",null,"length")," \u4e0d\u662f ",r.a.createElement("code",null,"string")," \u548c ",r.a.createElement("code",null,"number")," \u7684\u5171\u6709\u5c5e\u6027\uff0c\u6240\u4ee5\u4f1a\u62a5\u9519\u3002"),r.a.createElement("p",null,"\u8bbf\u95ee ",r.a.createElement("code",null,"string")," \u548c ",r.a.createElement("code",null,"number")," \u7684\u5171\u6709\u5c5e\u6027\uff08\u65b9\u6cd5\uff09\u662f\u6ca1\u95ee\u9898\u7684\uff1a"),r.a.createElement(m.a,{code:"function getString(val: string | number): string {\n  return val.toString();\n}\n",lang:"ts"}),r.a.createElement("p",null,"\u8054\u5408\u7c7b\u578b\u7684\u53d8\u91cf\u5728\u88ab\u8d4b\u503c\u7684\u65f6\u5019\uff0c\u4f1a\u6839\u636e ",r.a.createElement(l["a"],{to:"./type-inference"},"\u7c7b\u578b\u63a8\u8bba")," \u7684\u89c4\u5219\u63a8\u65ad\u51fa\u4e00\u4e2a\u7c7b\u578b\uff1a"),r.a.createElement(m.a,{code:"let num: string | number;\n\nnum = 'seven';\nconsole.log(num.length); // 5\n\nnum = 7;\nconsole.log(num.length); // \u7f16\u8bd1\u65f6\u62a5\u9519\n\n// index.ts(5,30): error TS2339: Property 'length' does not exist on type 'number'.\n",lang:"ts"}),r.a.createElement("p",null,"\u4e0a\u4f8b\u4e2d\uff0c\u7b2c\u4e8c\u884c\u7684 ",r.a.createElement("code",null,"num")," \u88ab\u63a8\u65ad\u6210\u4e86 ",r.a.createElement("code",null,"string")," \u7c7b\u578b\uff0c\u8bbf\u95ee\u5b83\u7684 ",r.a.createElement("code",null,"length")," \u5c5e\u6027\u4e0d\u4f1a\u62a5\u9519\u3002"),r.a.createElement("p",null,"\u800c\u7b2c\u56db\u884c\u7684 ",r.a.createElement("code",null,"num")," \u88ab\u63a8\u65ad\u6210\u4e86 ",r.a.createElement("code",null,"number")," \u7c7b\u578b\uff0c\u8bbf\u95ee\u5b83\u7684 ",r.a.createElement("code",null,"length")," \u5c5e\u6027\u65f6\u5c31\u62a5\u9519\u4e86\u3002")))}}}]);