(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var i=n(4),s=n.n(i),o=n(2),c=n(5),r=n(6),l=n(8),a=n(7),u=n(1),b=(n(13),n(0)),h=function(t){var e=t.goods;return Object(b.jsx)("ul",{children:e.map((function(t){return Object(b.jsx)("li",{children:t},t)}))})},j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],d=function(t){Object(l.a)(n,t);var e=Object(a.a)(n);function n(){var t;Object(c.a)(this,n);for(var i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={minLength:1,visibleGoods:[].concat(j),isVisibleList:!1},t.filterList=function(){t.setState((function(t){return{visibleGoods:j.filter((function(e){return e.length>=t.minLength}))}}))},t.updateVisibleList=function(){t.setState({isVisibleList:!0})},t.reverseList=function(){t.setState((function(t){return{visibleGoods:Object(o.a)(t.visibleGoods).reverse()}}))},t.sortByName=function(){t.setState((function(t){return{visibleGoods:Object(o.a)(t.visibleGoods).sort((function(t,e){return t.localeCompare(e)}))}}))},t.sortByLength=function(){t.setState((function(t){return{visibleGoods:Object(o.a)(t.visibleGoods).sort((function(t,e){return t.length-e.length}))}}))},t.resetSortList=function(){t.setState({minLength:1,visibleGoods:[].concat(j)})},t.changeLength=function(e){t.setState((function(){return{minLength:e}})),t.filterList()},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.visibleGoods,i=e.isVisibleList,s=e.minLength;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"Goods"}),!i&&Object(b.jsx)("button",{type:"submit",onClick:this.updateVisibleList,children:"Start"}),i&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("select",{onChange:function(e){return t.changeLength(+e.target.value)},value:s,children:[Object(b.jsx)("option",{value:"1",children:"1"}),Object(b.jsx)("option",{value:"2",children:"2"}),Object(b.jsx)("option",{value:"3",children:"3"}),Object(b.jsx)("option",{value:"4",children:"4"}),Object(b.jsx)("option",{value:"5",children:"5"}),Object(b.jsx)("option",{value:"6",children:"6"}),Object(b.jsx)("option",{value:"7",children:"7"}),Object(b.jsx)("option",{value:"8",children:"8"}),Object(b.jsx)("option",{value:"9",children:"9"}),Object(b.jsx)("option",{value:"10",children:"10"})]}),Object(b.jsx)("button",{type:"submit",onClick:this.reverseList,children:"Reverse"}),Object(b.jsx)("button",{type:"submit",onClick:this.sortByName,children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"submit",onClick:this.sortByLength,children:"Sort by length"}),Object(b.jsx)("button",{type:"submit",onClick:this.resetSortList,children:"Reset"}),Object(b.jsx)(h,{goods:n})]})]})}}]),n}(u.Component),v=d;s.a.render(Object(b.jsx)(v,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.574b4a90.chunk.js.map