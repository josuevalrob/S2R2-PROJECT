(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{141:function(e,a,t){e.exports=t(181)},181:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(11),l=t.n(o),c=t(15),i=t(16),s=t(13),u=t(242),m=t(239),d=t(238),p=t(262),f=t(241),g=t(266),h=t(243),E=t(244),v=t(71),b=t.n(v),y=t(59),k=t(237),j=t(90),w=Object(j.a)(function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{marginTop:e.spacing(2),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}),O=t(37),C=r.a.forwardRef(function(e,a){return r.a.createElement(O.b,Object.assign({innerRef:a},e))}),x=t(115),N=t.n(x),S=t(68),A=t(69),B=t(78),I=t(70),R=t(79),W="current-user",T=r.a.createContext(),q=function(e){function a(){var e,t;Object(S.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(B.a)(this,(e=Object(I.a)(a)).call.apply(e,[this].concat(r)))).state={user:JSON.parse(localStorage.getItem(W)||"{}")},t.handleUserChange=function(e){t.setState({user:e}),e?localStorage.setItem(W,JSON.stringify(e)):localStorage.removeItem(W)},t.isAuthenticated=function(){return!!(t.state.user&&t.state.user.data&&t.state.user.data.email)},t}return Object(R.a)(a,e),Object(A.a)(a,[{key:"render",value:function(){return r.a.createElement(T.Provider,{value:{user:this.state.user,onUserChange:this.handleUserChange,isAuthenticated:this.isAuthenticated}},this.props.children)}}]),a}(n.Component),D=function(e){return function(a){return r.a.createElement(T.Consumer,null,function(t){return r.a.createElement(e,Object.assign({},t,a))})}},F=N.a.create({baseURL:"".concat("https://jeval.herokuapp.com/"),withCredentials:!0});F.interceptors.response.use(function(e){return e},function(e){if(403!==e.response.status&&401!==e.response.status)return Promise.reject(e);localStorage.removeItem(W),window.location.assign("/sign-in")});var U=F,L={register:function(e){return U.post("/signup",e)},authenticate:function(e){return U.post("/signin",e)},logout:function(){return U.post("/logout")}},G=t(45);var P=D(function(e){var a=w(),t=r.a.useState(!1),n=Object(s.a)(t,2),o=n[0],l=n[1],v=r.a.useState({email:"",password:""}),j=Object(s.a)(v,2),O=j[0],x=j[1],N=function(e){return function(a){return x(Object(i.a)({},O,Object(c.a)({},e,a.target.value)))}};return o?r.a.createElement(G.a,{to:"/"}):r.a.createElement(k.a,{component:"main",maxWidth:"xs"},r.a.createElement(d.a,null),r.a.createElement("div",{className:a.paper},r.a.createElement(m.a,{className:a.avatar},r.a.createElement(b.a,null)),r.a.createElement(y.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:a.form,onSubmit:function(a){a.preventDefault(),L.authenticate(O).then(function(a){e.onUserChange(a,l)},function(e){var a=e.message,t=e.errors;console.error(a,t)})}},r.a.createElement(p.a,{onChange:N("email"),value:O.email||"",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"off",autoFocus:!0,type:"email"}),r.a.createElement(p.a,{onChange:N("password"),value:O.password||"",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"password",label:"Password",name:"password",autoComplete:"off",type:"password"}),r.a.createElement(f.a,{control:r.a.createElement(g.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(u.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit},"Sign In"),r.a.createElement(h.a,{to:"/authenticate/google",component:C,color:"secondary"},"Google Sign in"),r.a.createElement(E.a,{container:!0},r.a.createElement(E.a,{item:!0,xs:!0},r.a.createElement(h.a,{href:"#",variant:"body2"},"Forgot password?")),r.a.createElement(E.a,{item:!0},r.a.createElement(h.a,{to:"/sign-up",component:C,variant:"body2"},"Don't have an account? Sign Up"))))))}),J=t(267),z=t(245),H=t(186);var Z=D(function(e){var a=w(),t=r.a.useState(!1),n=Object(s.a)(t,2),o=n[0],l=n[1],g=r.a.useState({email:"",password:"",name:"",lastName:"",rol:"student"}),v=Object(s.a)(g,2),j=v[0],O=v[1],x=function(e){return function(a){return O(Object(i.a)({},j,Object(c.a)({},e,a.target.value)))}};return o?r.a.createElement(G.a,{to:"/"}):r.a.createElement(k.a,{component:"main",maxWidth:"xs"},r.a.createElement(d.a,null),r.a.createElement("div",{className:a.paper},r.a.createElement(m.a,{className:a.avatar},r.a.createElement(b.a,null)),r.a.createElement(y.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement("form",{className:a.form,onSubmit:function(a){a.preventDefault(),L.register(j).then(function(a){e.onUserChange(a),l(!0)},function(e){var a=e.message,t=e.errors;console.error(a,t)})},autoComplete:"off"},r.a.createElement(E.a,{container:!0,spacing:2},r.a.createElement(E.a,{item:!0,xs:12,sm:6},r.a.createElement(p.a,{autoComplete:"off",name:"name",onChange:x("name"),value:j.name||"",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0})),r.a.createElement(E.a,{item:!0,xs:12,sm:6},r.a.createElement(p.a,{onChange:x("lastName"),value:j.lastName||"",variant:"outlined",fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"off"})),r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(p.a,{onChange:x("email"),value:j.email||"",variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"none"})),r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(p.a,{onChange:x("password"),value:j.password||"",variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"password",type:"password",id:"password",autoComplete:"none"})),r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(H.a,{row:!0},r.a.createElement(z.a,{row:!0,name:j.rol,value:j.rol,onChange:x("rol")},r.a.createElement(f.a,{value:"teacher",control:r.a.createElement(J.a,null),label:"Teacher"}),r.a.createElement(f.a,{value:"student",control:r.a.createElement(J.a,null),label:"Student"}))))),r.a.createElement(u.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit},"Sign Up"),r.a.createElement(E.a,{container:!0},r.a.createElement(E.a,{item:!0,xs:!0},r.a.createElement(h.a,{href:"#",variant:"body2",color:"secondary"},"Register with google")),r.a.createElement(E.a,{item:!0},r.a.createElement(h.a,{to:"/sign-in",component:C,variant:"body2"},"Already have an account? Sign In"))))))}),M=t(116),Q=t.n(M),Y=t(117),_=t.n(Y),$=Object(j.a)(function(e){return{button:{margin:e.spacing(1)},leftIcon:{marginRight:e.spacing(1)},rightIcon:{marginLeft:e.spacing(1)},iconSmall:{fontSize:20}}});function K(){var e=$();return r.a.createElement("div",null,r.a.createElement(u.a,{to:"/new-record",component:C,variant:"contained",color:"primary",className:e.button},"New Record",r.a.createElement(Q.a,{className:e.rightIcon})),r.a.createElement(u.a,{to:"/recordings",component:C,variant:"contained",color:"default",className:e.button},"Check Recordins",r.a.createElement(_.a,{className:e.leftIcon})))}var V=Object(j.a)(function(e){return{root:{display:"flex",flexDirection:"column",minHeight:"100vh"},main:{marginTop:e.spacing(8),marginBottom:e.spacing(2)},footer:{padding:e.spacing(2),marginTop:"auto",backgroundColor:"white"}}});var X=D(function(e){var a=e.user,t=e.onUserChange,n=a.data;return r.a.createElement(y.a,{variant:"body2",color:"textSecondary"},"Hello ".concat(n.name,", here you can "),r.a.createElement(h.a,{color:"inherit",to:"/profile/".concat(n.id),component:C},"edit your profile")," or simply  ",r.a.createElement(h.a,{color:"inherit",to:"/",onClick:function(){return t()},component:C},"logout")," from the site")});function ee(){var e=V();return r.a.createElement("div",{className:e.root},r.a.createElement(d.a,null),r.a.createElement(k.a,{component:"main",className:e.main,maxWidth:"sm"},r.a.createElement(y.a,{variant:"h2",component:"h1",gutterBottom:!0},"Jeval"),r.a.createElement(y.a,{variant:"h5",component:"h2",gutterBottom:!0},"A simple App for voice recording and spech recognition analysis."),r.a.createElement(y.a,{variant:"body1"},"What do you want to do now."),r.a.createElement(K,null)),r.a.createElement("footer",{className:e.footer},r.a.createElement(k.a,{maxWidth:"sm"},r.a.createElement(y.a,{variant:"body1"},"Customization"),r.a.createElement(X,null))))}var ae=t(58),te=t.n(ae),ne=t(93),re=Object(j.a)(function(e){return{appBar:{position:"relative"},layout:Object(c.a)({width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(900+2*e.spacing(2)),{width:900,marginLeft:"auto",marginRight:"auto"}),paper:Object(c.a)({marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},e.breakpoints.up(900+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),stepper:{padding:e.spacing(3,0,5)},progress:{margin:e.spacing(2)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)},table:{minWidth:650}}}),oe=t(257),le=t(261),ce=t(260),ie=t(258),se=t(259),ue=t(96),me="/recording",de=function(e){return Object(i.a)({},e,{studentA:e.students[0],studentB:e.students[1]})},pe={create:function(e){return U.post(me,e)},read:function(e){return U.get("".concat(me,"/").concat(e)).then(function(e){var a=e.data;return de(a)})},getData:function(){return U.get("".concat(me)).then(function(e){return e.data.map(de)})},update:function(e,a){return U.put("".concat(me,"/").concat(e),a).then(function(e){var a=e.data;return de(a)})},destroy:function(e){return U.delete("".concat(me,"/").concat(e))}},fe=t(118),ge=t.n(fe),he=t(271),Ee=t(10),ve=Object(j.a)(function(e){return{root:{},menuButton:{marginRight:e.spacing(2)},search:Object(c.a)({flexGrow:1,position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(Ee.d)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(Ee.d)(e.palette.common.white,.25)},marginRight:0,width:"100%"},e.breakpoints.up("sm"),{marginRight:e.spacing(1),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(c.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:120,"&:focus":{width:200}})}});function be(){var e=ve();return r.a.createElement("div",{className:e.search},r.a.createElement("div",{className:e.searchIcon},r.a.createElement(ge.a,null)),r.a.createElement(he.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}}))}var ye=t(119);var ke=function(){return r.a.createElement(y.a,{variant:"body2",color:"textSecondary",align:"center"},"If you don't wanna be here, ",r.a.createElement(h.a,{color:"inherit",component:C,to:"/"},"Click here"),", and Go back to the main menu.")},je=t(256),we=t(127),Oe=t.n(we),Ce=t(269),xe=t(249),Ne=t(247),Se=t(248),Ae=t(246),Be=t(109),Ie=r.a.forwardRef(function(e,a){return r.a.createElement(Be.a,Object.assign({direction:"up",ref:a},e))});function Re(e){var a=e.open,t=e.message,n=e.handleClose,o=e.handleOk;return r.a.createElement(Ce.a,{open:!!a,TransitionComponent:Ie,keepMounted:!0,onClose:n,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},r.a.createElement(Ae.a,{id:"alert-dialog-slide-title"},"Use Google's location service?"),r.a.createElement(Ne.a,null,r.a.createElement(Se.a,{id:"alert-dialog-slide-description"},t)),r.a.createElement(xe.a,null,r.a.createElement(u.a,{onClick:n,color:"primary"},"Disagree"),r.a.createElement(u.a,{onClick:function(){return o(a)},color:"primary"},"Agree")))}var We=t(95),Te=t(270),qe=t(255),De=t(268),Fe=t(250),Ue=function(e){var a=e.arr,t=e.obj,n=e.handle,o=e.student,l=e.stage;return r.a.createElement(H.a,{row:!0},a.map(function(e,a){var c=!!t[e.key][l];return r.a.createElement(E.a,{item:!0,xs:6,key:a},r.a.createElement(f.a,{control:r.a.createElement(Fe.a,{checked:c,value:c,onChange:n(e.key,o,l),color:"primary"}),label:e.label}))}))},Le=[{key:"confident",label:"Confident",value:!1},{key:"lost",label:"Lost",value:!1},{key:"nervous",label:"Nervous",value:!1},{key:"nothing",label:"I didn't feel anything",value:!1}],Ge=[{key:"startingConversation",label:"Starting the Conversation",value:[!1,!1,!1]},{key:"myOpinion",label:"Giving my opinion",value:[!1,!1,!1]},{key:"asking",label:"Asking Questions",value:[!1,!1,!1]},{key:"partnerGesture",label:"Noticing my partners' gesture",value:[!1,!1,!1]},{key:"comments",label:"Making comments",value:[!1,!1,!1]},{key:"listeningPartnerIdeas",label:"Listening to my partner's ideas",value:[!1,!1,!1]},{key:"answering",label:"Answering Questions",value:[!1,!1,!1]},{key:"smiling",label:"Smiling",value:[!1,!1,!1]},{key:"eyeContact",label:"Establishing eye contact",value:[!1,!1,!1]},{key:"bodyLanguage",label:"Addresing body language",value:[!1,!1,!1]}],Pe=t(264),Je=t(251),ze=t(53),He=t(263);function Ze(e){var a=e.children,t=e.value,n=e.index,o=Object(ze.a)(e,["children","value","index"]);return r.a.createElement(y.a,Object.assign({component:"div",role:"tabpanel",hidden:t!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},o),r.a.createElement(He.a,{p:3},a))}var Me=t(252),Qe=function(e,a,t){var n=w(),o=r.a.useState(0),l=Object(s.a)(o,2),c=l[0],i=l[1];return r.a.createElement(k.a,{component:"main"},r.a.createElement(d.a,null),r.a.createElement("div",{className:n.paper},r.a.createElement(Je.a,{position:"static",color:"default"},r.a.createElement(Pe.a,{value:c,indicatorColor:"primary",textColor:"primary",variant:"fullWidth",onChange:function(e,a){return i(a)}},a.map(function(e,a){return r.a.createElement(Me.a,Object.assign({key:a},e,function(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}(a)))}))),t.map(function(a,t){return r.a.createElement(Ze,{value:c,index:t,key:t},r.a.createElement(E.a,{container:!0,spacing:3},r.a.createElement(e,a)))})))},Ye=function(e){return e.reduce(function(e,a){return e[a.key]=a.value,e},{})},_e=function(e){var a=e.recording,t=e.fn,n=e.stage,o=a.cognitive,l=a.studentA,u=a.studentB,m=r.a.useState(!1),d=Object(s.a)(m,2),p=d[0],f=d[1],g=r.a.useReducer(function(e,n){var r=n.type,o=n.payload,l=null;switch(r){case 0:l=[Object(i.a)({},e[0],o),e[1]];break;case 1:l=[e[0],Object(i.a)({},e[1],o)];break;case"fill":l=o,f(!0);break;default:l=e}return t(Object(i.a)({},a,{cognitive:l})),l},[Ye(Ge),Ye(Ge)]),h=Object(s.a)(g,2),E=h[0],v=h[1];r.a.useEffect(function(){o&&o.length&&!p&&v({type:"fill",payload:o})},[o,p]);var b=function(e,a){return function(t){v({type:a,payload:Object(c.a)({},e,E[a][e].map(function(e,a){return a===n?!e:e}))})}},y=[{student:0,obj:E[0],handle:b,arr:Ge,stage:n},{student:1,obj:E[1],handle:b,arr:Ge,stage:n}];return Qe(Ue,[{label:l},{label:u}],y)},$e=/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,Ke=/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*)?/gi,Ve={email:function(e){var a;return e?$e.test(e)||(a="Invalid email pattern"):a="Email is required",a},name:function(e){var a;return(!e||e.length<3)&&(a="Name is required"),a},studentA:function(e){var a;return(!e||e.length<3)&&(a="The first student is required"),a},studentB:function(e){var a;return(!e||e.length<3)&&(a="The second student is required"),a},comments:function(e){var a;return e.length>140&&(a="Just a tweet... no more than 140 characters"),a},password:function(e){var a;return(!e||e.length<3)&&(a="Password is required"),a},image:function(e){var a;return Ke.test(e)||(a="Invalid Url Pattern"),a},notesTitle:function(e){var a;return e||(a="We need a title for your Notes x"),a},markDown:function(e){var a;return(!e||e.length<140)&&(a="Give me at least a tweet!!"),a}},Xe=function(e){function a(){var e,t;Object(S.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(B.a)(this,(e=Object(I.a)(a)).call.apply(e,[this].concat(r)))).state={content:t.props.recording.id?t.props.recording:Sa,errors:{name:t.props.recording.name?void 0:Ve.name(),studentA:t.props.recording.studentA?void 0:Ve.studentA(),studentB:t.props.recording.studentB?void 0:Ve.studentB()}},t.hasErrors=function(){var e=t.state.content;return Object.keys(e).some(function(a){var t=e[a];return Ve[a]&&Ve[a](t)})},t.handleChange=function(e){var a=e.target,n=a.name,r=a.value,o=t.state,l=o.content,s=o.errors;t.setState({content:Object(i.a)({},l,Object(c.a)({},n,r)),errors:Object(i.a)({},s,Object(c.a)({},n,Ve[n]&&Ve[n](r)))},function(){var e=t.state,a=e.content,n=e.errors;t.hasErrors()?t.props.fn(Object(i.a)({},a,{hasError:!0,errors:n})):t.props.fn(Object(i.a)({},a,{students:[a.studentA,a.studentB]}))})},t}return Object(R.a)(a,e),Object(A.a)(a,[{key:"componentDidUpdate",value:function(e,a){this.props.recording.id!==e.recording.id&&this.setState({content:this.props.recording,errors:{}})}},{key:"render",value:function(){var e=this.state.content;return r.a.createElement(k.a,{component:"main",maxWidth:"xs"},r.a.createElement("div",null,r.a.createElement(E.a,{container:!0,spacing:2},r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(p.a,{onChange:this.handleChange,value:e.name,error:!!this.state.errors.name,variant:"outlined",fullWidth:!0,id:"name",name:"name",label:"Recording Name",autoComplete:"fname"})),r.a.createElement(E.a,{item:!0,xs:12,sm:6},r.a.createElement(p.a,{onChange:this.handleChange,value:e.studentA,error:!!this.state.errors.studentA,autoComplete:"fstudent",name:"studentA",variant:"outlined",required:!0,fullWidth:!0,id:"studentA",label:"First Student",autoFocus:!0})),r.a.createElement(E.a,{item:!0,xs:12,sm:6},r.a.createElement(p.a,{onChange:this.handleChange,value:e.studentB,error:!!this.state.errors.studentB,variant:"outlined",required:!0,fullWidth:!0,id:"studentB",label:"Second Student",name:"studentB",autoComplete:"sstudent"})),r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(p.a,{onChange:this.handleChange,value:e.comments,variant:"outlined",fullWidth:!0,id:"comments",label:"Some extra comments",name:"comments",rows:"4",multiline:!0,autoComplete:"fcomments"})))))}}]),a}(r.a.Component),ea=t(128),aa=t(124),ta=t.n(aa),na=t(253),ra=t(254),oa=t(185),la=t(122),ca=t.n(la),ia=t(123),sa=t.n(ia),ua=t(125),ma=t.n(ua),da=t(126),pa=t.n(da),fa=t(121),ga=t.n(fa),ha=t(120),Ea=t.n(ha);function va(e){var a=e.recording,t=(e.fn,a.studentA),n=a.studentB;return Qe(ba,[{label:t},{label:n}],[{student:0},{student:1}])}function ba(e){var a=e.audio,t=ya(),n=r.a.useState(!1),o=Object(s.a)(n,2),l=o[0],c=o[1],i=r.a.useState(void 0),u=Object(s.a)(i,2),m=u[0],d=u[1],p=function(){};return r.a.createElement(na.a,{className:t.card},r.a.createElement("div",{className:t.details},r.a.createElement(ra.a,{className:t.content},r.a.createElement(y.a,{component:"h5",variant:"h5"},"Track # 1"),r.a.createElement(y.a,{variant:"subtitle1",color:"textSecondary"},m)),r.a.createElement("div",{className:t.controls},r.a.createElement(oa.a,{onClick:function(){return c(!l)},"aria-label":"play/pause"},l?r.a.createElement(ca.a,{className:t.playIcon}):r.a.createElement(ga.a,{className:t.playIcon})),r.a.createElement(oa.a,{"aria-label":"previous",onClick:function(){new Audio(m).play()},disabled:!m},r.a.createElement(sa.a,{className:t.playIcon})))),m?r.a.createElement("div",{className:t.cover},r.a.createElement("div",{className:t.saveIcon},r.a.createElement(oa.a,{onClick:p,"aria-label":"previous"},r.a.createElement(ma.a,{className:t.saveIcon})),r.a.createElement(oa.a,{onClick:p,disabled:!a,"aria-label":"previous"},r.a.createElement(pa.a,null))),a&&r.a.createElement(Ea.a,{src:m})):r.a.createElement(ea.a,{className:t.cover,record:l,onStop:function(e){d("url")},strokeColor:"#ffffff",backgroundColor:ta.a[800]}))}var ya=Object(j.a)(function(e){return{card:{display:"flex"},details:{display:"flex",flexDirection:"column"},content:{flex:"1 0 auto"},cover:{backgroundColor:"#1565c0",width:160,display:"flex",justifyContent:"flex-end",flexDirection:"column"},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1)},playIcon:{height:38,width:38},saveIcon:{margin:"auto",color:"#fff"}}}),ka=function(e){return r.a.createElement(E.a,{container:!0,spacing:2},r.a.createElement(E.a,{item:!0,xs:12,sm:6},r.a.createElement("h3",null,e.questions.feel),r.a.createElement(ja,e.feel)),r.a.createElement(E.a,{item:!0,xs:12,sm:6},r.a.createElement("h3",null,e.questions.help),r.a.createElement(H.a,{row:!0},r.a.createElement(z.a,{name:e.feel.student,value:e.help.value?"yes":"no",onChange:function(a){return e.help.handle(a,e.feel.student,"help")}},r.a.createElement(f.a,{value:"yes",control:r.a.createElement(J.a,null),label:"Yes, they did"}),r.a.createElement(f.a,{value:"no",control:r.a.createElement(J.a,null),label:"No, they didn't"})))))},ja=function(e){var a=e.arr,t=e.value,n=e.handle,o=e.student;return r.a.createElement(H.a,{row:!0},r.a.createElement(z.a,{name:o,value:t,onChange:function(e){return n(e,o,"feel")}},a.map(function(e,a){return r.a.createElement(f.a,{key:a,value:e.key,control:r.a.createElement(J.a,null),label:e.label})})))},wa=function(e){var a=e.recording,t=e.fn,n=a.socioAffective,o=a.studentA,l=a.studentB,u=r.a.useState(!1),m=Object(s.a)(u,2),d=m[0],p=m[1],f=r.a.useReducer(function(e,n){var r=n.type,o=n.payload,l=null;switch(r){case"A":l=[Object(i.a)({},e[0],o),e[1]];break;case"B":l=[e[0],Object(i.a)({},e[1],o)];break;case"fill":l=o,p(!0);break;default:l=e}return t(Object(i.a)({},a,{socioAffective:l})),l},[{feel:"",help:void 0},{feel:"",help:!1}]),g=Object(s.a)(f,2),h=g[0],E=g[1];r.a.useEffect(function(){n&&n.length&&!d&&E({type:"fill",payload:n})},[n,d]);var v=function(e,a,t){var n=e.target.value;E({type:a,payload:"feel"===t?Object(c.a)({},t,n):Object(c.a)({},t,"yes"===n)})},b={feel:"How did you feel when using strategies?",help:"Did they help you to talk to your partner?"},y=[{feel:{arr:Le,student:"A",value:h[0].feel,handle:v},questions:b,help:{value:h[0].help,handle:v}},{feel:{arr:Le,student:"B",value:h[1].feel,handle:v},questions:b,help:{value:h[1].help,handle:v}}];return Qe(ka,[{label:o},{label:l}],y)};var Oa=function(e,a,t){switch(e){case 0:return r.a.createElement(Xe,{fn:a,recording:t});case 1:return r.a.createElement(_e,{stage:0,fn:a,recording:t});case 2:return r.a.createElement(va,{fn:a,recording:t});case 3:return r.a.createElement(_e,{stage:1,fn:a,recording:t});case 4:return r.a.createElement(wa,{fn:a,recording:t});case 5:return r.a.createElement(_e,{stage:2,fn:a,recording:t});default:throw new Error("Unknown step")}},Ca=function(e){var a=e.step,t=e.classes,n=e.back,o=e.next,l=e.steps,c=e.blocked;return r.a.createElement("div",{className:t.buttons},0!==a&&r.a.createElement(u.a,{onClick:n,className:t.button},"Back"),r.a.createElement(u.a,{disabled:c,variant:"contained",color:"primary",onClick:o,className:t.button},a===l.length-1?"Resume":"Next"))},xa=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{variant:"h5",gutterBottom:!0},"Thank you for your order."),r.a.createElement(y.a,{variant:"subtitle1"},"Your order number is #2001539. We have emailed your order confirmation, and will send you an update when your order has shipped."))},Na=t(94),Sa={id:"",name:"",comments:"",studentA:"",studentB:""},Aa=["Set-Up","Before talking","Talking","After talking","Socio Affective","Future Recordings"];function Ba(e){var a=re(),t=e.match.params.id,n=r.a.useState(2),o=Object(s.a)(n,2),l=o[0],c=o[1],i=r.a.useState(!1),u=Object(s.a)(i,2),m=u[0],p=u[1],f=r.a.useState({}),g=Object(s.a)(f,2),h=g[0],E=g[1],v=r.a.useState(Aa),b=Object(s.a)(v,2),k=b[0],j=b[1],w=r.a.useState(!1),O=Object(s.a)(w,2),C=O[0],x=O[1],N=Object(Na.useSnackbar)().enqueueSnackbar,S=function(e){return N(e,{variant:"warning"})};r.a.useEffect(function(){t?(x(!0),pe.read(t).then(function(e){j([e.name].concat(Object(We.a)(Aa.slice(1,Aa.length)))),E(e),p(!0),x(!1)})):(E(Sa),j(Aa),p(!1))},[t]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null),r.a.createElement("main",{className:a.layout},r.a.createElement(ue.a,{className:a.paper},r.a.createElement(y.a,{component:"h1",variant:"h4",align:"center"},k[l]),r.a.createElement(Te.a,{activeStep:l,className:a.stepper},k.map(function(e){return r.a.createElement(qe.a,{key:e},r.a.createElement(De.a,null,e))})),r.a.createElement(r.a.Fragment,null,l===k.length?r.a.createElement(xa,null):r.a.createElement(r.a.Fragment,null,C?r.a.createElement(je.a,null):Oa(l,E,h),r.a.createElement(Ca,{steps:k,step:l,classes:a,back:function(){return c(l-1)},next:function(){h.hasError?Object.values(h.errors).forEach(function(e){return e&&S(e)}):0!==l||m?m&&pe.update(t,h).then(function(e){j([e.name].concat(Object(We.a)(Aa.slice(1,Aa.length)))),c(l+1)},function(e){return S(e.response.data.message)}):pe.create(h).then(function(a){var t=a.data;p(!0),E(t),e.history.push("/record/".concat(t.id)),c(l+1)},function(e){return S(e.response.data.message)})}})))),t&&l<1&&r.a.createElement(Ia,null),r.a.createElement(ke,null)))}function Ia(){return r.a.createElement(y.a,{variant:"body2",color:"textSecondary",align:"center"},"This is not what you are looking for?, ",r.a.createElement(h.a,{color:"inherit",component:C,to:"/new-record"},"Click here"),", and Go to create a new recording.")}function Ra(e){return r.a.createElement(Na.SnackbarProvider,{maxSnack:3},r.a.createElement(Ba,e))}function Wa(){var e=re(),a=r.a.useState([]),t=Object(s.a)(a,2),n=t[0],o=t[1],l=function(){var e=Object(ne.a)(te.a.mark(function e(){var a;return te.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pe.getData();case 2:a=e.sent,o(a);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),c=r.a.useState(!1),i=Object(s.a)(c,2),u=i[0],m=i[1],p=function(){var e=Object(ne.a)(te.a.mark(function e(a){return te.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:pe.destroy(a).then(function(){l(),m(!1)},function(e){console.log(e)});case 1:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}();return r.a.useEffect(function(){l()},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null),r.a.createElement("main",{className:e.layout},r.a.createElement(ue.a,{className:e.paper},r.a.createElement(y.a,{component:"h1",variant:"h4",align:"center"},"Recordings"),r.a.createElement(be,null),r.a.createElement(oe.a,{className:e.table},r.a.createElement(ie.a,null,r.a.createElement(se.a,null,r.a.createElement(ce.a,null,"Name"),r.a.createElement(ce.a,{align:"right"},"student\xa0A"),r.a.createElement(ce.a,{align:"right"},"student\xa0B"),r.a.createElement(ce.a,{align:"right"},"Date"),r.a.createElement(ce.a,{align:"right"},"Delete"))),r.a.createElement(le.a,null,n.length?n.map(function(e){return r.a.createElement(se.a,{key:e.name},r.a.createElement(ce.a,{scope:"row",component:"th"},r.a.createElement(h.a,{color:"inherit",component:C,to:"/record/".concat(e.id)},Object(ye.upperFirst)(e.name))),r.a.createElement(ce.a,{align:"right"},e.studentA),r.a.createElement(ce.a,{align:"right"},e.studentB),r.a.createElement(ce.a,{align:"right"},e.date.split("T")[0]),r.a.createElement(ce.a,{align:"right"},r.a.createElement(Oe.a,{onClick:function(){return m(e.id)}})))}):r.a.createElement(se.a,null,r.a.createElement(ce.a,{colSpan:5},r.a.createElement(je.a,null)))))),r.a.createElement(Ia,null),r.a.createElement(ke,null)),r.a.createElement(Re,{open:u,handleClose:function(){return m(!1)},handleOk:p,title:"Are you sure?",message:"This action can not be undone."}))}var Ta=function(e){var a=e.component,t=Object(ze.a)(e,["component"]);return r.a.createElement(T.Consumer,null,function(e){var n=e.isAuthenticated;return r.a.createElement(G.b,Object.assign({render:function(e){return n()?r.a.createElement(a,e):r.a.createElement(G.a,{to:"/sign-in"})}},t))})},qa=function(e){var a=e.component,t=Object(ze.a)(e,["component"]);return r.a.createElement(T.Consumer,null,function(e){var n=e.isAuthenticated;return r.a.createElement(G.b,Object.assign({render:function(e){return n()?r.a.createElement(G.a,{to:"/"}):r.a.createElement(a,e)}},t))})};var Da=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.d,null,r.a.createElement(Ta,{exact:!0,path:"/",component:ee}),r.a.createElement(qa,{exact:!0,path:"/sign-in",component:P}),r.a.createElement(qa,{exact:!0,path:"/sign-up",component:Z}),r.a.createElement(Ta,{exact:!0,path:"/new-record",component:Ra}),r.a.createElement(Ta,{path:"/record/:id",component:Ra}),r.a.createElement(Ta,{exact:!0,path:"/recordings",component:Wa})))};l.a.render(r.a.createElement(O.a,{basename:"/jeval-web"},r.a.createElement(q,null,r.a.createElement(Da,null))),document.getElementById("root"))}},[[141,1,2]]]);
//# sourceMappingURL=main.0eeddaad.chunk.js.map