(this["webpackJsonpreact-course"]=this["webpackJsonpreact-course"]||[]).push([[0],{104:function(e,a,t){},152:function(e,a,t){},155:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(14),o=t.n(l),s=(t(103),t(104),t(20)),c=t(21),m=t(23),i=t(24),u=t(19),d=t(7),E=function(){return r.a.createElement("div",{className:"col-12"},r.a.createElement("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),r.a.createElement("p",null,"Loading . . ."))},h="https://my-json-server.typicode.com/Neeraj2212/json-server/",f="https://neeraj2212.github.io/json-server/public/",p=t(183),g=t(156),b=t(157),N=t(158),v=t(159),y=t(160),w=t(161),M=t(162),O=t(163),L=t(164),k=t(165),F=t(166),j=t(167),S=t(168),C=t(28),D=t(6),x=function(e){return function(a){return!a||a.length<=e}},A=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={isModalOpen:!1},n.toggleModal=n.toggleModal.bind(Object(u.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n}return Object(c.a)(t,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleSubmit",value:function(e){this.props.postComment(this.props.dishId,e.rating,e.author,e.yourcomment)}},{key:"render",value:function(){var e,a=this;return r.a.createElement("div",null,r.a.createElement(p.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(g.a,{toggle:this.toggleModal},"Submit Comment"),r.a.createElement(b.a,null,r.a.createElement(D.LocalForm,{onSubmit:function(e){a.handleSubmit(e)}},r.a.createElement(N.a,{className:"form-group"},r.a.createElement(v.a,{htmlFor:"rating",sm:12},"Rating"),r.a.createElement(y.a,{sm:12},r.a.createElement(D.Control.select,{model:".rating",id:"rating",name:"rating",className:"form-control"},r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3"),r.a.createElement("option",null,"4"),r.a.createElement("option",null,"5")))),r.a.createElement(N.a,{className:"form-group"},r.a.createElement(v.a,{htmlFor:"author",sm:12},"Your Name"),r.a.createElement(y.a,{sm:12},r.a.createElement(D.Control.text,{id:"author",model:".author",name:"author",placeholder:"Your Name",className:"form-control",validators:{minLength:(e=3,function(a){return a&&a.length>=e}),maxLength:x(15)}}),r.a.createElement(D.Errors,{className:"text-danger",model:".author",show:"touched",messages:{minLength:"Must be greater than 2 numbers",maxLength:"Must be 15 numbers or less"}}))),r.a.createElement(N.a,{className:"form-group"},r.a.createElement(v.a,{htmlFor:"yourcomment",sm:12},"Comment"),r.a.createElement(y.a,{sm:12},r.a.createElement(D.Control.textarea,{id:"yourcomment",model:".yourcomment",name:"yourcomment",className:"form-control",rows:6}))),r.a.createElement(N.a,null,r.a.createElement(y.a,{sm:12},r.a.createElement(w.a,{type:"submit",color:"primary"},"Submit")))))),r.a.createElement(w.a,{outline:!0,color:"dark",onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-pencil  "})," Submit Comment"))}}]),t}(n.Component);function I(e){var a=e.dish;return null!=a?r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement(C.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(M.a,null,r.a.createElement(O.a,{top:!0,src:f+a.image,alt:a.name}),r.a.createElement(L.a,null,r.a.createElement(k.a,null,a.name),r.a.createElement(F.a,null,a.description))))):r.a.createElement("div",null)}function R(e){var a=e.comment,t=e.dishId,n=e.postComment,l=r.a.createElement(C.Stagger,{in:!0},a.map((function(e){return r.a.createElement(C.Fade,{in:!0},r.a.createElement("li",{key:e.id},r.a.createElement("p",null,e.comment),r.a.createElement("p",null,"-- ",e.author,", \xa0",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date))))))})));return r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement("h4",null,"Comments"),r.a.createElement("ul",{className:"list-unstyled"},l),r.a.createElement(A,{dishId:t,postComment:n}))}var T=function(e){if(e.isLoading)return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(E,null)));if(e.errMess)return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.errMess)));if(null!=e.dish){var a=r.a.createElement(I,{dish:e.dish}),t=r.a.createElement(R,{comment:e.comments,postComment:e.postComment,dishId:e.dish.id});return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(j.a,null,r.a.createElement(S.a,null,r.a.createElement(d.b,{to:"/menu"},"Menu")),r.a.createElement(S.a,{active:!0},e.dish.name)),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,e.dish.name),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row "},a,t))}},_=t(169);function P(e){var a=e.dish;e.onClick;return r.a.createElement(d.b,{to:"/menu/".concat(a.id)},r.a.createElement(M.a,{key:a.id},r.a.createElement(O.a,{width:"100%",src:f+a.image,alt:a.name}),r.a.createElement(_.a,null,r.a.createElement(k.a,null,a.name))))}var q=function(e){var a=e.dishes.dishes.map((function(e){return r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement(P,{dish:e}))}));return e.dishes.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(E,null))):e.dishes.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h4",null,e.dishes.errMess)))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(j.a,null,r.a.createElement(S.a,null,r.a.createElement(d.b,{to:"/home"})),r.a.createElement(S.a,{active:!0},"Menu")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Menu"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},a))},H=t(170),G=t(171),U=t(172),W=t(173),Y=t(174),B=t(175),K=t(176),J=t(177),z=t(178),Z=t(179),$=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).toggleNav=n.toggleNav.bind(Object(u.a)(n)),n.state={isNavOpen:!1,isModalOpen:!1},n.toggleModal=n.toggleModal.bind(Object(u.a)(n)),n.handleLogin=n.handleLogin.bind(Object(u.a)(n)),n}return Object(c.a)(t,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("Username: "+this.username.value+" Password: "+this.password.value+" Remember: "+this.remember.checked),e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,{dark:!0,expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement(G.a,{className:"mr-auto",href:"/"},r.a.createElement("img",{src:f+"/images/logo.png",alt:"logo",height:"30",width:"41"})),r.a.createElement(U.a,{onClick:this.toggleNav}),r.a.createElement(W.a,{isOpen:this.state.isNavOpen,navbar:!0},r.a.createElement(Y.a,{navbar:!0},r.a.createElement(B.a,null,r.a.createElement(d.c,{className:"nav-link",to:"/Ristorante-con-Fusion/home"},r.a.createElement("span",{className:"fa fa-home fa-lg"})," Home")),r.a.createElement(B.a,null,r.a.createElement(d.c,{className:"nav-link",to:"/Ristorante-con-Fusion/aboutus"},r.a.createElement("span",{className:"fa fa-info fa-lg"})," About Us")),r.a.createElement(B.a,null,r.a.createElement(d.c,{className:"nav-link",to:"/Ristorante-con-Fusion/menu"},r.a.createElement("span",{className:"fa fa-list fa-lg"})," Menu")),r.a.createElement(B.a,null,r.a.createElement(d.c,{className:"nav-link",to:"/Ristorante-con-Fusion/contactus"},r.a.createElement("span",{className:"fa fa-address-card fa-lg"})," Contact Us"))),r.a.createElement(Y.a,{className:"ml-auto",navbar:!0},r.a.createElement(B.a,null,r.a.createElement(w.a,{outline:!0,color:"light",onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-sign-in fa-lg"})," Login")))))),r.a.createElement(K.a,null,r.a.createElement(p.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(g.a,{toggle:this.toggleModal},"Login"),r.a.createElement(b.a,null,r.a.createElement(J.a,{onSubmit:this.handleLogin},r.a.createElement(z.a,null,r.a.createElement(v.a,{htmlFor:"username"},"Username"),r.a.createElement(Z.a,{type:"text",id:"username",name:"username",innerRef:function(a){return e.username=a}})),r.a.createElement(z.a,null,r.a.createElement(v.a,{htmlFor:"password"},"Password"),r.a.createElement(Z.a,{type:"password",id:"password",name:"password",innerRef:function(a){return e.password=a}})),r.a.createElement(z.a,{check:!0},r.a.createElement(v.a,{check:!0},r.a.createElement(Z.a,{type:"checkbox",name:"remember",innerRef:function(a){return e.remember=a}}),"Remember me")),r.a.createElement(w.a,{type:"submit",value:"submit",color:"primary"},"Login")))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row row-header"},r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement("h1",null,"Ristorante con Fusion"),r.a.createElement("p",null,"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!"))))))}}]),t}(n.Component);var Q=function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},r.a.createElement("h5",null,"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement(d.b,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/aboutus"},"About Us")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/menu"},"Menu")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/contactus"},"Contact Us")))),r.a.createElement("div",{className:"col-7 col-sm-5"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope fa-lg"}),":"," ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},r.a.createElement("i",{className:"fa fa-google-plus"})),r.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},r.a.createElement("i",{className:"fa fa-linkedin"})),r.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},r.a.createElement("i",{className:"fa fa-youtube"})),r.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},r.a.createElement("i",{className:"fa fa-envelope-o"}))))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-auto",style:{marginTop:"50px"}},r.a.createElement("p",null,"\xa9 Copyright 2018 Ristorante Con Fusion")))))},V=t(180),X=t(181);function ee(e){return r.a.createElement(V.a,{tag:"li",key:e.leader.id,className:"m-5"},r.a.createElement(V.a,{left:!0},r.a.createElement(V.a,{object:!0,src:f+e.leader.image,alt:e.leader.name})),r.a.createElement(V.a,{body:!0,className:"ml-5"},r.a.createElement(V.a,{heading:!0},e.leader.name),r.a.createElement(V.a,{children:!0,className:"mb-3"},e.leader.designation),e.leader.description))}var ae=function(e){var a;return a=e.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(E,null))):e.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.errMess))):r.a.createElement(C.Stagger,{in:!0},e.leaders.map((function(e){return r.a.createElement(C.Fade,{in:!0},r.a.createElement(ee,{leader:e}))}))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(j.a,null,r.a.createElement(S.a,null,r.a.createElement(d.b,{to:"/home"},"Home")),r.a.createElement(S.a,{active:!0},"About Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"About Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement("h2",null,"Our History"),r.a.createElement("p",null,"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong. Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."),r.a.createElement("p",null,"The restaurant traces its humble beginnings to"," ",r.a.createElement("em",null,"The Frying Pan"),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.")),r.a.createElement("div",{className:"col-12 col-md-5"},r.a.createElement(M.a,null,r.a.createElement(X.a,{className:"bg-primary text-white"},"Facts At a Glance"),r.a.createElement(L.a,null,r.a.createElement("dl",{className:"row p-1"},r.a.createElement("dt",{className:"col-6"},"Started"),r.a.createElement("dd",{className:"col-6"},"3 Feb. 2013"),r.a.createElement("dt",{className:"col-6"},"Major Stake Holder"),r.a.createElement("dd",{className:"col-6"},"HK Fine Foods Inc."),r.a.createElement("dt",{className:"col-6"},"Last Year's Turnover"),r.a.createElement("dd",{className:"col-6"},"$1,250,375"),r.a.createElement("dt",{className:"col-6"},"Employees"),r.a.createElement("dd",{className:"col-6"},"40"))))),r.a.createElement("div",{className:"col-12"},r.a.createElement(M.a,null,r.a.createElement(L.a,{className:"bg-faded"},r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"mb-0"},"You better cut the pizza in four pieces because I'm not hungry enough to eat six."),r.a.createElement("footer",{className:"blockquote-footer"},"Yogi Berra,",r.a.createElement("cite",{title:"Source Title"},"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"))))))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null,"Corporate Leadership")),r.a.createElement("div",{className:"col-12"},r.a.createElement(V.a,{list:!0},a))))},te=function(e){return e&&e.length},ne=function(e){return function(a){return!a||a.length<=e}},re=function(e){return function(a){return a&&a.length>=e}},le=function(e){return!isNaN(Number(e))},oe=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},se=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n}return Object(c.a)(t,[{key:"handleSubmit",value:function(e){console.log("Current State is: "+JSON.stringify(e)),this.props.resetFeedbackForm(),this.props.postFeedback(e)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(j.a,null,r.a.createElement(S.a,null,r.a.createElement(d.b,{to:"/home"},"Home")),r.a.createElement(S.a,{active:!0},"ContactUs")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"ContactUs"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Location Information")),r.a.createElement("div",{className:"col-12 col-sm-4 offset-sm-1"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope"}),":"," ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-6 offset-sm-1"},r.a.createElement("h5",null,"Map of our Location")),r.a.createElement("div",{className:"col-12 col-sm-11 offset-sm-1"},r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},r.a.createElement("i",{className:"fa fa-phone"})," Call"),r.a.createElement("a",{href:"/",role:"button",className:"btn btn-info"},r.a.createElement("i",{className:"fa fa-skype"})," Skype"),r.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net"},r.a.createElement("i",{className:"fa fa-envelope-o"})," Email")))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Send us your Feedback")),r.a.createElement("div",{className:"col-12 col-md-9"},r.a.createElement(D.Form,{model:"feedback",onSubmit:function(a){return e.handleSubmit(a)}},r.a.createElement(N.a,{className:"form-group"},r.a.createElement(v.a,{htmlFor:"firstname",md:2},"First Name"),r.a.createElement(y.a,{md:10},r.a.createElement(D.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:te,minLength:re(3),maxLength:ne(15)}}),r.a.createElement(D.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(N.a,{className:"form-group"},r.a.createElement(v.a,{htmlFor:"lastname",md:2},"Last Name"),r.a.createElement(y.a,{md:10},r.a.createElement(D.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:te,minLength:re(3),maxLength:ne(15)}}),r.a.createElement(D.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(N.a,{className:"form-group"},r.a.createElement(v.a,{htmlFor:"telnum",md:2},"Contact Tel."),r.a.createElement(y.a,{md:10},r.a.createElement(D.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Tel. Number",className:"form-control",validators:{required:te,minLength:re(3),maxLength:ne(15),isNumber:le}}),r.a.createElement(D.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 numbers",maxLength:"Must be 15 numbers or less",isNumber:"Must be a number"}}))),r.a.createElement(N.a,{className:"form-group"},r.a.createElement(v.a,{htmlFor:"email",md:2},"Email"),r.a.createElement(y.a,{md:10},r.a.createElement(D.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:te,validEmail:oe}}),r.a.createElement(D.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",validEmail:"Invalid Email Address"}}))),r.a.createElement(N.a,{className:"form-group"},r.a.createElement(y.a,{md:{size:6,offset:2}},r.a.createElement("div",{className:"form-check"},r.a.createElement(v.a,{check:!0},r.a.createElement(D.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," ",r.a.createElement("strong",null,"May we contact you?")))),r.a.createElement(y.a,{md:{size:3,offset:1}},r.a.createElement(D.Control.select,{model:".contactType",name:"contactType",className:"form-control"},r.a.createElement("option",null,"Tel."),r.a.createElement("option",null,"Email")))),r.a.createElement(N.a,{className:"form-group"},r.a.createElement(v.a,{htmlFor:"message",md:2},"Your Feedback"),r.a.createElement(y.a,{md:10},r.a.createElement(D.Control.textarea,{model:".message",id:"message",name:"message",rows:"12",className:"form-control"}))),r.a.createElement(N.a,{className:"form-group"},r.a.createElement(y.a,{md:{size:10,offset:2}},r.a.createElement(w.a,{type:"submit",color:"primary"},"Send Feedback")))))))}}]),t}(n.Component),ce=t(182);function me(e){var a=e.item,t=e.isLoading,n=e.errMess;return t?r.a.createElement(E,null):n?r.a.createElement("h4",null,n):r.a.createElement(C.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(M.a,null,r.a.createElement(O.a,{src:f+(null===a||void 0===a?void 0:a.image),alt:null===a||void 0===a?void 0:a.name}),r.a.createElement(L.a,null,r.a.createElement(k.a,null,null===a||void 0===a?void 0:a.name),a.designation?r.a.createElement(ce.a,null,null===a||void 0===a?void 0:a.designation):null,r.a.createElement(F.a,null,null===a||void 0===a?void 0:a.description))))}var ie=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-start"},r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(me,{item:e.dish,isLoading:e.dishesLoading,errMess:e.dishesErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(me,{item:e.promotion,isLoading:e.promoLoading,errMess:e.promoErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(me,{item:e.leader,isLoading:e.leaderLoading,errMess:e.leaderErrMess}))))},ue=t(58),de=t(92),Ee=t(8),he=t(26),fe=function(){return{type:"DISHES_LOADING"}},pe=function(e){return{type:"DISHES_FAILED",payload:e}},ge=function(e){return{type:"ADD_DISHES",payload:e}},be=function(e){return{type:"COMMENTS_FAILED",payload:e}},Ne=function(e){return{type:"ADD_COMMENTS",payload:e}},ve=function(){return{type:"PROMOS_LOADING"}},ye=function(e){return{type:"PROMOS_FAILED",payload:e}},we=function(e){return{type:"ADD_PROMOS",payload:e}},Me=function(){return{type:"LEADER_LOADING"}},Oe=function(e){return{type:"LEADER_FAILED",payload:e}},Le=function(e){return{type:"ADD_LEADER",payload:e}},ke=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchComments(),this.props.fetchPromos(),this.props.fetchLeaders()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement($,null),r.a.createElement(ue.a,null,r.a.createElement(de.a,{key:this.props.location.key,classNames:"page",timeout:300},r.a.createElement(Ee.d,null,r.a.createElement(Ee.b,{path:"/Ristorante-con-Fusion/home",component:function(){return r.a.createElement(ie,{dish:e.props.dishes.dishes.filter((function(e){return e.featured}))[0],dishesLoading:e.props.dishes.isLoading,dishErrMess:e.props.dishes.errMess,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promoLoading:e.props.promotions.isLoading,promoErrMess:e.props.promotions.errMess,leader:e.props.leaders.leaders.filter((function(e){return e.featured}))[0],leaderErrMess:e.props.leaders.errMess,leaderLoading:e.props.leaders.isLoading})}}),r.a.createElement(Ee.b,{exact:!0,path:"/Ristorante-con-Fusion/menu",component:function(){return r.a.createElement(q,{dishes:e.props.dishes})}}),r.a.createElement(Ee.b,{path:"/Ristorante-con-Fusion/menu/:dishId",component:function(a){var t=a.match;return r.a.createElement(T,{dish:e.props.dishes.dishes.filter((function(e){return e.id===parseInt(t.params.dishId,10)}))[0],isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errMess,comments:e.props.comments.comments.filter((function(e){return e.dishId===parseInt(t.params.dishId,10)})),commentsErrMess:e.props.comments.errMess,postComment:e.props.postComment})}}),r.a.createElement(Ee.b,{exact:!0,path:"/Ristorante-con-Fusion/aboutus",component:function(){return r.a.createElement(ae,{leaders:e.props.leaders.leaders,errMess:e.props.leaders.errMess,isLoading:e.props.leaders.isLoading})}}),r.a.createElement(Ee.b,{exact:!0,path:"/Ristorante-con-Fusion/contactus",component:function(){return r.a.createElement(se,{resetFeedbackForm:e.props.resetFeedbackForm,postFeedback:e.props.postFeedback})}}),r.a.createElement(Ee.a,{to:"/Ristorante-con-Fusion/home"})))),r.a.createElement(Q,null))}}]),t}(n.Component),Fe=Object(Ee.g)(Object(he.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}}),(function(e){return{postComment:function(a,t,n,r){return e(function(e,a,t,n){return function(r){var l={dishId:e,rating:a,author:t,comment:n};return l.date=(new Date).toISOString(),fetch(h+"comments",{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return r(function(e){return{type:"ADD_COMMENT",payload:e}}(e))})).catch((function(e){console.log("post comments",e.message),alert("Your comment could not be posted\nError: "+e.message)}))}}(a,t,n,r))},fetchDishes:function(){e((function(e){return e(fe(!0)),fetch(h+"dishes").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(ge(a))})).catch((function(a){return e(pe(a.message))}))}))},resetFeedbackForm:function(){e(D.actions.reset("feedback"))},fetchComments:function(){return e((function(e){return fetch(h+"comments").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(Ne(a))})).catch((function(a){return e(be(a.message))}))}))},fetchPromos:function(){return e((function(e){return e(ve(!0)),fetch(h+"promotions").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(we(a))})).catch((function(a){return e(ye(a.message))}))}))},fetchLeaders:function(){return e((function(e){return e(Me(!0)),fetch(h+"leaders").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(Le(a))})).catch((function(a){return e(Oe(a.message))}))}))},postFeedback:function(a){return e((t=a,function(e){var a={firstname:t.firstname,lastname:t.lastname,telnum:t.telnum,email:t.email,agree:t.agree,contactType:t.contactType,message:t.message};return a.date=(new Date).toISOString(),fetch(h+"feedback",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return alert("Thank for your Feedback : \n"+JSON.stringify(e))})).catch((function(e){console.log("post Feedback",e.message),alert("Your Feedback could not be posted\nError: "+e.message)}))}));var t}}}))(ke)),je=(t(152),t(11)),Se=t(27),Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,dishes:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_DISHES":return Object(je.a)({},e,{isLoading:!1,errMess:null,dishes:a.payload});case"DISHES_LOADING":return Object(je.a)({},e,{isLoading:!0,errMess:null,dishes:[]});case"DISHES_FAILED":return Object(je.a)({},e,{isLoading:!1,errMess:a.payload});default:return e}},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_COMMENTS":return Object(je.a)({},e,{errMess:null,comments:a.payload});case"COMMENTS_FAILED":return Object(je.a)({},e,{errMess:a.payload});case"ADD_COMMENT":var t=a.payload;return Object(je.a)({},e,{comments:e.comments.concat(t)});default:return e}},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promotions:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_PROMOS":return Object(je.a)({},e,{isLoading:!1,errMess:null,promotions:a.payload});case"PROMOS_LOADING":return Object(je.a)({},e,{isLoading:!0,errMess:null,promotions:[]});case"PROMOS_FAILED":return Object(je.a)({},e,{isLoading:!1,errMess:a.payload});default:return e}},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,leaders:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_LEADER":return Object(je.a)({},e,{isLoading:!1,errMess:null,leaders:a.payload});case"LEADER_LOADING":return Object(je.a)({},e,{isLoading:!0,errMess:null,leaders:[]});case"LEADER_FAILED":return Object(je.a)({},e,{isLoading:!1,errMess:a.payload});default:return e}},Ie=t(95),Re=t(96),Te=t.n(Re),_e={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:""},Pe=Object(Se.createStore)(Object(Se.combineReducers)(Object(je.a)({dishes:Ce,comments:De,promotions:xe,leaders:Ae},Object(D.createForms)({feedback:_e}))),Object(Se.applyMiddleware)(Ie.a,Te.a)),qe=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(he.Provider,{store:Pe},r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(Fe,null))))}}]),t}(n.Component);t(153),t(154),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(qe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},98:function(e,a,t){e.exports=t(155)}},[[98,1,2]]]);
//# sourceMappingURL=main.2822abd2.chunk.js.map