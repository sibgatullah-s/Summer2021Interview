(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),s=n.n(c),r=n(4),i=n.n(r);n(14),n(15);var o=function(){return Object(a.jsx)("div",{className:"App"})},u=n(5),d=n(6),l=n(2),h=n(8),j=n(7),b=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).state={data:[],key:"",results:[]},a.handleChange=a.handleChange.bind(Object(l.a)(a)),a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var t=this;fetch("https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000").then((function(t){return t.json()})).then((function(e){console.log(e),t.setState({data:e})})).catch((function(t){console.error(t)}))}},{key:"handleChange",value:function(t){var e=[];this.state.data.forEach((function(n){n.keywords.includes(t.target.value)&&e.push(n)})),this.setState({key:t.target.value,results:e})}},{key:"renderTableData",value:function(){return this.state.results.map((function(t,e){var n=t.title,c=t.body;return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:n}),Object(a.jsx)("td",{children:c})]},e)}))}},{key:"render",value:function(){return console.log("test",this.state.data),Object(a.jsxs)("div",{id:"search",children:[Object(a.jsxs)("div",{id:"searchbar",children:[Object(a.jsx)("label",{for:"item",children:"Enter item:"}),Object(a.jsx)("input",{id:"item",onChange:this.handleChange})]}),Object(a.jsx)("div",{children:Object(a.jsx)("table",{id:"results",children:Object(a.jsx)("tbody",{children:this.renderTableData()})})})]})}}]),n}(s.a.Component),f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),a(t),c(t),s(t),r(t)}))};i.a.render(Object(a.jsxs)(s.a.StrictMode,{children:[Object(a.jsx)(o,{}),Object(a.jsx)(b,{})]}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.5a48aaa1.chunk.js.map