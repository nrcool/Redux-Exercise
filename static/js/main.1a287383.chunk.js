(window["webpackJsonpredux-exercise"]=window["webpackJsonpredux-exercise"]||[]).push([[0],{12:function(e,n,t){e.exports=t(24)},17:function(e,n,t){},18:function(e,n,t){},24:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t.n(r),u=t(4),a=t.n(u),l=(t(17),t(18),t(3));var o=Object(l.b)(function(e){return{valuex:e.valuex}},function(e){return{incrementValueY:function(){return e({type:"incrementY"})}}})(function(e){return c.a.createElement("div",null,c.a.createElement("h1",null," Increment X : ",e.valuex," ",c.a.createElement("button",{onClick:e.incrementValueY},"Increment Y")," "))});var i=Object(l.b)(function(e){return{valuey:e.valuey}},function(e){return{incrementValueX:function(){return e({type:"incrementX"})}}})(function(e){return c.a.createElement("div",null,c.a.createElement("h1",null," Increment Y : ",e.valuey,"  ",c.a.createElement("button",{onClick:e.incrementValueX},"Increment X")," "))});var m=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(o,null),c.a.createElement(i,null))},v=t(5),f=t(11);function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(t,!0).forEach(function(n){Object(f.a)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var b={valuex:0,valuey:0};var y=Object(v.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b;switch((arguments.length>1?arguments[1]:void 0).type){case"incrementY":return s({},e,{valuey:e.valuey+1});case"incrementX":return s({},e,{valuex:e.valuex+1});default:return e}});a.a.render(c.a.createElement(l.a,{store:y}," ",c.a.createElement(m,null)," "),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.1a287383.chunk.js.map