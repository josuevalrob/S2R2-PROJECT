(this["webpackJsonpS2R2-PROJECT"]=this["webpackJsonpS2R2-PROJECT"]||[]).push([[0],{148:function(e,t,a){e.exports=a(189)},177:function(e,t,a){},189:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),l=a.n(o),c=a(7),i=a(13),s=a(11),u=a(251),m=a(247),d=a(246),p=a(274),f=a(250),h=a(278),g=a(254),E=a(253),v=a(76),b=a.n(v),y=a(41),k=a(244),w=a(68),O=Object(w.a)((function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{marginTop:e.spacing(2),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),j=a(38),C=r.a.forwardRef((function(e,t){return r.a.createElement(j.b,Object.assign({innerRef:t},e))})),x=a(116),S=a.n(x),N=a(46),A=a(30),R=a(74),I=a(75),B=a(83),T=r.a.createContext(),W=function(e){function t(){var e,a;Object(N.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(R.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(r)))).state={user:JSON.parse(localStorage.getItem("current-user")||"{}")},a.handleUserChange=function(e){a.setState({user:e}),e?localStorage.setItem("current-user",JSON.stringify(e)):localStorage.removeItem("current-user")},a.isAuthenticated=function(){return!!(a.state.user&&a.state.user.data&&a.state.user.data.email)},a}return Object(B.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){return r.a.createElement(T.Provider,{value:{user:this.state.user,onUserChange:this.handleUserChange,isAuthenticated:this.isAuthenticated}},this.props.children)}}]),t}(n.Component),D=function(e){return function(t){return r.a.createElement(T.Consumer,null,(function(a){return r.a.createElement(e,Object.assign({},a,t))}))}},P=S.a.create({baseURL:"http://localhost:3001",withCredentials:!0,dataType:"jsonp"});P.interceptors.response.use((function(e){return e}),(function(e){if(403!==e.response.status&&401!==e.response.status)return Promise.reject(e);localStorage.removeItem("current-user"),window.location.assign("/sign-in")}));var U=P,F=function(e){return U.post("/signup",e)},q=function(e){return U.post("/signin",e)},_=a(50),L=a(252);var J=D((function(e){var t=O(),a=r.a.useState({email:"",password:""}),n=Object(s.a)(a,2),o=n[0],l=n[1],v=r.a.useState(!1),w=Object(s.a)(v,2),j=w[0],C=w[1],x=function(e){return function(t){return l(Object(i.a)({},o,Object(c.a)({},e,t.target.value)))}};return r.a.createElement(k.a,{component:"main",maxWidth:"xs"},r.a.createElement(d.a,null),r.a.createElement("div",{className:t.paper},r.a.createElement(m.a,{className:t.avatar},r.a.createElement(b.a,null)),r.a.createElement(y.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:t.form,onSubmit:function(t){t.preventDefault(),C(!0),q(o).then((function(t){C(!1),e.onUserChange(t)}),(function(e){var t=e.message,a=e.errors;console.error(t,a),C(!1)}))}},r.a.createElement(p.a,{onChange:x("email"),value:o.email||"",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"off",autoFocus:!0,type:"email"}),r.a.createElement(p.a,{onChange:x("password"),value:o.password||"",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"password",label:"Password",name:"password",autoComplete:"off",type:"password"}),r.a.createElement(f.a,{control:r.a.createElement(h.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(u.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit},j?r.a.createElement(L.a,{className:t.progress,color:"secondary"}):"Sign In"),r.a.createElement(E.a,{container:!0},r.a.createElement(E.a,{item:!0,xs:!0},r.a.createElement(g.a,{href:"#",variant:"body2"},"Forgot password?")),r.a.createElement(E.a,{item:!0})))))})),H=a(279),z=a(255),G=a(195);var V=D((function(e){var t=O(),a=r.a.useState(!1),n=Object(s.a)(a,2),o=n[0],l=n[1],h=r.a.useState({email:"",password:"",name:"",lastName:"",rol:"student"}),v=Object(s.a)(h,2),w=v[0],j=v[1],x=function(e){return function(t){return j(Object(i.a)({},w,Object(c.a)({},e,t.target.value)))}};return o?r.a.createElement(_.a,{to:"/"}):r.a.createElement(k.a,{component:"main",maxWidth:"xs"},r.a.createElement(d.a,null),r.a.createElement("div",{className:t.paper},r.a.createElement(m.a,{className:t.avatar},r.a.createElement(b.a,null)),r.a.createElement(y.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement("form",{className:t.form,onSubmit:function(t){t.preventDefault(),F(w).then((function(t){e.onUserChange(t),l(!0)}),(function(e){var t=e.message,a=e.errors;console.error(t,a)}))},autoComplete:"off"},r.a.createElement(E.a,{container:!0,spacing:2},r.a.createElement(E.a,{item:!0,xs:12,sm:6},r.a.createElement(p.a,{autoComplete:"off",name:"name",onChange:x("name"),value:w.name||"",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0})),r.a.createElement(E.a,{item:!0,xs:12,sm:6},r.a.createElement(p.a,{onChange:x("lastName"),value:w.lastName||"",variant:"outlined",fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"off"})),r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(p.a,{onChange:x("email"),value:w.email||"",variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"none"})),r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(p.a,{onChange:x("password"),value:w.password||"",variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"password",type:"password",id:"password",autoComplete:"none"})),r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(G.a,{row:!0},r.a.createElement(z.a,{row:!0,name:w.rol,value:w.rol,onChange:x("rol")},r.a.createElement(f.a,{value:"teacher",control:r.a.createElement(H.a,null),label:"Teacher"}),r.a.createElement(f.a,{value:"student",control:r.a.createElement(H.a,null),label:"Student"}))))),r.a.createElement(u.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit},"Sign Up"),r.a.createElement(E.a,{container:!0},r.a.createElement(E.a,{item:!0,xs:!0},r.a.createElement(g.a,{href:"#",variant:"body2",color:"secondary"},"Register with google")),r.a.createElement(E.a,{item:!0},r.a.createElement(g.a,{to:"/sign-in",component:C,variant:"body2"},"Already have an account? Sign In"))))))})),Z=a(117),M=a.n(Z),Y=a(118),$=a.n(Y),K=Object(w.a)((function(e){return{button:{margin:e.spacing(1)},leftIcon:{marginRight:e.spacing(1)},rightIcon:{marginLeft:e.spacing(1)},iconSmall:{fontSize:20}}}));function Q(){var e=K();return r.a.createElement("div",null,r.a.createElement(u.a,{to:"/new-record",component:C,variant:"contained",color:"primary",className:e.button},"New Record",r.a.createElement(M.a,{className:e.rightIcon})),r.a.createElement(u.a,{to:"/recordings",component:C,variant:"contained",color:"default",className:e.button},"Check Recordins",r.a.createElement($.a,{className:e.leftIcon})))}var X=Object(w.a)((function(e){return{root:{display:"flex",flexDirection:"column",minHeight:"100vh"},main:{marginTop:e.spacing(8),marginBottom:e.spacing(2)},footer:{padding:e.spacing(2),marginTop:"auto",backgroundColor:"white"}}}));var ee=D((function(e){var t=e.user,a=e.onUserChange,n=t.data;return r.a.createElement(y.a,{variant:"body2",color:"textSecondary"},"Hello ".concat(n.name,", here you can "),r.a.createElement(g.a,{color:"inherit",to:"/profile/".concat(n.id),component:C},"edit your profile")," or simply  ",r.a.createElement(g.a,{color:"inherit",to:"/",onClick:function(){return a()},component:C},"logout")," from the site")}));function te(){var e=X();return r.a.createElement("div",{className:e.root},r.a.createElement(d.a,null),r.a.createElement(k.a,{component:"main",className:e.main,maxWidth:"sm"},r.a.createElement(y.a,{variant:"h2",component:"h1",gutterBottom:!0},"S",r.a.createElement("sup",null,"2"),"R",r.a.createElement("sup",null,"2")," PROJECT"),r.a.createElement(y.a,{variant:"h5",component:"h2",gutterBottom:!0},"A simple App for voice recording and speech recognition analysis."),r.a.createElement(y.a,{variant:"body1"},"What do you want to do now."),r.a.createElement(Q,null)),r.a.createElement("footer",{className:e.footer},r.a.createElement(k.a,{maxWidth:"sm"},r.a.createElement(y.a,{variant:"body1"},"Customization"),r.a.createElement(ee,null))))}var ae=a(25),ne=a.n(ae),re=Object(w.a)((function(e){return{appBar:{position:"relative"},layout:Object(c.a)({width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(900+2*e.spacing(2)),{width:900,marginLeft:"auto",marginRight:"auto"}),paper:Object(c.a)({marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},e.breakpoints.up(900+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),stepper:{padding:e.spacing(3,0,5)},progress:{margin:e.spacing(2)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)},table:{minWidth:650}}})),oe=a(269),le=a(273),ce=a(272),ie=a(270),se=a(271),ue=a(94),me="/recording",de=function(e){return Object(i.a)({},e,{studentA:e.students[0],studentB:e.students[1]})},pe=function(e){return U.post(me,e)},fe=function(e){return U.get("".concat(me,"/").concat(e)).then((function(e){var t=e.data;return de(t)}))},he=function(){return U.get("".concat(me)).then((function(e){return e.data.map(de)})).catch((function(e){return[{error:e.response.data.message}]}))},ge=function(e,t){return U.put("".concat(me,"/").concat(e),t).then((function(e){var t=e.data;return de(t)}))},Ee=function(e){return U.delete("".concat(me,"/").concat(e))},ve=function(e,t){return U.put("".concat(me,"/").concat(e,"/single"),t).then((function(e){var t=e.data;return de(t)}))},be=function(e,t){return U.put("".concat(me,"/").concat(e,"/singleDelete"),t)},ye=a(119),ke=a.n(ye),we=a(283),Oe=a(8),je=Object(w.a)((function(e){return{root:{},menuButton:{marginRight:e.spacing(2)},search:Object(c.a)({flexGrow:1,position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(Oe.d)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(Oe.d)(e.palette.common.white,.25)},marginRight:0,width:"100%"},e.breakpoints.up("sm"),{marginRight:e.spacing(1),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(c.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:120,"&:focus":{width:200}})}}));function Ce(){var e=je();return r.a.createElement("div",{className:e.search},r.a.createElement("div",{className:e.searchIcon},r.a.createElement(ke.a,null)),r.a.createElement(we.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}}))}var xe=a(120);var Se=function(){return r.a.createElement(y.a,{variant:"body2",color:"textSecondary",align:"center"},"If you don't wanna be here, ",r.a.createElement(g.a,{color:"inherit",component:C,to:"/"},"Go back")," to the main menu.")},Ne=a(268),Ae=a(128),Re=a.n(Ae),Ie=a(281),Be=a(259),Te=a(257),We=a(258),De=a(256),Pe=a(108),Ue=r.a.forwardRef((function(e,t){return r.a.createElement(Pe.a,Object.assign({direction:"up",ref:t},e))}));function Fe(e){var t=e.open,a=e.message,n=e.handleClose,o=e.handleOk;return r.a.createElement(Ie.a,{open:!!t,TransitionComponent:Ue,keepMounted:!0,onClose:n,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},r.a.createElement(De.a,{id:"alert-dialog-slide-title"},"Delete Recording"),r.a.createElement(Te.a,null,r.a.isValidElement(a)?a:r.a.createElement(We.a,{id:"alert-dialog-slide-description"},a)),r.a.createElement(Be.a,null,r.a.createElement(u.a,{onClick:n,color:"primary"},"Disagree"),r.a.createElement(u.a,{onClick:function(){return o(t)},color:"primary"},"Agree")))}var qe=a(19),_e=a(282),Le=a(267),Je=a(280),He=a(260),ze=function(e){var t=e.arr,a=e.obj,n=e.handle,o=e.student,l=e.stage;return(r.a.createElement(G.a,{row:!0},t.map((function(e,t){var c=!!a[e.key][l];return r.a.createElement(E.a,{item:!0,xs:6,key:t},r.a.createElement(f.a,{control:r.a.createElement(He.a,{checked:c,value:c,onChange:n(e.key,o,l),color:"primary"}),label:e.label}))}))))},Ge=[{key:"confident",label:"Confident",value:!1},{key:"lost",label:"Lost",value:!1},{key:"nervous",label:"Nervous",value:!1},{key:"nothing",label:"I didn't feel anything",value:!1}],Ve=[{key:"startingConversation",label:"Starting the Conversation",value:[!1,!1,!1]},{key:"risk",label:"Take the risk to speak",value:[!1,!1,!1]},{key:"opinion",label:"Say my opinion",value:[!1,!1,!1]},{key:"askClarification",label:"Ask clarification questions",value:[!1,!1,!1]},{key:"provClarification",label:"Provide clarifications",value:[!1,!1,!1]},{key:"askExamples",label:"Ask for examples",value:[!1,!1,!1]},{key:"giveExamples",label:"Give examples",value:[!1,!1,!1]},{key:"understanding",label:"Show understanding",value:[!1,!1,!1]},{key:"eyeContact",label:"Ask for my partner's opinion",value:[!1,!1,!1]},{key:"saySomething",label:"Encourage myself to say something",value:[!1,!1,!1]},{key:"filters",label:"Use fillers",value:[!1,!1,!1]}],Ze=a(276),Me=a(261),Ye=a(2),$e=a(275);function Ke(e){var t=e.children,a=e.value,n=e.index,o=Object(Ye.a)(e,["children","value","index"]);return r.a.createElement(y.a,Object.assign({component:"div",role:"tabpanel",hidden:a!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},o),r.a.createElement($e.a,{p:3},t))}var Qe=a(262),Xe=function(e,t,a){var n=O(),o=r.a.useState(0),l=Object(s.a)(o,2),c=l[0],i=l[1];return r.a.createElement(k.a,{component:"main"},r.a.createElement(d.a,null),r.a.createElement("div",{className:n.paper},r.a.createElement(Me.a,{position:"static",color:"default"},r.a.createElement(Ze.a,{value:c,indicatorColor:"primary",textColor:"primary",variant:"fullWidth",onChange:function(e,t){return i(t)}},t.map((function(e,t){return r.a.createElement(Qe.a,Object.assign({key:t},e,function(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}(t)))})))),a.map((function(t,a){return r.a.createElement(Ke,{value:c,index:a,key:a,style:{width:"100%"}},r.a.createElement(E.a,{container:!0,spacing:3},r.a.createElement(e,t)))}))))},et=function(e){return e.reduce((function(e,t){return e[t.key]=t.value,e}),{})},tt=function(e){var t=e.recording,a=e.fn,n=e.stage,o=t.cognitive,l=t.studentA,u=t.studentB,m=r.a.useState(!1),d=Object(s.a)(m,2),p=d[0],f=d[1],h=r.a.useReducer((function(e,r){var o=r.type,l=r.payload,c=null;switch(o){case 0:c=[Object(i.a)({},e[0],{},l),e[1]];break;case 1:c=[e[0],Object(i.a)({},e[1],{},l)];break;case"fill":c=l,f(!0);break;case"preFill":c=e;break;default:c=e}return a(at(t,c,n)),c}),[et(Ve),et(Ve)]),g=Object(s.a)(h,2),E=g[0],v=g[1];r.a.useEffect((function(){o&&o.length&&!p?v({type:"fill",payload:o}):v({type:"preFill",payload:[]})}),[o,p]);var b=function(e,t){return function(a){v({type:t,payload:Object(c.a)({},e,E[t][e].map((function(e,t){return t===n?!e:e})))})}},y=[{student:0,obj:E[0],handle:b,arr:Ve,stage:n},{student:1,obj:E[1],handle:b,arr:Ve,stage:n}];return Xe(ze,[{label:l},{label:u}],y)},at=function(e,t,a){return Object(i.a)({},e,{},function(e,t){return e.map((function(e){return delete e._id&&e})).map((function(e){return Object.values(e).some((function(e){return e[t]}))})).some((function(e){return!e}))}(t,a)?{hasError:!0,errors:{cognitive:"At least one value should be selected for both students."}}:{hasError:!1,cognitive:t})},nt=/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,rt=/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi,ot={email:function(e){var t;return e?nt.test(e)||(t="Invalid email pattern"):t="Email is required",t},name:function(e){var t;return(!e||e.length<3)&&(t="Name is required"),t},studentA:function(e){var t;return(!e||e.length<3)&&(t="The first student is required"),t},studentB:function(e){var t;return(!e||e.length<3)&&(t="The second student is required"),t},comments:function(e){var t;return e.length>140&&(t="Just a tweet... no more than 140 characters"),t},password:function(e){var t;return(!e||e.length<3)&&(t="Password is required"),t},image:function(e){var t;return rt.test(e)||(t="Invalid Url Pattern"),t},notesTitle:function(e){var t;return e||(t="We need a title for your Notes x"),t},markDown:function(e){var t;return(!e||e.length<140)&&(t="Give me at least a tweet!!"),t}},lt=function(e){function t(){var e,a;Object(N.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(R.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(r)))).state={content:a.props.recording.id?a.props.recording:Zt,errors:{name:a.props.recording.name?void 0:ot.name(),studentA:a.props.recording.studentA?void 0:ot.studentA(),studentB:a.props.recording.studentB?void 0:ot.studentB()}},a.hasErrors=function(){var e=a.state.content;return Object.keys(e).some((function(t){var a=e[t];return ot[t]&&ot[t](a)}))},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value,o=a.state,l=o.content,s=o.errors;a.setState({content:Object(i.a)({},l,Object(c.a)({},n,r)),errors:Object(i.a)({},s,Object(c.a)({},n,ot[n]&&ot[n](r)))},(function(){var e=a.state,t=e.content,n=e.errors;a.hasErrors()?a.props.fn(Object(i.a)({},t,{hasError:!0,errors:n})):a.props.fn(Object(i.a)({},t,{students:[t.studentA,t.studentB]}))}))},a}return Object(B.a)(t,e),Object(A.a)(t,[{key:"componentDidUpdate",value:function(e,t){this.props.recording.id!==e.recording.id&&this.setState({content:this.props.recording,errors:{}})}},{key:"render",value:function(){var e=this.state.content;return r.a.createElement(k.a,{component:"main",maxWidth:"xs"},r.a.createElement("div",null,r.a.createElement(E.a,{container:!0,spacing:2},r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(p.a,{onChange:this.handleChange,value:e.name,error:!!this.state.errors.name,variant:"outlined",fullWidth:!0,id:"name",name:"name",label:"Recording Name",autoComplete:"fname"})),r.a.createElement(E.a,{item:!0,xs:12,sm:6},r.a.createElement(p.a,{onChange:this.handleChange,value:e.studentA,error:!!this.state.errors.studentA,autoComplete:"fstudent",name:"studentA",variant:"outlined",required:!0,fullWidth:!0,id:"studentA",label:"First Student",autoFocus:!0})),r.a.createElement(E.a,{item:!0,xs:12,sm:6},r.a.createElement(p.a,{onChange:this.handleChange,value:e.studentB,error:!!this.state.errors.studentB,variant:"outlined",required:!0,fullWidth:!0,id:"studentB",label:"Second Student",name:"studentB",autoComplete:"sstudent"})),r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(p.a,{onChange:this.handleChange,value:e.comments,variant:"outlined",fullWidth:!0,id:"comments",label:"Some extra comments",name:"comments",rows:"4",multiline:!0,autoComplete:"fcomments"})))))}}]),t}(r.a.Component),ct=Object(w.a)((function(e){return{card:{display:"flex"},details:{display:"flex",flexDirection:"column"},content:{flex:"1 0 auto"},cover:{backgroundColor:"#1565c0",width:160,display:"flex",justifyContent:"flex-end",flexDirection:"column"},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1)},playIcon:{height:38,width:38},saveIcon:{margin:"auto",color:"#fff"}}})),it=a(129),st=a(124),ut=a.n(st),mt=a(263),dt=a(194),pt=a(122),ft=a.n(pt),ht=a(123),gt=a.n(ht),Et=a(125),vt=a.n(Et),bt=a(81),yt=a.n(bt),kt=a(121),wt=a.n(kt);function Ot(e){var t=e.handleSave,a=ct(),n=r.a.useState(!1),o=Object(s.a)(n,2),l=o[0],c=o[1],i=r.a.useState(!1),u=Object(s.a)(i,2),m=u[0],d=u[1],p=r.a.useState(new Blob),f=Object(s.a)(p,2),h=f[0],g=f[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:a.details},r.a.createElement(mt.a,{className:a.content},r.a.createElement(y.a,{component:"h5",variant:"h5"},"Track # 1")),r.a.createElement("div",{className:a.controls},r.a.createElement(dt.a,{onClick:function(){return c(!l)},"aria-label":"play/pause"},l?r.a.createElement(ft.a,{className:a.playIcon}):r.a.createElement(wt.a,{className:a.playIcon})),r.a.createElement(dt.a,{"aria-label":"previous",onClick:function(){new Audio(h.blobURL).play()},disabled:!h.blobURL},r.a.createElement(gt.a,{className:a.playIcon})))),h.blobURL?r.a.createElement("div",{className:a.cover},r.a.createElement("div",{className:a.saveIcon},r.a.createElement(dt.a,{onClick:function(){var e;return ne.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return d(!0),a.next=3,ne.a.awrap(t(h));case 3:e=a.sent,console.log(e),d(!1);case 6:case"end":return a.stop()}}))},"aria-label":"previous"},m?r.a.createElement(L.a,{className:a.progress}):r.a.createElement(vt.a,{className:a.saveIcon})),r.a.createElement(dt.a,{onClick:function(){return g(new Blob)},"aria-label":"previous"},r.a.createElement(yt.a,null)))):r.a.createElement(it.a,{className:a.cover,record:l,onStop:g,strokeColor:"#ffffff",backgroundColor:ut.a[800]}))}a(177);var jt=a(126),Ct=a.n(jt),xt=function(e,t,a){var n=new FileReader;return n.readAsDataURL(a),new Promise((function(a,r){n.onerror=function(){n.abort(),r(new DOMException("Problem parsing file"))},n.onload=function(){var o;return ne.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:o=n.result.split(",")[1],ve(e,{audioName:t,audio:o}).then((function(e){a(e)}),(function(e){console.error("Invalid status saving audio message: "+e.status),r(e)}));case 3:case"end":return l.stop()}}))}}))},St=a(127),Nt=a(264);function At(e){var t=e.recording,a=e.fn,o=t.id,l=t.audioId,c=r.a.useRef(t);Object(n.useEffect)((function(){c.current=t}));return Object(n.useEffect)((function(){!c.current.audioId&&a(Object(i.a)({},c.current,{hasError:!0,errors:{x:"We need an audio recording"}}))}),[a]),r.a.createElement(Rt,{newAudio:function(e){var t,n;return ne.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t=Object(St.v4)(),r.prev=1,r.next=4,ne.a.awrap(xt(o,t,e));case 4:return n=r.sent,a(Object(i.a)({},n,{hasError:!1,errors:{}})),r.abrupt("return",!0);case 9:return r.prev=9,r.t0=r.catch(1),console.log(r.t0),r.abrupt("return",!1);case 13:case"end":return r.stop()}}),null,null,[[1,9]])},deleteAudio:function(e){return ne.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:be(o,{audioName:e}).then(a(Object(i.a)({},t,{audioId:"",hasError:!0,errors:{x:"We need an audio recording"}})),(function(e){console.error(e)}));case 1:case"end":return n.stop()}}))},audio:l})}var Rt=function(e){var t=e.newAudio,a=e.deleteAudio,n=e.audio;return r.a.createElement(k.a,{component:"main"},r.a.createElement(d.a,null),r.a.createElement(Nt.a,{style:{display:"flex",height:"100%"}},r.a.createElement(Ot,{handleSave:function(e){var a=e.blob;return t(a)}}),r.a.createElement(It,{onDelete:function(){return a(n)},audio:n})))},It=function(e){var t=e.audio,a=e.onDelete;return!!t&&r.a.createElement("div",{style:{width:"100%",alignSelf:"center",overflow:"scroll"}},r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(Ct.a,{src:"".concat("http://localhost:3001","/messages/").concat(t)}),a&&r.a.createElement(dt.a,{style:{margin:".5em 0"},onClick:a,"aria-label":"delete audio"},r.a.createElement(yt.a,null))))},Bt=function(e){return r.a.createElement(E.a,{container:!0,spacing:2},r.a.createElement(E.a,{item:!0,xs:12,sm:6},r.a.createElement("h3",null,e.questions.feel),r.a.createElement(Tt,e.feel)),r.a.createElement(E.a,{item:!0,xs:12,sm:6},r.a.createElement("h3",null,e.questions.help),r.a.createElement(G.a,{row:!0},r.a.createElement(z.a,{name:e.feel.student,value:e.help.value,onChange:function(t){return e.help.handle(t,e.feel.student,"help")}},r.a.createElement(f.a,{value:"yes",control:r.a.createElement(H.a,null),label:"Yes, they did"}),r.a.createElement(f.a,{value:"no",control:r.a.createElement(H.a,null),label:"No, they didn't"})))))},Tt=function(e){var t=e.arr,a=e.value,n=e.handle,o=e.student;return r.a.createElement(G.a,{row:!0},r.a.createElement(z.a,{name:o,value:a,onChange:function(e){return n(e,o,"feel")}},t.map((function(e,t){return r.a.createElement(f.a,{key:t,value:e.key,control:r.a.createElement(H.a,null),label:e.label})}))))},Wt=function(e){var t=e.recording,a=e.fn,n=t.socioAffective,o=t.studentA,l=t.studentB,u=r.a.useState(!1),m=Object(s.a)(u,2),d=m[0],p=m[1],f=r.a.useReducer((function(e,n){var r=n.type,o=n.payload,l=null;switch(r){case"A":l=[Object(i.a)({},e[0],{},o),e[1]];break;case"B":l=[e[0],Object(i.a)({},e[1],{},o)];break;case"fill":l=o,p(!0);break;default:l=e}return a(Object(i.a)({},t,{socioAffective:l})),l}),[{feel:"",help:void 0},{feel:"",help:void 0}]),h=Object(s.a)(f,2),g=h[0],E=h[1];r.a.useEffect((function(){n&&n.length&&!d&&E({type:"fill",payload:n})}),[n,d]);var v=function(e,t,a){var n=e.target.value;E({type:t,payload:"feel"===a?Object(c.a)({},a,n):Object(c.a)({},a,"yes"===n)})},b={feel:"How did you feel when using strategies?",help:"Did they help you to talk to your partner?"},y=t.students.map((function(e,t){return{questions:b,feel:{arr:Ge,student:t?"B":"A",value:g[t].feel,handle:v},help:{value:"undefined"!==typeof g[t].help&&(g[t].help?"yes":"no"),handle:v}}}));return Xe(Bt,[{label:o},{label:l}],y)};var Dt=function(e,t,a){switch(e){case 0:return r.a.createElement(lt,{fn:t,recording:a});case 1:return r.a.createElement(tt,{stage:0,fn:t,recording:a});case 2:return r.a.createElement(At,{fn:t,recording:a});case 3:return r.a.createElement(tt,{stage:1,fn:t,recording:a});case 4:return a.students&&r.a.createElement(Wt,{fn:t,recording:a});case 5:return r.a.createElement(tt,{stage:2,fn:t,recording:a});default:throw new Error("Unknown step")}},Pt=function(e){var t=e.step,a=e.classes,n=e.back,o=e.next,l=e.steps,c=e.blocked;return r.a.createElement("div",{className:a.buttons},0!==t&&r.a.createElement(u.a,{onClick:n,className:a.button},"Back"),r.a.createElement(u.a,{disabled:c,variant:"contained",color:"primary",onClick:o,className:a.button},t===l.length-1?"Resume":"Next"))};var Ut,Ft=a(249),qt=a(265),_t=a(266),Lt=(Ut=Ve,function(e,t){return function(a){return Object.keys(e[t]).filter((function(a){return Array.isArray(e[t][a])})).filter((function(n){return e[t][n][a]})).map((function(e){return Ut.filter((function(t){return t.key===e})).map((function(e){return e.label}))}))}}),Jt=function(e){var t=e.data,a=t.studentA,n=t.studentB,o=t.name,l=[{label:a},{label:n}],c=Gt(t);return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{variant:"h5",gutterBottom:!0},"Thank you for your participation in ".concat(o,".")),r.a.createElement(y.a,{variant:"subtitle1"},"Here you will see all your inputs and have a discussion with your teacher and partner"),Xe(Ht,l,c))},Ht=function(e){var t=e.before_talking,a=e.talking,n=e.help,o=e.after_talking,l=e.socio_affective,c=e.future;return r.a.createElement(k.a,null,r.a.createElement(E.a,{container:!0},r.a.createElement(zt,{data:t}),r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement("h3",{style:{marginBottom:0}},a.label),r.a.createElement(It,{audio:a.content})),r.a.createElement(zt,{data:o}),r.a.createElement(zt,{data:l}),r.a.createElement(zt,{data:n}),r.a.createElement(zt,{data:c})))},zt=function(e){var t=e.data,a=t.label,n=t.content;return r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement("h3",{style:{marginBottom:0}},a),r.a.createElement(Ft.a,{style:{paddingTop:0},dense:!0},n.map((function(e,t){return r.a.createElement(qt.a,{key:t},r.a.createElement(_t.a,{primary:e}))}))))},Gt=function(e){return e.students.map((function(t,a){var n=Lt(e.cognitive,a),r=e.socioAffective[a].feel;return{before_talking:{label:"The strategies you chose before talking \ud83e\uddd0",content:n(0)},talking:{label:"Let's play your recording \ud83c\udfb6",content:e.audioId},after_talking:{label:"The strategies you really applied",content:n(1)},socio_affective:{label:"How did you feel when using strategies?",content:[Ge.find((function(e){return e.key===r})).label]},help:{label:"Did they help you to talk to your partner?",content:e.socioAffective[0].help?["Yes, they did"]:["No, they didn't"]},future:{label:"What is the plan for the next time?",content:n(2)}}}))},Vt=a(93),Zt={id:"",name:"",comments:"",studentA:"",studentB:""},Mt=["Set-Up","Before talking","Talking","After talking","How about you?","Future Recordings"];function Yt(e){var t=re(),a=e.match.params.id,n=r.a.useState(0),o=Object(s.a)(n,2),l=o[0],c=o[1],u=r.a.useState(!1),m=Object(s.a)(u,2),p=m[0],f=m[1],h=r.a.useState({}),g=Object(s.a)(h,2),E=g[0],v=g[1],b=r.a.useState(Mt),k=Object(s.a)(b,2),w=k[0],O=k[1],j=r.a.useState(!1),C=Object(s.a)(j,2),x=C[0],S=C[1],N=Object(Vt.useSnackbar)().enqueueSnackbar,A=function(e){return N(e,{variant:"warning"})};r.a.useEffect((function(){a?(S(!0),fe(a).then((function(e){O([e.name].concat(Object(qe.a)(Mt.slice(1,Mt.length)))),v(e),f(!0),S(!1),e.complete&&c(w.length)}))):(v(Zt),O(Mt),f(!1))}),[a,w.length]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null),r.a.createElement("main",{className:t.layout},r.a.createElement(ue.a,{className:t.paper},r.a.createElement(y.a,{component:"h1",variant:"h4",align:"center"},w[l]),r.a.createElement(_e.a,{activeStep:l,className:t.stepper},w.map((function(e){return r.a.createElement(Le.a,{key:e},r.a.createElement(Je.a,null,e))}))),r.a.createElement(r.a.Fragment,null,l===w.length?r.a.createElement(Jt,{data:E}):r.a.createElement(r.a.Fragment,null,x?r.a.createElement(Ne.a,null):Dt(l,v,E),r.a.createElement(Pt,{steps:w,step:l,classes:t,back:function(){N("Okey, we won\xb4t save that...",{autoHideDuration:1e3}),v(Object(i.a)({},E,{hasError:!1,errors:{}})),c(l-1)},next:function(){if(E.hasError)Object.values(E.errors).forEach((function(e){return e&&A(e)}));else if(N("Saving...",{variant:"success",autoHideDuration:800}),0!==l||p){if(p){var t=l+1<w.length?Object(i.a)({},E):Object(i.a)({},E,{complete:!0});ge(a,t).then((function(e){O([e.name].concat(Object(qe.a)(Mt.slice(1,Mt.length)))),c(l+1)}),(function(e){A(e.response.data.message)}))}}else pe(E).then((function(t){var a=t.data;f(!0),v(a),e.history.push("/record/".concat(a.id)),c(l+1)}),(function(e){return A(e.response.data.message)}))}})))),a&&l<1&&r.a.createElement($t,null),r.a.createElement(Se,null)))}function $t(){return r.a.createElement(y.a,{variant:"body2",color:"textSecondary",align:"center"},"This is not what you are looking for?, ",r.a.createElement(g.a,{color:"inherit",component:C,to:"/new-record"},"Click here"),", and Go to create a new recording.")}function Kt(e){return r.a.createElement(Vt.SnackbarProvider,{maxSnack:3},r.a.createElement(Yt,e))}function Qt(){var e=re(),t=r.a.useState([]),a=Object(s.a)(t,2),n=a[0],o=a[1],l=r.a.useState(!1),c=Object(s.a)(l,2),i=c[0],u=c[1],m=r.a.useState("This action can not be undone."),p=Object(s.a)(m,2),f=p[0],h=p[1],E=function(){var e;return ne.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ne.a.awrap(he());case 2:e=t.sent,o(e);case 4:case"end":return t.stop()}}))},v=r.a.useState(!1),b=Object(s.a)(v,2),k=b[0],w=b[1];return r.a.useEffect((function(){E()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null),r.a.createElement("main",{className:e.layout},r.a.createElement(ue.a,{className:e.paper},r.a.createElement(y.a,{component:"h1",variant:"h4",align:"center"},"Recordings"),r.a.createElement(Ce,null),r.a.createElement(oe.a,{className:e.table},r.a.createElement(ie.a,null,r.a.createElement(se.a,null,r.a.createElement(ce.a,null,"Name"),r.a.createElement(ce.a,{align:"right"},"student\xa0A"),r.a.createElement(ce.a,{align:"right"},"student\xa0B"),r.a.createElement(ce.a,{align:"right"},"Date"),r.a.createElement(ce.a,{align:"right"},"Delete"))),r.a.createElement(le.a,null,n.length?n.map((function(e,t){return r.a.createElement(se.a,{key:t},e.error?r.a.createElement(ce.a,{scope:"row",component:"th",colSpan:5},e.error):r.a.createElement(r.a.Fragment,null,r.a.createElement(ce.a,{scope:"row",component:"th"},r.a.createElement(g.a,{color:"inherit",component:C,to:"/record/".concat(e.id,"/checkout")},Object(xe.upperFirst)(e.name))),r.a.createElement(ce.a,{align:"right"},e.studentA),r.a.createElement(ce.a,{align:"right"},e.studentB),r.a.createElement(ce.a,{align:"right"},e.date.split("T")[0]),r.a.createElement(ce.a,{align:"right"},r.a.createElement(Re.a,{onClick:function(){return w(e.id)}}))))})):r.a.createElement(se.a,null,r.a.createElement(ce.a,{colSpan:5},r.a.createElement(Ne.a,null)))))),r.a.createElement($t,null),r.a.createElement(Se,null)),r.a.createElement(Fe,{open:k,handleClose:function(){return w(!1)},handleOk:function(e){return ne.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:u(!0),Ee(e).then((function(){E(),u(!1),w(!1)}),(function(e){u(!1),h("Ups, we have an error trying to delete the file. Contact with the admin"),console.log(e)}));case 2:case"end":return t.stop()}}))},title:"Are you sure?",message:i?r.a.createElement(Ne.a,null):f}))}var Xt=function(e){var t=e.component,a=Object(Ye.a)(e,["component"]);return r.a.createElement(T.Consumer,null,(function(e){var n=e.isAuthenticated;return r.a.createElement(_.b,Object.assign({render:function(e){return n()?r.a.createElement(t,e):r.a.createElement(_.a,{to:"/sign-in"})}},a))}))},ea=function(e){var t=e.component,a=Object(Ye.a)(e,["component"]);return r.a.createElement(T.Consumer,null,(function(e){var n=e.isAuthenticated;return r.a.createElement(_.b,Object.assign({render:function(e){return n()?r.a.createElement(_.a,{to:"/"}):r.a.createElement(t,e)}},a))}))};var ta=function(){return console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/S2R2-PROJECT",REACT_APP_DEV_API:"http://localhost:3001",REACT_APP_API_URL:"http://localhost:3001"})),r.a.createElement(r.a.Fragment,null,r.a.createElement(_.d,null,r.a.createElement(Xt,{exact:!0,path:"/",component:te}),r.a.createElement(ea,{exact:!0,path:"/sign-in",component:J}),r.a.createElement(ea,{exact:!0,path:"/sign-up",component:V}),r.a.createElement(Xt,{exact:!0,path:"/new-record",component:Kt}),r.a.createElement(Xt,{path:"/record/:id",component:Kt}),r.a.createElement(Xt,{exact:!0,path:"/recordings",component:Qt})))};l.a.render(r.a.createElement(j.a,{basename:"/S2R2-PROJECT"},r.a.createElement(W,null,r.a.createElement(ta,null))),document.getElementById("root"))}},[[148,1,2]]]);
//# sourceMappingURL=main.b0484d23.chunk.js.map