(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),s=n.n(c),o=n(3),i=n.n(o),a=(n(13),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),s(e),o(e)}))}),l=(n(14),n(4)),b=n(5),h=n(7),d=n(6),u=["green","red","yellow","purple","pink","blue","green","blue","red","yellow","purple"],j=function(e){var t=e.userObj,n=t.name,c=t.email,s=t.id;return Object(r.jsxs)("div",{className:"tc bg-light-".concat(u[s]," ba b--solid b--black bw2 shadow-7 grow ma3 dib br4 pa3"),children:[Object(r.jsx)("img",{alt:"images",src:"https://robohash.org/".concat(s)}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:n}),Object(r.jsx)("p",{children:c})]})]})},g=function(e){var t=e.robots.map((function(e,t){return Object(r.jsx)(s.a.Fragment,{children:Object(r.jsx)(j,{userObj:e})},e.id)}));return Object(r.jsx)("div",{children:t})},p=function(e){var t=e.searchChange;return Object(r.jsx)("div",{className:"pa2",children:Object(r.jsx)("input",{className:"tc pa3 ba b--solid bw2 br-pill b--black bg-lightest-blue",type:"text",placeholder:"Search Robots",onChange:t})})},O=function(e){return Object(r.jsx)("div",{style:{overflow:"scroll",height:"90vh"},children:e.children})},f=(n(15),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).onSearchChanged=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchField,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)("h1",{children:"RoboFriends"}),Object(r.jsx)(p,{searchChange:this.onSearchChanged}),Object(r.jsx)(O,{children:Object(r.jsx)(g,{robots:c})})]}):Object(r.jsx)("h1",{children:"Its Loading"})}}]),n}(s.a.Component));i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(f,{})}),document.getElementById("root")),a()}},[[16,1,2]]]);
//# sourceMappingURL=main.12254c60.chunk.js.map