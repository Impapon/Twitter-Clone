(this["webpackJsonptwitter-clone"]=this["webpackJsonptwitter-clone"]||[]).push([[0],{67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},80:function(e,t,c){},82:function(e,t,c){},83:function(e,t,c){},84:function(e,t,c){},85:function(e,t,c){"use strict";c.r(t);var a=c(2),s=c.n(a),n=c(24),i=c.n(n),r=(c(67),c(68),c(23)),j=c(101),o=c(100),d=(c(69),c(60).a.initializeApp({apiKey:"AIzaSyADDMfq0ZGW7j50huNc03G1uMK-qjm42t8",authDomain:"twitter-clone-6101d.firebaseapp.com",projectId:"twitter-clone-6101d",storageBucket:"twitter-clone-6101d.appspot.com",messagingSenderId:"115325889262",appId:"1:115325889262:web:59f52c31799d69014ee1ff",measurementId:"G-H1494LMWKB"}).firestore()),l=c(5),b=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(""),i=Object(r.a)(n,2),b=i[0],x=i[1];return Object(l.jsx)("div",{className:"tweetBox",children:Object(l.jsxs)("form",{children:[Object(l.jsxs)("div",{className:"tweetBox-input",children:[Object(l.jsx)(j.a,{src:"https://robohash.org/0feae02ae510e29ddec6fb9f0e5c376b?set=set4&bgset=&size=400x400"}),Object(l.jsx)("input",{type:"text",onChange:function(e){return s(e.target.value)},value:c,placeholder:"What's going on"})]}),Object(l.jsx)("div",{className:"tweetBox-imgField",children:Object(l.jsx)("input",{type:"text",onChange:function(e){return x(e.target.value)},value:b,placeholder:"Enter image url"})}),Object(l.jsx)(o.a,{onClick:function(e){e.preventDefault(),d.collection("posts").add({displayName:"Mahadi Hasan",userName:"itsBaraq",verified:!0,text:c,image:b,avatar:"https://media.giphy.com/media/YWLGIVanrsSbKY6z49/giphy.gif"}),s(""),x("")},type:"submit",className:"tweetBtn",children:"Tweet"})]})})},x=c(47),u=c.n(x),O=c(48),p=c.n(O),m=c(49),h=c.n(m),f=c(50),v=c.n(f),g=(c(80),c(46)),N=c.n(g),I=function(e){var t=e.displayName,c=e.userName,s=e.verified,n=e.text,i=e.image,o=e.avatar,d=Object(a.useState)(0),b=Object(r.a)(d,2),x=b[0],O=b[1];return Object(l.jsxs)("div",{className:"post",children:[Object(l.jsx)("div",{className:"post__avatar",children:Object(l.jsx)(j.a,{src:o})}),Object(l.jsxs)("div",{className:"post__body",children:[Object(l.jsxs)("div",{className:"post__header",children:[Object(l.jsx)("div",{className:"post__headerText",children:Object(l.jsxs)("h3",{children:[t," ",Object(l.jsxs)("span",{className:"post__headerSpecial",children:[s&&Object(l.jsx)(N.a,{className:"post__badge"})," @",c]})]})}),Object(l.jsx)("div",{className:"post__headerDescription",children:Object(l.jsx)("p",{children:n})})]}),Object(l.jsx)("img",{src:i,alt:""}),Object(l.jsxs)("div",{className:"post__footer",children:[Object(l.jsx)(u.a,{}),Object(l.jsx)(p.a,{}),Object(l.jsxs)("div",{children:[Object(l.jsx)(h.a,{onClick:function(){O(x+1)}})," ",Object(l.jsxs)("span",{style:{fontSize:"27px",color:"red"},children:[x," "]})]}),Object(l.jsx)(v.a,{})]})]})]})},w=(c(82),function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1];return Object(a.useEffect)((function(){d.collection("posts").onSnapshot((function(e){return s(e.docs.map((function(e){return e.data()})))}))}),[]),Object(l.jsxs)("div",{className:"feed",children:[Object(l.jsx)("div",{className:"feedHeader",children:Object(l.jsx)("h2",{children:"Home"})}),Object(l.jsx)(b,{}),c.map((function(e){return Object(l.jsx)(I,{displayName:e.displayName,userName:e.userName,verified:e.verified,text:e.text,image:e.image,avatar:e.avatar})}))]})}),_=c(51),y=c.n(_),B=c(52),S=c.n(B),k=(c(83),function(e){var t=e.active,c=e.text,a=e.Icon;return Object(l.jsxs)("div",{className:"sideBarOption ".concat(t&&"sideBarOption--active"),children:[Object(l.jsx)(a,{}),c]})}),C=c(53),M=c.n(C),D=c(54),W=c.n(D),z=c(55),F=c.n(z),H=c(56),L=c.n(H),T=c(57),A=c.n(T),E=c(58),G=c.n(E),K=c(59),q=c.n(K),P=(c(84),function(){return Object(l.jsxs)("div",{className:"sideBar",children:[Object(l.jsx)(y.a,{className:"twitterIcon"}),Object(l.jsx)(k,{active:!0,Icon:S.a,text:"Home"}),Object(l.jsx)(k,{Icon:M.a,text:"Explore"}),Object(l.jsx)(k,{Icon:W.a,text:"Notification"}),Object(l.jsx)(k,{Icon:F.a,text:"Message"}),Object(l.jsx)(k,{Icon:L.a,text:"Bookmark"}),Object(l.jsx)(k,{Icon:A.a,text:"List"}),Object(l.jsx)(k,{Icon:G.a,text:"Profile"}),Object(l.jsx)(k,{Icon:q.a,text:"More"}),Object(l.jsx)(o.a,{variant:"outlined",fullWidth:!0,className:"tweetBtn",children:"Tweet"})]})}),J=function(){return Object(l.jsx)("div",{children:"Widgets"})};var Y=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(P,{}),Object(l.jsx)(w,{}),Object(l.jsx)(J,{})]})},V=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,102)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),n(e),i(e)}))};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(Y,{})}),document.getElementById("root")),V()}},[[85,1,2]]]);
//# sourceMappingURL=main.83e352e2.chunk.js.map