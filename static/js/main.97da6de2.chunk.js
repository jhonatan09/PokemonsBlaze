(this["webpackJsonpb2w-test"]=this["webpackJsonpb2w-test"]||[]).push([[0],{65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(30),s=n.n(a),i=n(35),o=n(4),u=n.n(o),l=n(11),j=n(10),d=n(13),b=n.n(d),p=n(31),O=n(32),m="https://pokeapi.co/api/v2";function h(){return b.a.create({baseURL:m})}var x=new(function(){function e(){Object(p.a)(this,e)}return Object(O.a)(e,[{key:"SearchPokemonsApi",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h().get("".concat(m,"/ability/blaze"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"SearchPokemons",value:function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.prev=1,e.next=4,h().get(t);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"SearchPokemonsInput",value:function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h().get("".concat(m,"/pokemon/").concat(t));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}]),e}()),f=n(0),v=c.a.createContext();function g(e){var t=Object(r.useState)([]),n=Object(j.a)(t,2),c=n[0],a=n[1],s=Object(r.useState)(0),o=Object(j.a)(s,2),d=o[0],b=o[1],p=Object(r.useState)([]),O=Object(j.a)(p,2),m=O[0],h=O[1],g=Object(r.useState)([]),k=Object(j.a)(g,2),C=k[0],S=k[1],N=Object(r.useState)(!1),P=Object(j.a)(N,2),y=P[0],w=P[1],B=Object(r.useState)(!1),A=Object(j.a)(B,2),z=A[0],D=A[1],T=Object(r.useState)(!1),F=Object(j.a)(T,2),I=F[0],_=F[1];Object(r.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.SearchPokemonsApi();case 2:t=e.sent,L(t.pokemon);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var L=function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map(function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.SearchPokemons(t.pokemon.url);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:n=e.sent,a(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=7;break}return e.next=3,x.SearchPokemonsInput(t);case 3:n=e.sent,h([n]),e.next=8;break;case 7:h([]);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=localStorage.getItem("@B2W:Order"),J=JSON.parse(E);Object(r.useEffect)((function(){null!=E&&S(J)}),[]);return Object(f.jsx)(v.Provider,{value:{data:c,HandleClick:M,setCartDetails:S,ClickAddToCart:function(e){S([].concat(Object(i.a)(C),[e])),localStorage.removeItem("@B2W:Order"),localStorage.setItem("@B2W:Order",JSON.stringify(C)),D((function(e){return e!=z}))},openModal:y,cartDetails:C,dataAdd:m,setTotalPrice:b,totalPrice:d,changeValue:z,setChangeValue:D,ToggleCartMob:function(){console.log("entrou"),w((function(e){return!y}))},OrderPlaced:function(){_((function(e){return!I})),w((function(e){return!y}))},CloseShop:I,setCloseShop:_},children:e.children})}var k=n.p+"static/media/pokemon-png-logo.927812cc.png",C=n(34),S=function(){var e=Object(r.useContext)(v),t=e.HandleClick,n=e.ToggleCartMob,c=Object(r.useState)(""),a=Object(j.a)(c,2),s=a[0],i=a[1];return Object(f.jsxs)("div",{className:"header",children:[Object(f.jsx)("div",{className:"logo",children:Object(f.jsx)("img",{src:k,alt:"Logo"})}),Object(f.jsxs)("div",{className:"content",children:[Object(f.jsx)("input",{type:"text",placeholder:"Search yours favorite pokemon",onChange:function(e){return i(e.target.value)}}),Object(f.jsx)("button",{onClick:function(){t(s)},children:"Search"}),Object(f.jsx)("div",{className:"icon-cart mob",onClick:function(){return n()},children:Object(f.jsx)(C.a,{})})]})]})},N=n(9),P=function(){var e=Object(r.useContext)(v),t=e.data,n=e.ClickAddToCart,c=e.dataAdd;return Object(f.jsx)("div",{className:"persons",children:0===c.length?t.map((function(e,t){var r=e.height+e.order;return e.prices=r,Object(f.jsxs)("div",{className:"card",children:[Object(f.jsxs)(N.b,{to:{pathname:"/PokemonsBlaze/Product",state:{items:e}},children:[Object(f.jsx)("img",{src:e.sprites.front_default,alt:e.name}),Object(f.jsx)("h3",{children:e.name}),Object(f.jsxs)("span",{children:["Price: R$",r.toLocaleString("pt-br",{minimumFractionDigits:2})]})]}),Object(f.jsx)("button",{onClick:function(){return n(e)},children:"Add to cart"})]},t)})):c.map((function(e,t){var r=(null===e||void 0===e?void 0:e.height)+(null===e||void 0===e?void 0:e.order);return Object(f.jsx)(f.Fragment,{children:null!=e?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("span",{className:"hidden",children:e.prices=r},e.id),Object(f.jsxs)("div",{className:"card",children:[Object(f.jsxs)(N.b,{to:{pathname:"/PokemonsBlaze/Product",state:{items:e}},children:[Object(f.jsx)("img",{src:e.sprites.front_default,alt:e.name}),Object(f.jsx)("h3",{children:e.name}),Object(f.jsxs)("span",{children:["Price: R$",r.toLocaleString("pt-br",{minimumFractionDigits:2})]})]}),Object(f.jsx)("button",{onClick:function(){return n(e)},children:"Add to cart"})]},t)]}):""})}))})},y=function(e){var t=e.name,n=e.valor,c=e.image,a=Object(r.useContext)(v),s=(a.totalPrice,a.setTotalPrice),i=a.changeValue;a.cartDetails;return Object(r.useEffect)((function(){s((function(e){return e+n}))}),[i]),Object(f.jsxs)("div",{className:"cart-body_details",children:[Object(f.jsx)("img",{src:c,alt:t}),Object(f.jsxs)("span",{children:["Name: ",t]}),Object(f.jsxs)("span",{children:["Name: ",n.toLocaleString("pt-br",{minimumFractionDigits:2})]})]})},w=function(){var e=Object(r.useContext)(v),t=e.openModal,n=e.cartDetails,c=e.totalPrice,a=e.OrderPlaced;return Object(f.jsx)("div",{className:"cart ".concat(t?"active":""),children:Object(f.jsxs)("div",{className:"cart-body",children:[Object(f.jsx)("h1",{className:"cart-body_title",children:"Carrinho"}),Object(f.jsx)("div",{className:"cart-body-items",children:0===n.length?Object(f.jsx)("span",{className:"empty",children:"Carrinho vazio"}):n.map((function(e){return Object(f.jsx)(y,{name:e.name,valor:e.prices,image:e.sprites.front_default})}))}),Object(f.jsxs)("span",{className:"price-total",children:["Pre\xe7o total: ",c]}),Object(f.jsx)("button",{className:"cart-body_btn",onClick:function(){return a()},children:"Finalizar Compra"})]})})},B=function(){Object(r.useContext)(v).openModal;return Object(f.jsxs)("div",{className:"home",children:[Object(f.jsx)(P,{}),Object(f.jsx)(w,{})]})},A=n(2),z=function(){var e=Object(A.g)();console.log(e.state.items);var t=Object(r.useContext)(v).ClickAddToCart;return Object(f.jsxs)("div",{className:"Product",children:[Object(f.jsx)(N.b,{to:"/PokemonsBlaze",children:"Voltar para home"}),Object(f.jsxs)("div",{className:"Product-body",children:[Object(f.jsxs)("div",{className:"left-side",children:[Object(f.jsx)("h1",{children:e.state.items.name}),Object(f.jsx)("div",{className:"image",children:Object(f.jsx)("img",{src:e.state.items.sprites.front_default,alt:e.state.items.name})})]}),Object(f.jsxs)("div",{className:"right-side",children:[Object(f.jsxs)("span",{className:"price",children:["Price: R$ ",e.state.items.prices.toLocaleString("pt-br",{minimumFractionDigits:2})]}),Object(f.jsx)("button",{className:"product-btn-add-cart",onClick:function(){return t(e.state.items)},children:"add to cart"})]})]}),Object(f.jsx)(w,{})]})},D=function(){var e=Object(A.f)(),t=Object(r.useContext)(v).setCloseShop;return setTimeout((function(){localStorage.removeItem("@B2W:Order"),e.go(0),t(!1)}),3e3),Object(f.jsx)("div",{className:"orderplaced",children:Object(f.jsxs)("div",{className:"orderplaced-content",children:[Object(f.jsx)("h1",{children:"Obrigado pela compra!"}),Object(f.jsx)("span",{children:"Seu produto foi enviado para o financeirio."})]})})},T=function(){var e=Object(r.useContext)(v).CloseShop;return Object(f.jsxs)("div",{children:[Object(f.jsx)(S,{}),e?Object(f.jsx)(D,{}):Object(f.jsxs)(A.c,{children:[Object(f.jsx)(A.a,{exact:!0,path:"/PokemonsBlaze",children:Object(f.jsx)(B,{})}),Object(f.jsx)(A.a,{path:"/PokemonsBlaze/Product",children:Object(f.jsx)(z,{})})]})]})};n(65);var F=function(){return Object(f.jsx)(g,{children:Object(f.jsx)(N.a,{children:Object(f.jsx)(T,{})})})};s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(F,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.97da6de2.chunk.js.map