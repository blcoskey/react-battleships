(this["webpackJsonpreact-battleships"]=this["webpackJsonpreact-battleships"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(1),l=n.n(i),c=n(8),a=n.n(c),o=(n(14),n(15),n(2)),s=n(3),u=0,f=1,d=2,h=0,b=1,j={CARRIER:0,BATTLESHIP:1,DESTROYER:2,SUBMARINE:3,PATROLBOAT:4},p={0:5,1:4,2:3,3:3,4:2},O=n(7),y={width:"100%",height:"100%"},v=function(e){var t=e.hasShip,n=e.shipAdjacent,i=e.pointer,l=e.placingShip,c=e.hit,a=e.miss,o=e.children,s=e.disabled,u=e.playerType,f="#ffffff";return t||c||a||(f="#ffffff"),t&&u!==b&&(f="#333"),a&&(f="#fff6b5"),c&&(f="#ffb5b5"),l&&(f="#39393a"),(s||n&&l)&&(f="#e8e8e8"),l&&t&&(f="#ffb5b5"),Object(r.jsx)("div",{style:Object(O.a)(Object(O.a)({},y),{},{color:"#000",backgroundColor:f,border:"1px solid gray",cursor:i?"pointer":"auto",display:"flex",alignItems:"center",justifyContent:"center"}),children:o})},x=l.a.memo(v),C=function(e,t,n){return n.find((function(n){var r=n.x,i=n.y;return 1===Math.abs(r-e)&&1===Math.abs(i-t)||0===Math.abs(r-e)&&1===Math.abs(i-t)||1===Math.abs(r-e)&&0===Math.abs(i-t)}))},g=function(e,t,n){return n.find((function(n){var r=n.x,i=n.y;return r===e&&t===i}))},m={width:"100%",height:"100%",display:"flex",flexWrap:"wrap"},w={width:"9%",height:"9%"},R=function(e){for(var t=e.ships,n=e.shots,i=void 0===n?[]:n,l=e.selectedShip,c=void 0===l?[]:l,a=e.stage,o=e.playerType,s=e.fireShot,u=function(e){var n=Math.floor(e/11),l=e%11,u=g(n,l,t),d=function(e,t,n){return n.find((function(n){var r=n.x,i=n.y;return r===e&&t===i}))}(n,l,i),j=g(n,l,c),p=C(n,l,t),O=function(e,t){return([["","A","B","C","D","E","F","G","H","I","J"],["1"],["2"],["3"],["4"],["5"],["6"],["7"],["8"],["9"],["10"]][e]||[])[t]||""}(n,l),y=!1,x=d||O||0===n||0===l||a!==f||o!==b?null:function(){s(n,l,h,!!u)};null!==x&&(y=!0);var m=(d||{}).hit;return Object(r.jsx)("div",{style:w,onClick:x,children:Object(r.jsx)(v,{hit:!0===m,miss:!1===m,pointer:y,hasShip:u,playerType:o,placingShip:j,shipAdjacent:p,stage:a,children:O})},e)},d=[],j=0;j<121;j+=1)d.push(u(j));return Object(r.jsx)("div",{style:m,children:d})};function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function S(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var I=i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.29289 9.70711C2.90237 9.31658 2.90237 8.68342 3.29289 8.29289L9.29289 2.29289C9.68342 1.90237 10.3166 1.90237 10.7071 2.29289L16.7071 8.29289C17.0976 8.68342 17.0976 9.31658 16.7071 9.70711C16.3166 10.0976 15.6834 10.0976 15.2929 9.70711L11 5.41421L11 17C11 17.5523 10.5523 18 10 18C9.44772 18 9 17.5523 9 17L9 5.41421L4.70711 9.70711C4.31658 10.0976 3.68342 10.0976 3.29289 9.70711Z",fill:"#4A5568"});function A(e,t){var n=e.title,r=e.titleId,l=S(e,["title","titleId"]);return i.createElement("svg",E({width:20,height:20,viewBox:"0 0 20 20",fill:"none",ref:t,"aria-labelledby":r},l),n?i.createElement("title",{id:r},n):null,I)}var L=i.forwardRef(A);n.p;function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function N(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var k=i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.7071 10.2929C17.0976 10.6834 17.0976 11.3166 16.7071 11.7071L10.7071 17.7071C10.3166 18.0976 9.68342 18.0976 9.29289 17.7071L3.29289 11.7071C2.90237 11.3166 2.90237 10.6834 3.29289 10.2929C3.68342 9.90237 4.31658 9.90237 4.70711 10.2929L9 14.5858L9 3C9 2.44772 9.44772 2 10 2C10.5523 2 11 2.44772 11 3L11 14.5858L15.2929 10.2929C15.6834 9.90237 16.3166 9.90237 16.7071 10.2929Z",fill:"#4A5568"});function M(e,t){var n=e.title,r=e.titleId,l=N(e,["title","titleId"]);return i.createElement("svg",P({width:20,height:20,viewBox:"0 0 20 20",fill:"none",ref:t,"aria-labelledby":r},l),n?i.createElement("title",{id:r},n):null,k)}var T=i.forwardRef(M);n.p;function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function H(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var V=i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.70711 16.7071C9.31658 17.0976 8.68342 17.0976 8.29289 16.7071L2.29289 10.7071C1.90237 10.3166 1.90237 9.68342 2.29289 9.29289L8.29289 3.29289C8.68342 2.90237 9.31658 2.90237 9.70711 3.29289C10.0976 3.68342 10.0976 4.31658 9.70711 4.70711L5.41421 9H17C17.5523 9 18 9.44772 18 10C18 10.5523 17.5523 11 17 11L5.41421 11L9.70711 15.2929C10.0976 15.6834 10.0976 16.3166 9.70711 16.7071Z",fill:"#4A5568"});function G(e,t){var n=e.title,r=e.titleId,l=H(e,["title","titleId"]);return i.createElement("svg",B({width:20,height:20,viewBox:"0 0 20 20",fill:"none",ref:t,"aria-labelledby":r},l),n?i.createElement("title",{id:r},n):null,V)}var Z=i.forwardRef(G);n.p;function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function z(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var F=i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.2929 3.29289C10.6834 2.90237 11.3166 2.90237 11.7071 3.29289L17.7071 9.29289C18.0976 9.68342 18.0976 10.3166 17.7071 10.7071L11.7071 16.7071C11.3166 17.0976 10.6834 17.0976 10.2929 16.7071C9.90237 16.3166 9.90237 15.6834 10.2929 15.2929L14.5858 11L3 11C2.44772 11 2 10.5523 2 10C2 9.44772 2.44772 9 3 9H14.5858L10.2929 4.70711C9.90237 4.31658 9.90237 3.68342 10.2929 3.29289Z",fill:"#4A5568"});function J(e,t){var n=e.title,r=e.titleId,l=z(e,["title","titleId"]);return i.createElement("svg",D({width:20,height:20,viewBox:"0 0 20 20",fill:"none",ref:t,"aria-labelledby":r},l),n?i.createElement("title",{id:r},n):null,F)}var U=i.forwardRef(J);n.p;function Y(){return(Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function W(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var q=i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4 2C4.55228 2 5 2.44772 5 3V5.10125C6.27009 3.80489 8.04052 3 10 3C13.0494 3 15.641 4.94932 16.6014 7.66675C16.7855 8.18747 16.5126 8.75879 15.9918 8.94284C15.4711 9.12689 14.8998 8.85396 14.7157 8.33325C14.0289 6.38991 12.1755 5 10 5C8.36507 5 6.91204 5.78502 5.99935 7H9C9.55228 7 10 7.44772 10 8C10 8.55228 9.55228 9 9 9H4C3.44772 9 3 8.55228 3 8V3C3 2.44772 3.44772 2 4 2ZM4.00817 11.0572C4.52888 10.8731 5.1002 11.146 5.28425 11.6668C5.97112 13.6101 7.82453 15 10 15C11.6349 15 13.088 14.215 14.0006 13L11 13C10.4477 13 10 12.5523 10 12C10 11.4477 10.4477 11 11 11H16C16.2652 11 16.5196 11.1054 16.7071 11.2929C16.8946 11.4804 17 11.7348 17 12V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V14.8987C13.7299 16.1951 11.9595 17 10 17C6.95059 17 4.35905 15.0507 3.39857 12.3332C3.21452 11.8125 3.48745 11.2412 4.00817 11.0572Z",fill:"#4A5568"});function K(e,t){var n=e.title,r=e.titleId,l=W(e,["title","titleId"]);return i.createElement("svg",Y({width:20,height:20,viewBox:"0 0 20 20",fill:"none",ref:t,"aria-labelledby":r},l),n?i.createElement("title",{id:r},n):null,q)}var Q=i.forwardRef(K);n.p;function X(){return(X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function $(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var _=i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.59 12.83L4.4 15c-.58.58-1.59 1-2.4 1H0v-2h2c.29 0 .8-.2 1-.41l2.17-2.18 1.42 1.42zM16 4V1l4 4-4 4V6h-2c-.29 0-.8.2-1 .41l-2.17 2.18L9.4 7.17 11.6 5c.58-.58 1.59-1 2.41-1h2zm0 10v-3l4 4-4 4v-3h-2c-.82 0-1.83-.42-2.41-1l-8.6-8.59C2.8 6.21 2.3 6 2 6H0V4h2c.82 0 1.83.42 2.41 1l8.6 8.59c.2.2.7.41.99.41h2z"});function ee(e,t){var n=e.title,r=e.titleId,l=$(e,["title","titleId"]);return i.createElement("svg",X({width:20,height:20,viewBox:"0 0 20 20",ref:t,"aria-labelledby":r},l),n?i.createElement("title",{id:r},n):null,_)}var te=i.forwardRef(ee),ne=(n.p,function(e){var t=re().filter((function(t){var n=t.x,r=t.y;return!e.find((function(e){var t=e.x,i=e.y;return n===t&&r===i}))}));return t[Math.floor(Math.random()*t.length)]}),re=function(){return Array.from(Array(100).keys()).map((function(e){return{x:Math.floor(e/10)+1,y:e%10+1}}))},ie=function(e,t,n,r,i){for(var l=[{x:e,y:t,type:r}],c=1;c<n;c++)if("x"===i){var a=l[c-1].x,o=void 0===a?e:a;l.push({x:o+1,y:t,type:r})}else{var s=(l[c-1]||{}).y,u=void 0===s?t:s;l.push({x:e,y:u+1,type:r})}return l},le=function(e,t){var n=e.find((function(e){return t.find((function(t){return e.x===t.x&&e.y===t.y}))})),r=e.find((function(e){var n=e.x,r=e.y;return C(n,r,t)})),i=e.find((function(e){var t=e.x,n=e.y;return t>10||t<1||n>10||n<1}));return!(n||r||i)},ce=function e(){var t=[],n=!1;return Object.keys(p).forEach((function(e){var r=function(e,t,n){for(var r,i=Object(o.a)(n),l=!1,c="x",a=[],s=[];!l;){if(!(r=ne(i)))return null;var u=r,f=u.x,d=u.y;if(f+(e-1)<=10)c="x";else{if(!(d+(e-1)<=10)){i.push(r);continue}c="y"}a=ie(f,d,e,t,c),s.push(a),le(a,i)?l=!0:i.push(r)}return a}(p[e],j[e],t);null===r?n=!0:t=[].concat(Object(o.a)(t),Object(o.a)(r))})),n&&(t=e()),t},ae=function(e){var t=[{type:j.CARRIER,x:5,y:3},{type:j.CARRIER,x:5,y:4},{type:j.CARRIER,x:5,y:5},{type:j.CARRIER,x:5,y:6},{type:j.CARRIER,x:5,y:7}],n=Object(i.useState)(u),l=Object(s.a)(n,2),c=l[0],a=l[1],O=Object(i.useState)(h),y=Object(s.a)(O,2),v=y[0],m=y[1],w=Object(i.useState)([]),E=Object(s.a)(w,2),S=E[0],I=E[1],A=Object(i.useState)([]),P=Object(s.a)(A,2),N=P[0],k=P[1],M=Object(i.useState)([]),B=Object(s.a)(M,2),H=B[0],V=B[1],G=Object(i.useState)([]),D=Object(s.a)(G,2),z=D[0],F=D[1],J=Object(i.useState)(t),Y=Object(s.a)(J,2),W=Y[0],q=Y[1],K=function(){q(t),I([]),V(ce()),a(u),m(h),F([]),k([])},X=function(e,t){if(W){var n=Object(o.a)(W).reduce((function(n,r){var i=r.type,l=r.x,c=r.y;return[].concat(Object(o.a)(n),[{type:i,x:l+e,y:c+t}])}),[]);n.find((function(e){var t=e.x,n=e.y;return t>10||t<1||n>10||n<1}))||q(n)}},$=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;if(null===r){var i=g(e,t,S);r=!!i}var l=Object(o.a)(N);n===b&&(l=Object(o.a)(z)),l=[].concat(Object(o.a)(l),[{x:e,y:t,hit:r}]),n===b?F(l):k(l)};Object(i.useEffect)((function(){c===f&&((N[N.length-1]||[]).hit||m(b))}),[N]);var _=function(e){return e.filter((function(e){return!0===e.hit})).length>=17},ee=function(){if(_(z))a(d);else{var e=function(){return ne(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[])}(z)||{},t=e.x,n=e.y;$(t,n,b)}},re=function(){return _(N)};Object(i.useEffect)((function(){c===f&&re()&&a(d)}),[N]),Object(i.useEffect)((function(){c===f&&((z[z.length-1]||[]).hit?ee():m(h))}),[z]),Object(i.useEffect)((function(){v===b&&c===f&&ee()}),[v]);var ie={width:"33%",height:"33%"};return c===u?Object(r.jsxs)("div",{className:"Container",children:[Object(r.jsx)("div",{style:{width:"500px",height:"500px"},children:Object(r.jsx)(R,{ships:S,selectedShip:W,stage:c},"STARTUPGRID")}),Object(r.jsx)("div",{style:{width:"135px",height:"135px"},children:Object(r.jsxs)("div",{className:"Button-Container",children:[Object(r.jsx)("div",{style:ie,onClick:function(){if(W&&!W.find((function(e){var t=e.x,n=e.y;return g(t,n,S)||C(t,n,S)}))){var e=Object(o.a)(S);I([].concat(Object(o.a)(e),Object(o.a)(W)));var t=function(e,t){var n=Object.values(j).find((function(n){return!e.find((function(e){return e.type===n}))&&!t.find((function(e){return e.type===n}))}));if(n){for(var r=p[n],i=3,l=[{type:n,x:5,y:i}],c=1;c<r;c++)i++,l.push({type:n,x:5,y:i});return l}}(S,W);t?q(t):q()}},className:"no-selecto-bro",children:Object(r.jsx)(x,{pointer:!0,disabled:!W,children:"Place"})}),Object(r.jsx)("div",{style:ie,onClick:function(){return X(-1,0)},className:"no-selecto-bro",children:Object(r.jsx)(x,{pointer:!0,disabled:!W,children:Object(r.jsx)(L,{})})}),Object(r.jsx)("div",{style:ie,onClick:K,className:"no-selecto-bro",children:Object(r.jsx)(x,{pointer:!0,children:"Reset"})}),Object(r.jsx)("div",{style:ie,onClick:function(){return X(0,-1)},className:"no-selecto-bro",children:Object(r.jsx)(x,{pointer:!0,disabled:!W,children:Object(r.jsx)(Z,{})})}),Object(r.jsx)("div",{style:ie,onClick:function(){if(W){var e=Object(o.a)(W).reduce((function(e,t){var n=t.type,r=t.x,i=t.y;return[].concat(Object(o.a)(e),[{type:n,x:i,y:r}])}),[]);q(e)}},className:"no-selecto-bro",children:Object(r.jsx)(x,{pointer:!0,disabled:!W,children:Object(r.jsx)(Q,{})})}),Object(r.jsx)("div",{style:ie,onClick:function(){return X(0,1)},className:"no-selecto-bro",children:Object(r.jsx)(x,{pointer:!0,disabled:!W,children:Object(r.jsx)(U,{})})}),Object(r.jsx)("div",{style:ie,onClick:function(){q(),I(ce())},className:"no-selecto-bro",children:Object(r.jsx)(x,{pointer:!0,children:Object(r.jsx)(te,{})})}),Object(r.jsx)("div",{style:ie,onClick:function(){return X(1,0)},className:"no-selecto-bro",children:Object(r.jsx)(x,{pointer:!0,disabled:!W,children:Object(r.jsx)(T,{})})}),Object(r.jsx)("div",{style:ie,onClick:function(){W||(V(ce()),a(f))},className:"no-selecto-bro",children:Object(r.jsx)(x,{pointer:!0,disabled:!!W,children:"Start"})})]})})]},"STARTUPCONTAINER"):c===f?Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"Container2",children:[Object(r.jsxs)("div",{style:{width:"500px",height:"500px"},children:[Object(r.jsx)("h3",{children:"Player"}),Object(r.jsx)(R,{shots:z,ships:S,selectedShip:W,stage:c,playerType:h})]}),Object(r.jsxs)("div",{style:{width:"500px",height:"500px"},children:[Object(r.jsx)("h3",{children:"Bot"}),Object(r.jsx)(R,{shots:N,ships:H,selectedShip:[],stage:c,playerType:b,fireShot:$})]})]},"PLAYCONTAINER")}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"Container3",children:Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:re()?"You Win!":"Game Over"}),Object(r.jsx)("div",{style:{width:"100%"},onClick:K,children:Object(r.jsx)(x,{pointer:!0,children:"Try Again"})})]})},"ENDGAMECONTAINER"),Object(r.jsxs)("div",{className:"Container2",children:[Object(r.jsxs)("div",{style:{width:"500px",height:"500px"},children:[Object(r.jsx)("h3",{children:"Player"}),Object(r.jsx)(R,{shots:z,ships:S,selectedShip:W,stage:c,playerType:h})]}),Object(r.jsxs)("div",{style:{width:"500px",height:"500px"},children:[Object(r.jsx)("h3",{children:"Bot"}),Object(r.jsx)(R,{shots:N,ships:H,selectedShip:[],stage:c,playerType:b,fireShot:$})]})]})]})};var oe=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("div",{className:"App-header",children:Object(r.jsx)("h2",{children:"react battleships"})}),Object(r.jsx)("div",{className:"Game",children:Object(r.jsx)(ae,{},"Game-Component")})]})};a.a.render(Object(r.jsx)(l.a.StrictMode,{children:Object(r.jsx)(oe,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.9cf22108.chunk.js.map