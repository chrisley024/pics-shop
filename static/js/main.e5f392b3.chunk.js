(this["webpackJsonppics-shop"]=this["webpackJsonppics-shop"]||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(12),a=n.n(i),s=(n(27),n(28),n(2)),o=n(14),u=(n(29),n(9)),j=n(22),l=n(19),b=n(7),d=n(1),m=r.a.createContext();function O(e){var t=e.children,n=Object(c.useState)([]),r=Object(b.a)(n,2),i=r[0],a=r[1],s=Object(c.useState)([]),o=Object(b.a)(s,2),u=o[0],O=o[1];return Object(c.useEffect)((function(){fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]),Object(d.jsx)(m.Provider,{value:{allPhotos:i,toggleFavorite:function(e){var t=i.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{isFavorite:!t.isFavorite}):t}));a(t)},cartItems:u,addToCart:function(e){O((function(t){return[].concat(Object(j.a)(t),[e])}))},removeFromCart:function(e){O((function(t){return t.filter((function(t){return t.id!==e}))}))},emptyCart:function(){O([])}},children:t})}var f=function(e){var t=Object(c.useContext)(m).cartItems.length>0?"ri-shopping-cart-fill":"ri-shopping-cart-line";return Object(d.jsx)("div",{children:Object(d.jsxs)("nav",{className:"navbar navbar-dark bg-dark",children:[Object(d.jsx)(u.b,{className:"navbar-brand mb-0 h1",to:"/",children:"Pics Shop"}),Object(d.jsx)(u.b,{className:"navbar-brand mb-0 h1",to:"/cart",children:Object(d.jsx)("i",{className:"".concat(t," ri-fw ri-2x")})})]})})};var h=function(){var e=Object(c.useState)(!1),t=Object(b.a)(e,2),n=t[0],r=t[1],i=Object(c.useRef)(null);function a(){r(!0)}function s(){r(!1)}return Object(c.useEffect)((function(){var e=i.current;return e.addEventListener("mouseenter",a),e.addEventListener("mouseleave",s),function(){e.removeEventListener("mouseenter",a),e.removeEventListener("mouseleave",s)}}),[]),[n,i]};var v=function(e){var t=e.item,n=h(),r=Object(b.a)(n,2),i=r[0],a=r[1],s=Object(c.useContext)(m).removeFromCart,o=i?"ri-delete-bin-fill":"ri-delete-bin-line";return Object(d.jsxs)("div",{className:"cart-item",children:[Object(d.jsx)("i",{className:o,onClick:function(){return s(t.id)},ref:a}),Object(d.jsx)("img",{src:t.url,width:"130px"}),Object(d.jsx)("p",{children:"$5.99"})]})};var x=function(){var e=Object(c.useState)("Place Order"),t=Object(b.a)(e,2),n=t[0],r=t[1],i=Object(c.useContext)(m),a=i.cartItems,s=i.emptyCart,u=(5.99*a.length).toLocaleString("de-DE",{style:"currency",currency:"EUR"}),j=a.map((function(e){return Object(d.jsx)(v,{item:e},e.id)}));return Object(d.jsxs)("main",{className:"cart-page",children:[Object(d.jsx)("h1",{children:"Check out"}),j,Object(d.jsxs)("p",{className:"total-cost",children:["Total: ",u]}),a.length>0?Object(d.jsx)("div",{className:"order-button",children:Object(d.jsx)("button",{onClick:function(){r("Ordering..."),setTimeout((function(){o.b.success("Your order is placed and will be delivered asap!"),r("Place Order"),s()}),3e3)},children:n})}):Object(d.jsx)("p",{children:"You have no items in your cart."})]})};var p=function(e){var t=e.className,n=e.img,r=h(),i=Object(b.a)(r,2),a=i[0],s=i[1],o=Object(c.useContext)(m),u=o.toggleFavorite,j=o.addToCart,l=o.cartItems,O=o.removeFromCart;return Object(d.jsxs)("div",{className:"".concat(t," image-container"),ref:s,children:[Object(d.jsx)("img",{src:n.url,className:"image-grid"}),n.isFavorite?Object(d.jsx)("i",{className:"ri-heart-fill favorite",onClick:function(){return u(n.id)}}):a?Object(d.jsx)("i",{className:"ri-heart-line favorite",onClick:function(){return u(n.id)}}):void 0,l.some((function(e){return e.id===n.id}))?Object(d.jsx)("i",{className:"ri-shopping-cart-fill cart",onClick:function(){return O(n.id)}}):a?Object(d.jsx)("i",{className:"ri-add-circle-line cart",onClick:function(){return j(n)}}):void 0]})};function g(e){return e%5===0?"big":e%6===0?"wide":void 0}var C=function(){var e=Object(c.useContext)(m).allPhotos.map((function(e,t){return Object(d.jsx)(p,{img:e,className:g(t)},e.id)}));return Object(d.jsx)("main",{className:"photos",children:e})};var N=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("main",{className:"container",children:[Object(d.jsx)(f,{}),Object(d.jsx)(o.a,{}),Object(d.jsxs)(s.c,{children:[Object(d.jsx)(s.a,{exact:!0,path:"/",children:Object(d.jsx)(C,{})}),Object(d.jsx)(s.a,{path:"/cart",children:Object(d.jsx)(x,{})})]})]})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))};n(36),n(37);a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(O,{children:Object(d.jsx)(u.a,{children:Object(d.jsx)(N,{})})})}),document.getElementById("root")),F()}},[[38,1,2]]]);
//# sourceMappingURL=main.e5f392b3.chunk.js.map