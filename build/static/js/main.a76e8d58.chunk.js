(this["webpackJsonpcfg-front"]=this["webpackJsonpcfg-front"]||[]).push([[0],{139:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(10),r=a.n(c),o=a(59),s=a(11),l=a(51),d=a(18),j=a(178),u=a(75),b=a(52),p=a.p+"static/media/csgocard.7e0fa2ea.png",h=a.p+"static/media/csgocard2.1271a8ee.jpg",x=a(2),m=Object(j.a)((function(e){var t;return{root:{display:"flex",flexWrap:"wrap",minWidth:300,width:"145%"},image:(t={position:"relative",height:200},Object(d.a)(t,e.breakpoints.down("xs"),{width:"100% !important",height:100}),Object(d.a)(t,"&:hover, &$focusVisible",{zIndex:1,"& $imageBackdrop":{opacity:.15},"& $imageMarked":{opacity:0},"& $imageTitle":{border:"4px solid currentColor"}}),t),focusVisible:{},imageButton:{position:"absolute",left:0,right:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",color:e.palette.common.white},imageSrc:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundSize:"cover",backgroundPosition:"center 40%"},imageBackdrop:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:e.palette.common.black,opacity:.4,transition:e.transitions.create("opacity")},imageTitle:{position:"relative",padding:"".concat(e.spacing(2),"px ").concat(e.spacing(4),"px ").concat(e.spacing(1)+6,"px")},imageMarked:{height:3,width:18,backgroundColor:e.palette.common.white,position:"absolute",bottom:-2,left:"calc(50% - 9px)",transition:e.transitions.create("opacity")}}}));function O(){var e=Object(s.e)(),t=function(){e.push("/jogadores")},a=function(){e.push("/cadastro")},n=[{url:"".concat(p),title:"Cfgs",width:"69%"}],i=[{url:"".concat(h),title:"Cadastre a sua CFG!",width:"69%"}],c=m();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:c.root,children:n.map((function(e){return Object(x.jsxs)(u.a,{onClick:t,focusRipple:!0,className:c.image,focusVisibleClassName:c.focusVisible,style:{width:e.width},children:[Object(x.jsx)("span",{className:c.imageSrc,style:{backgroundImage:"url(".concat(e.url,")")}}),Object(x.jsx)("span",{className:c.imageBackdrop}),Object(x.jsx)("span",{className:c.imageButton,children:Object(x.jsxs)(b.a,{component:"span",variant:"subtitle1",color:"inherit",className:c.imageTitle,children:[e.title,Object(x.jsx)("span",{className:c.imageMarked})]})})]},e.title)}))}),Object(x.jsx)("div",{className:c.root,children:i.map((function(e){return Object(x.jsxs)(u.a,{onClick:a,focusRipple:!0,className:c.image,focusVisibleClassName:c.focusVisible,style:{width:e.width},children:[Object(x.jsx)("span",{className:c.imageSrc,style:{backgroundImage:"url(".concat(e.url,")")}}),Object(x.jsx)("span",{className:c.imageBackdrop}),Object(x.jsx)("span",{className:c.imageButton,children:Object(x.jsxs)(b.a,{component:"span",variant:"subtitle1",color:"inherit",className:c.imageTitle,children:[e.title,Object(x.jsx)("span",{className:c.imageMarked})]})})]},e.title)}))})]})}var g,f=a(182),v=a(72),y=a.n(v),w=a(89),C=a(13),k=a(90),S=a(91),N=a.n(S),B=a(69),P="https://cfgpanela-api.herokuapp.com",D="".concat(P,"/jogador"),W="".concat(P,"/mapa"),F="".concat(P,"/funcao"),I="".concat(P,"/resolucao"),M=a(45),T=a.n(M),R=function(e){var t=e.filterText,a=e.onFilter;e.onClear;return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(f.a,{style:{marginTop:"-50px"},item:!0,xs:12,md:8,lg:12,children:Object(x.jsx)(V,{style:{width:"100%"},id:"search",placeholder:"buscar",type:"text",value:t,onChange:a})})})},H=[{name:"Nickname",selector:"nickname",sortable:!0},{name:"Sensi",selector:"sensibilidade",sortable:!0},{name:"DPI",selector:"dpi",sortable:!0},{name:"Fun\xe7\xe3o",selector:"funcaos.funcao",sortable:!0},{name:"Mapa",selector:"mapas.mapa",sortable:!0},{name:"Resolu\xe7\xe3o",selector:"resolucaos.resolucao",sortable:!0}],V=B.default.input(g||(g=Object(k.a)(["\n  height: 32px;\n  width: 200px;\n  border-radius: 3px;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border: 1px solid #e5e5e5;\n  padding: 0 32px 0 16px;\n  &:hover {\n    cursor: pointer;\n  }\n"])));function z(){var e=Object(n.useState)([]),t=Object(C.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)(""),r=Object(C.a)(c,2),o=r[0],s=r[1],l=Object(n.useState)(!1),d=Object(C.a)(l,2),j=d[0],u=d[1],b=a.filter((function(e){return e.nome.toLowerCase().includes(o.toLowerCase())})),p=Object(n.useMemo)((function(){return Object(x.jsx)(R,{onFilter:function(e){return s(e.target.value)},onClear:function(){o&&(u(!j),s(""))},filterText:o})}),[o,j]);return Object(n.useEffect)((function(){Object(w.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get(D);case 2:t=e.sent,i(t.data),console.log(a);case 5:case"end":return e.stop()}}),e)})))()}),[a]),Object(x.jsx)(N.a,{style:{backgroundColor:"#3f51b5"},columns:H,data:b,pagination:!0,paginationResetDefaultPage:j,subHeader:!0,subHeaderComponent:p,persistTableHead:!0})}var E=a(183);function _(){return Object(x.jsxs)(f.a,{container:!0,spacing:1,children:[Object(x.jsx)(f.a,{item:!0,xs:12,md:12,lg:12,style:{display:"block"},children:Object(x.jsx)(O,{})}),Object(x.jsxs)(f.a,{item:!0,xs:12,md:12,lg:12,children:[Object(x.jsx)(E.a,{style:{backgroundColor:"#3f51b5"},children:Object(x.jsx)(b.a,{variant:"h6",children:"Cfgs"})}),Object(x.jsx)("div",{style:{border:"1px solid #3f51b5"},children:Object(x.jsx)(z,{})})]})]})}var A=a(197),G=a(199),L=a(187);var $=function(e){var t=Object(n.useState)(null),a=Object(C.a)(t,2),i=a[0],c=a[1],r=Object(n.useState)(!1),o=Object(C.a)(r,2),s=o[0],l=o[1],d=Object(n.useState)(null),j=Object(C.a)(d,2),u=j[0],b=j[1];return Object(n.useEffect)((function(){l(!0),T.a.get(e).then((function(e){c(e.data)})).catch((function(e){b(e)})).finally((function(){l(!1)}))}),[e]),{data:i,loading:s,error:u}},J=function(){var e,t=Object(n.useState)(""),a=Object(C.a)(t,2),i=a[0],c=a[1],r=Object(n.useState)(""),o=Object(C.a)(r,2),j=o[0],u=o[1],p=Object(n.useState)(""),h=Object(C.a)(p,2),m=h[0],O=h[1],g=Object(n.useState)(""),v=Object(C.a)(g,2),y=v[0],w=v[1],k=Object(n.useState)(""),S=Object(C.a)(k,2),N=S[0],B=S[1],P=Object(n.useState)(0),M=Object(C.a)(P,2),R=M[0],H=M[1],V=Object(n.useState)(0),z=Object(C.a)(V,2),_=z[0],J=z[1],X=Object(n.useState)(""),q=Object(C.a)(X,2),K=q[0],Q=q[1],U=$(W).data,Y=$(F).data,Z=$(I).data,ee=Object(s.e)();return Object(x.jsx)("div",{children:Object(x.jsx)(f.a,{container:!0,spacing:3,children:Object(x.jsxs)(f.a,{item:!0,xs:12,md:8,lg:12,children:[Object(x.jsx)(E.a,{style:{backgroundColor:"#3f51b5"},children:Object(x.jsx)(b.a,{variant:"h6",children:"Cfgs"})}),Object(x.jsx)("div",{style:{padding:"15px",border:"1px solid #3f51b5"},children:Object(x.jsxs)("form",{children:[Object(x.jsxs)(f.a,{container:!0,spacing:1,children:[Object(x.jsx)(f.a,{item:!0,xs:12,md:6,lg:6,children:Object(x.jsx)(G.a,(e={style:{backgroundColor:"#fff",color:"white"},color:"white",fullWidth:!0},Object(d.a)(e,"color","primary"),Object(d.a)(e,"id","input-with-icon-grid"),Object(d.a)(e,"label","Nome"),Object(d.a)(e,"variant","outlined"),Object(d.a)(e,"value",i),Object(d.a)(e,"onChange",(function(e){return c(e.target.value)})),e))}),Object(x.jsx)(f.a,{item:!0,xs:12,md:6,lg:6,children:Object(x.jsx)(G.a,{fullWidth:!0,color:"primary",id:"input-with-icon-grid",label:"Nickname",variant:"outlined",value:j,onChange:function(e){return u(e.target.value)}})})]}),Object(x.jsxs)(f.a,{container:!0,spacing:1,children:[Object(x.jsx)(f.a,{item:!0,xs:12,md:6,lg:4,children:Object(x.jsx)(G.a,{fullWidth:!0,color:"primary",id:"input-with-icon-grid",label:"DPI",variant:"outlined",value:y,onChange:function(e){return w(e.target.value)}})}),Object(x.jsx)(f.a,{item:!0,xs:12,md:6,lg:4,children:Object(x.jsx)(G.a,{color:"primary",fullWidth:!0,id:"input-with-icon-grid",label:"Sensibilidade",variant:"outlined",value:m,onChange:function(e){return O(e.target.value)}})}),Object(x.jsx)(f.a,{item:!0,xs:12,md:6,lg:4,children:Object(x.jsx)(G.a,{fullWidth:!0,id:"input-with-icon-grid",label:"Mira",color:"primary",variant:"outlined",value:N,onChange:function(e){return B(e.target.value)}})})]}),Object(x.jsxs)(f.a,{container:!0,spacing:1,children:[Object(x.jsx)(f.a,{item:!0,xs:12,md:6,lg:4,children:Object(x.jsxs)(A.a,{native:!0,color:"primary",fullWidth:!0,variant:"outlined",value:_,onChange:function(e){return J(e.target.value)},inputProps:{id:"outlined-age-native-simple"},children:[Object(x.jsx)("option",{value:null,children:"Mapa Favorito"}),null===U||void 0===U?void 0:U.map((function(e){return Object(x.jsx)("option",{value:e.id,children:e.mapa},e.id)}))]})}),Object(x.jsx)(f.a,{item:!0,xs:12,md:6,lg:4,children:Object(x.jsxs)(A.a,{native:!0,color:"primary",fullWidth:!0,variant:"outlined",value:R,onChange:function(e){return H(e.target.value)},inputProps:{id:"funcao_id"},children:[Object(x.jsx)("option",{value:null,children:"Fun\xe7\xe3o"}),null===Y||void 0===Y?void 0:Y.map((function(e){return Object(x.jsx)("option",{value:e.id,children:e.funcao},e.id)}))]})}),Object(x.jsx)(f.a,{item:!0,xs:12,md:6,lg:4,children:Object(x.jsxs)(A.a,{native:!0,fullWidth:!0,color:"primary",placeholder:"A",variant:"outlined",value:K,onChange:function(e){return Q(e.target.value)},inputProps:{id:"resolucao_id"},children:[Object(x.jsx)("option",{value:null,children:"Resolu\xe7\xe3o"}),null===Z||void 0===Z?void 0:Z.map((function(e){return Object(x.jsx)("option",{value:e.id,children:e.resolucao},e.id)}))]})}),Object(x.jsx)(f.a,{style:{display:"flex",justifyContent:"flex-end"},item:!0,xs:12,md:6,lg:12,children:Object(x.jsx)(L.a,{fullWidth:!0,size:"large",variant:"contained",color:"primary",onClick:function(e){e.preventDefault(),T.a.post(D,{nome:i,nickname:j,sensibilidade:m,dpi:y,mira:N,funcao_id:R,mapa_id:_,resolucao_id:K}).catch((function(e){console.log(e),l.b.error("Erro! Player n\xe3o adicionado!",{autoClose:2e3})})),l.b.success("Player adicionado com sucesso!",{autoClose:2e3}),ee.push("/jogadores")},children:"Cadastrar"})})]})]})})]})})})},X=a(141);function q(){return Object(x.jsxs)(X.a,{style:{border:"1px solid #3f51b5"},children:[Object(x.jsx)(E.a,{style:{backgroundColor:"#3f51b5"},children:Object(x.jsx)(b.a,{variant:"h6",children:"Cfgs"})}),Object(x.jsx)(z,{})]})}var K=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)(o.a,{children:[Object(x.jsx)(s.a,{path:"/",exact:!0,component:_}),Object(x.jsx)(s.a,{path:"/cadastro",component:J}),Object(x.jsx)(s.a,{path:"/jogadores",exact:!0,component:q}),Object(x.jsx)(l.a,{autoClose:3e3}),";"]})})},Q=a(95),U=a(4),Y=a(192),Z=a(200),ee=a(193),te=a(186),ae=a(195),ne=a(194),ie=a(196),ce=a(97),re=a.n(ce),oe=a(98),se=a.n(oe),le=a(189),de=a(190),je=a(191),ue=a(73),be=a.n(ue),pe=a(96),he=a.n(pe),xe=a(188),me=Object(x.jsxs)("div",{children:[Object(x.jsx)(xe.a,{href:"/",style:{textDecoration:"none",color:"#fff"},children:Object(x.jsxs)(le.a,{button:!0,children:[Object(x.jsx)(de.a,{style:{textDecoration:"none",color:"#fff"},children:Object(x.jsx)(be.a,{})}),Object(x.jsx)(je.a,{primary:"Dashboard"})]})}),Object(x.jsx)(xe.a,{href:"/cadastro",style:{textDecoration:"none",color:"#fff"},children:Object(x.jsxs)(le.a,{button:!0,children:[Object(x.jsx)(de.a,{style:{textDecoration:"none",color:"#fff"},children:Object(x.jsx)(be.a,{})}),Object(x.jsx)(je.a,{primary:"Cadastro"})]})}),Object(x.jsx)(xe.a,{href:"/jogadores",style:{textDecoration:"none",color:"#fff"},children:Object(x.jsxs)(le.a,{button:!0,children:[Object(x.jsx)(de.a,{style:{textDecoration:"none",color:"#fff"},children:Object(x.jsx)(he.a,{})}),Object(x.jsx)(je.a,{primary:"Jogadores"})]})})]}),Oe=Object(j.a)((function(e){return{root:{display:"flex"},toolbar:{color:"#fff",paddingRight:24},toolbarIcon:Object(Q.a)({backgroundColor:"#3f51b5",display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{backgroundColor:"#2D3047",color:"white",position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(d.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}));function ge(e){var t=e.children,a=Oe(),i=Object(n.useState)(!0),c=Object(C.a)(i,2),r=c[0],o=c[1];return Object(x.jsxs)("div",{className:a.root,children:[Object(x.jsx)(Y.a,{}),Object(x.jsx)(ee.a,{position:"absolute",className:Object(U.a)(a.appBar,r&&a.appBarShift),children:Object(x.jsxs)(E.a,{className:a.toolbar,children:[Object(x.jsx)(ne.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){o(!0)},className:Object(U.a)(a.menuButton,r&&a.menuButtonHidden),children:Object(x.jsx)(re.a,{})}),Object(x.jsx)(b.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:a.title,children:"CFG PANELA"})]})}),Object(x.jsxs)(Z.a,{variant:"permanent",classes:{paper:Object(U.a)(a.drawerPaper,!r&&a.drawerPaperClose)},open:r,children:[Object(x.jsx)("div",{className:a.toolbarIcon,children:Object(x.jsx)(ne.a,{style:{backgroundColor:"#F3F3F3"},onClick:function(){o(!1)},children:Object(x.jsx)(se.a,{})})}),Object(x.jsx)(ae.a,{}),Object(x.jsx)(te.a,{children:me}),Object(x.jsx)(ae.a,{})]}),Object(x.jsxs)("main",{className:a.content,style:{backgroundColor:""},children:[Object(x.jsx)("div",{className:a.appBarSpacer}),Object(x.jsx)(ie.a,{maxWidth:"xl",className:a.container,children:t})]})]})}a(138);r.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(ge,{children:Object(x.jsx)(K,{})})}),document.getElementById("root"))}},[[139,1,2]]]);
//# sourceMappingURL=main.a76e8d58.chunk.js.map