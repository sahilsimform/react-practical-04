(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(46)},21:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){},42:function(e,t){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(13),r=a.n(l),i=(a(21),a(22),a(14)),m=a(15),o=a(1),s=a(4),u=(a(23),a(24)),d=function(){return localStorage.getItem("TodoList")?JSON.parse(localStorage.getItem("TodoList")):[]};var f=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(d()),f=Object(o.a)(r,2),E=f[0],v=f[1],N=Object(n.useState)(!0),b=Object(o.a)(N,2),p=b[0],h=b[1],g=Object(n.useState)(null),w=Object(o.a)(g,2),_=w[0],k=w[1],y=Object(n.useState)(!1),I=Object(o.a)(y,2),O=I[0],j=I[1],C=function(e){var t=E.map(function(t){return t.id===e&&(t.isComplete=!t.isComplete),t});v(t)},S=function(){if(a)if(a&&!p)v(E.map(function(e){return e.id===_?Object(m.a)({},e,{name:a}):e})),h(!0),l(""),k(null);else{var e={id:(new Date).getTime().toString(),name:a};v([].concat(Object(i.a)(E),[e])),l("")}else alert("Please Enter a Data.")};return Object(n.useEffect)(function(){localStorage.setItem("TodoList",JSON.stringify(E))},[E]),u.scheduleJob("0 0 * * *",function(){v([])}),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container "},c.a.createElement("div",{className:"showItems"},E.map(function(e){return c.a.createElement("div",{className:"eachItem",key:e.id},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"mt-2 col dis_main"},c.a.createElement("span",{onDoubleClick:function(){return function(e){var t=E.filter(function(t){return e!==t.id});v(t),l("")}(e.id)}},c.a.createElement("h3",{onClick:function(){return function(e){var t=E.find(function(t){return t.id===e});h(!1),l(t.name),k(e)}(e.id)},className:e.isComplete?"todo-row complete":"todo-row"},e.name))),c.a.createElement("div",{className:"col icon_btn"},c.a.createElement("div",null,e.isComplete?c.a.createElement(s.a,{key:e.id,className:"icon checkIcon",onClick:function(){return C(e.id)}}):c.a.createElement(s.b,{key:e.id,className:"icon",onClick:function(){return C(e.id)}})))))})),c.a.createElement("div",{className:"addItems mt-4"},O?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"Input_Text"},c.a.createElement("input",{type:"text",className:"textArea",placeholder:"Add Items to Add to the Todo..",value:a,onChange:function(e){return l(e.target.value)},onKeyUp:function(e){"Enter"===e.key?S():"Escape"===e.key&&j(!1)}}),c.a.createElement("button",{className:"btnAdd",onClick:S},c.a.createElement("i",{className:"fas fa-check add-btn",title:"Update Item"},"Update/Add")))):c.a.createElement("div",{className:"btn_div"},c.a.createElement("button",{onClick:function(){return j(!0)},className:"Add_btn_main"},c.a.createElement("b",null,"+"))))))};a(45);var E=function(){var e=new Date,t=new Intl.DateTimeFormat("en",{year:"numeric"}).format(e),a=new Intl.DateTimeFormat("en",{month:"short"}).format(e),n=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(e),l=new Intl.DateTimeFormat("en",{weekday:"long"}).format(e);return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container mt-4"},c.a.createElement("div",{className:"time_div row  justify-content-md-center"},c.a.createElement("div",{className:"time_div_date col"},c.a.createElement("h1",{className:"date_h1"},n)),c.a.createElement("div",{className:"time_div_month col float-left"},c.a.createElement("h4",{className:"month_h4"},a),c.a.createElement("h4",{className:"year_h4"},t)),c.a.createElement("div",{className:"time_div_day col "},c.a.createElement("h4",{className:"day_h4"},l)))))};var v=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:" App_div "},c.a.createElement(E,null),c.a.createElement(f,null))))},N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,47)).then(function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,l=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),l(e),r(e)})};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root")),N()}},[[16,1,2]]]);
//# sourceMappingURL=main.7b413651.chunk.js.map