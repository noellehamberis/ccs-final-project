(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{52:function(e,t,n){},55:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(0),i=n.n(s),c=n(23),o=n.n(c),r=n(16),l=(n(52),n(25)),u=n(8),d=n.n(u),m=n(20),h=n(9),j=n(10),b=n(4),p=n(12),O=n(11),g=n(6),x=n(79),v=(n(54),n(55),n(15)),f=n.n(v),y=n.p+"static/media/Wordmark-Color.ff6b0ef2.png",k=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:"hiiii"})}}]),n}(i.a.Component),N=n(24),C=n(18),S=n(28),I=(n(70),function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={body:""},a.handleInput=a.handleInput.bind(Object(b.a)(a)),a.addComment=a.addComment.bind(Object(b.a)(a)),a}return Object(j.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(C.a)({},e.target.name,e.target.value))}},{key:"addComment",value:function(){this.props.addComment({timestamp:this.props.timestamp,parsedStamp:this.props.parsedStamp,body:this.state.body}),this.setState({body:""})}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:this.props.className,children:[Object(a.jsxs)("div",{className:"timestamp",children:[Object(a.jsx)("span",{className:"at",children:"@"}),Object(a.jsx)("span",{className:"parsedStamp",children:this.props.parsedStamp})]}),Object(a.jsx)("textarea",{type:"text",name:"body",value:this.state.body,onChange:this.handleInput,placeholder:"New Comment",maxLength:"200"}),Object(a.jsx)("button",{className:"button ".concat(this.state.body?"":"hidden"),type:"button",onClick:this.addComment,children:"Add Comment"})]})}}]),n}(i.a.Component)),T=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={player:null,isTitle:!1,comments:[],parsedStamp:"0s",timestamp:"0",isOwner:!1},a.getTimestamp=a.getTimestamp.bind(Object(b.a)(a)),a.getIDFomURL=a.getIDFomURL.bind(Object(b.a)(a)),a.handleInput=a.handleInput.bind(Object(b.a)(a)),a.onReady=a.onReady.bind(Object(b.a)(a)),a.seekToTime=a.seekToTime.bind(Object(b.a)(a)),a.addComment=a.addComment.bind(Object(b.a)(a)),a.removeComment=a.removeComment.bind(Object(b.a)(a)),a.edit=a.edit.bind(Object(b.a)(a)),a.updateLink=a.updateLink.bind(Object(b.a)(a)),a.toggleTitle=a.toggleTitle.bind(Object(b.a)(a)),a}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=Object(m.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/links/".concat(this.props.match.params.id,"/"));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState(Object(l.a)({},n)),this.state.username===localStorage.getItem("username")&&this.setState({isOwner:!0});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"updateLink",value:function(){var e=Object(m.a)(d.a.mark((function e(t){var n,a,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),delete(n=Object(l.a)({},this.state)).player,console.log(n),e.next=6,fetch("/api/links/".concat(this.props.match.params.id,"/"),{method:"PATCH",headers:{"X-CSRFToken":f.a.get("csrftoken"),"Content-Type":"application/json"},body:JSON.stringify(JSON.parse(JSON.stringify(n)))});case 6:return a=e.sent,e.next=9,a.json();case 9:s=e.sent,console.log(s),this.setState({isEditing:!this.state.isEditing});case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"toggleTitle",value:function(){this.setState({isTitle:!this.state.isTitle})}},{key:"getTimestamp",value:function(e){var t,n=e.target.getCurrentTime(),a=new Date(1e3*n).toISOString().substr(11,8);n<60?t=a.substr(6,7)+"s":n<600?t=a.substr(4,7):n<3600&&(t=a.substr(3,7)),this.setState({parsedStamp:t,timestamp:n})}},{key:"getIDFomURL",value:function(){var e=this.YouTubeGetID(this.state.youtube_url);this.setState({youtube_ID:e})}},{key:"YouTubeGetID",value:function(e){return void 0!==(e=e.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/))[2]?e[2].split(/[^0-9a-z_-]/i)[0]:e[0]}},{key:"edit",value:function(){this.setState({isEditing:!this.state.isEditing})}},{key:"handleInput",value:function(e){this.setState(Object(C.a)({},e.target.name,e.target.value))}},{key:"onReady",value:function(e){this.setState({player:e.target})}},{key:"seekToTime",value:function(e){this.state.player.seekTo(e)}},{key:"addComment",value:function(e){var t=Object(N.a)(this.state.comments);t.push(e),this.setState({comments:t})}},{key:"removeComment",value:function(e){var t=Object(N.a)(this.state.comments);t.splice(e,1),this.setState({comments:t})}},{key:"render",value:function(){var e=this;return Object(a.jsx)("div",{className:"container-fluid",children:Object(a.jsxs)("div",{className:"link-detail",children:[Object(a.jsxs)("div",{className:"left-side col-12 col-lg-7",children:[Object(a.jsxs)("div",{className:"youtube-container",children:[Object(a.jsx)("div",{className:"iframe-container",children:Object(a.jsx)(S.a,{className:"youtube-player",videoId:this.state.youtube_ID,opts:{width:"100%"},onPause:this.getTimestamp,onReady:this.onReady})}),Object(a.jsxs)("div",{className:"video-title ".concat(this.state.isTitle?"hidden":""),children:[Object(a.jsx)("h2",{children:"".concat(this.state.title)}),Object(a.jsx)("button",{type:"button",className:"".concat(this.state.isOwner?"":"hidden"," button"),onClick:function(){return e.toggleTitle()},children:"Edit"})]})]}),Object(a.jsx)("div",{className:"url-title ".concat(this.state.isOwner?"":"hidden"," ").concat(this.state.isTitle?"":"hidden"),children:Object(a.jsxs)("div",{className:"title-form",children:[Object(a.jsx)("input",{className:"title-input",type:"text",name:"title",onChange:this.handleInput,value:this.state.title,placeholder:"Title",maxlength:"40"}),Object(a.jsx)("input",{className:"url-input",type:"url",name:"youtube_url",onChange:this.handleInput,value:this.state.youtube_url,placeholder:"Youtube URL",maxLength:"100"}),Object(a.jsx)("button",{class:"button",disabled:!this.state.youtube_url,onClick:function(){e.toggleTitle(),e.getIDFomURL()},children:"Update"})]})})]}),Object(a.jsxs)("div",{className:"right-side col-lg-5",children:[this.state.comments.map((function(t,n){return Object(a.jsxs)("div",{className:"display-comment",children:[Object(a.jsxs)("button",{type:"button timestamp-button",className:"button",onClick:function(){return e.seekToTime(t.timestamp)},children:[Object(a.jsxs)("div",{className:"timestamp",children:[Object(a.jsx)("span",{className:"at",children:"@"}),Object(a.jsx)("span",{className:"parsedStamp",children:t.parsedStamp})]}),Object(a.jsx)("span",{className:"body",children:t.body})]}),Object(a.jsx)("button",{className:"".concat(e.state.isOwner?"":"hidden"," x-button"),onClick:function(){return e.removeComment(n)},children:Object(a.jsx)("span",{className:"iconify x-icon","data-icon":"octicon-x","data-inline":"false"})})]},n)})),Object(a.jsxs)("form",{className:"".concat(this.state.isOwner?"":"hidden"),onSubmit:function(t){return e.updateLink(t,e.state)},children:[Object(a.jsx)(I,{className:"comment-form",addComment:this.addComment,timestamp:this.state.timestamp,parsedStamp:this.state.parsedStamp}),Object(a.jsx)("button",{className:"button save",type:"submit",children:"Save"})]})]})]})})}}]),n}(i.a.Component),w=n(78),R=(n(71),n.p+"static/media/luigi.94600d46.jpg"),F=n.p+"static/media/daisy.0947fa6e.jpg",L=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={links:[]},a.deleteMethod=a.deleteMethod.bind(Object(b.a)(a)),a}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=Object(m.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/links/",{method:"GET",headers:{"X-CSRFToken":f.a.get("csrftoken"),"Content-Type":"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log("data",n),this.setState({links:n});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"deleteMethod",value:function(e){fetch("/api/links/".concat(e,"/"),{method:"DELETE",headers:{"X-CSRFToken":f.a.get("csrftoken"),"Content-Type":"application/json"}}).then((function(e){})).catch((function(e){return console.log("ERR",e)})),window.location.reload(!0)}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"list-page",children:[Object(a.jsxs)("div",{className:"carousel-container",children:[Object(a.jsx)("h1",{className:"page-title",children:"Your Notes"}),Object(a.jsxs)(w.a,{className:"carousel",interval:"8000",controls:!1,indicators:!1,children:[Object(a.jsx)(w.a.Item,{children:Object(a.jsx)("img",{className:"d-block",src:R,alt:"luigi"})}),Object(a.jsx)(w.a.Item,{children:Object(a.jsx)("img",{className:"d-block",src:F,alt:"daisy"})})]})]}),Object(a.jsx)("div",{className:"list-container",children:this.state.links.map((function(t,n){return Object(a.jsx)(r.b,{className:"col-12 col-md-4 p-1",to:"/".concat(e.props.username,"/").concat(t.id),children:Object(a.jsxs)("div",{className:"list-item ",children:[Object(a.jsx)("div",{className:"img-container",children:Object(a.jsx)("img",{src:"https://img.youtube.com/vi/".concat(t.youtube_ID,"/0.jpg"),alt:"#"})}),Object(a.jsxs)("div",{className:"info",children:[Object(a.jsx)("h2",{children:t.title}),Object(a.jsx)("h3",{children:t.pub_date.substr(0,10)})]}),Object(a.jsx)("div",{className:"delete",children:Object(a.jsx)("button",{className:"x-button",onClick:function(){return e.deleteMethod(t.id)},children:Object(a.jsx)("span",{className:"iconify x-icon list-x","data-icon":"octicon-x","data-inline":"false"})})})]})},n)}))})]})}}]),n}(i.a.Component),D=(n(75),n.p+"static/media/incin.62964a7f.jpg"),E=n.p+"static/media/darksamus.f3bab206.jpg",_=n.p+"static/media/ken.549e08de.jpg",P=n.p+"static/media/bayo.a518da5c.jpg",U=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={youtube_url:"",title:"",comments:[],isCommenting:!1,isEditing:!0,youtube_ID:"",timestamp:"0",parsedStamp:"0s",commentId:""},a.handleInput=a.handleInput.bind(Object(b.a)(a)),a.addComment=a.addComment.bind(Object(b.a)(a)),a.showForm=a.showForm.bind(Object(b.a)(a)),a.removeComment=a.removeComment.bind(Object(b.a)(a)),a.getTimestamp=a.getTimestamp.bind(Object(b.a)(a)),a.toggleTitle=a.toggleTitle.bind(Object(b.a)(a)),a.seekToTime=a.seekToTime.bind(Object(b.a)(a)),a.onReady=a.onReady.bind(Object(b.a)(a)),a}return Object(j.a)(n,[{key:"getTimestamp",value:function(e){var t,n=e.target.getCurrentTime(),a=new Date(1e3*n).toISOString().substr(11,8);n<60?t=a.substr(6,7)+"s":n<600?t=a.substr(4,7):n<3600&&(t=a.substr(3,7)),this.setState({parsedStamp:t,timestamp:n})}},{key:"YouTubeGetID",value:function(e){return e=e.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/),console.log(e),void 0!==e[2]?e[2].split(/[^0-9a-z_-]/i)[0]:e[0]}},{key:"onReady",value:function(e){this.setState({player:e.target})}},{key:"seekToTime",value:function(e){this.state.player.seekTo(e)}},{key:"toggleTitle",value:function(){this.setState({isEditing:!this.state.isEditing})}},{key:"showForm",value:function(){this.setState({isCommenting:!0}),this.setState({isEditing:!this.state.isEditing});var e=this.YouTubeGetID(this.state.youtube_url);this.setState({youtube_ID:e})}},{key:"addComment",value:function(e){var t=Object(N.a)(this.state.comments);t.push(e),this.setState({comments:t})}},{key:"removeComment",value:function(e){var t=Object(N.a)(this.state.comments);t.splice(e,1),this.setState({comments:t})}},{key:"handleInput",value:function(e){this.setState(Object(C.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e,t=this;return e=null===localStorage.getItem("login")?Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("span",{children:"Login to create a new Link"})}):Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"form",children:[Object(a.jsxs)("div",{className:"left-side col-12 col-lg-7",children:[Object(a.jsxs)("div",{className:"youtube-container ".concat(this.state.isCommenting?"":"hidden"),children:[Object(a.jsx)("div",{className:"iframe-container",children:Object(a.jsx)(S.a,{className:"youtube-player",videoId:this.state.youtube_ID,onPause:this.getTimestamp,onReady:this.onReady,opts:{width:"100%",playsinline:"1"}})}),Object(a.jsxs)("div",{className:"video-title ".concat(this.state.isCommenting?"":"hidden"," ").concat(this.state.isEditing?"hidden":""," "),children:[Object(a.jsx)("h2",{children:"".concat(this.state.title)}),Object(a.jsx)("button",{type:"button",className:"button",onClick:function(){return t.toggleTitle()},children:"Edit"})]})]}),Object(a.jsx)("div",{className:"url-title ".concat(this.state.isEditing?"":"hidden"),children:Object(a.jsxs)("div",{className:"title-form",children:[Object(a.jsx)("input",{className:"title-input col-12",type:"text",name:"title",onChange:this.handleInput,value:this.state.title,placeholder:"Title",maxLength:"40"}),Object(a.jsx)("input",{className:"url-input col",type:"url",name:"youtube_url",onChange:this.handleInput,value:this.state.youtube_url,placeholder:"Youtube URL",maxLength:"100"}),Object(a.jsx)("button",{class:"button",disabled:!this.state.youtube_url,onClick:this.showForm,children:"".concat(this.state.isCommenting?"Update":"Continue")})]})})]}),Object(a.jsxs)("div",{className:"right-side ".concat(this.state.isCommenting?"":"hidden"," col-lg-5"),children:[this.state.comments.map((function(e,n){return Object(a.jsxs)("div",{className:"display-comment",children:[Object(a.jsxs)("button",{type:"button timestamp-button",className:"button",onClick:function(){return t.seekToTime(e.timestamp)},children:[Object(a.jsxs)("div",{className:"timestamp",children:[Object(a.jsx)("span",{className:"at",children:"@"}),Object(a.jsx)("span",{className:"parsedStamp",children:e.parsedStamp})]}),Object(a.jsx)("span",{className:"body",children:e.body})]}),Object(a.jsx)("button",{className:"x-button",onClick:function(){return t.removeComment(n)},children:Object(a.jsx)("span",{className:"iconify x-icon","data-icon":"octicon-x","data-inline":"false"})})]},n)})),Object(a.jsxs)("form",{onSubmit:function(e){return t.props.submitLink(e,t.state)},children:[Object(a.jsx)(I,{className:"comment-form",addComment:this.addComment,timestamp:this.state.timestamp,parsedStamp:this.state.parsedStamp}),Object(a.jsx)("button",{className:"button save",type:"submit",children:"Save"})]})]})]})}),Object(a.jsxs)("div",{className:"linkform container-fluid",children:[Object(a.jsxs)("div",{className:"carousel-container ".concat(this.state.isCommenting?"hidden":""),children:[Object(a.jsx)("h1",{className:"page-title",children:"Create"}),Object(a.jsxs)(w.a,{className:"carousel",interval:"8000",controls:!1,indicators:!1,children:[Object(a.jsx)(w.a.Item,{children:Object(a.jsx)("img",{className:"d-block",src:P,alt:"bayo"})}),Object(a.jsx)(w.a.Item,{children:Object(a.jsx)("img",{className:"d-block",src:D,alt:"incin"})}),Object(a.jsx)(w.a.Item,{children:Object(a.jsx)("img",{className:"d-block",src:E,alt:"dsamus"})}),Object(a.jsx)(w.a.Item,{children:Object(a.jsx)("img",{className:"d-block",src:_,alt:"ken"})})]})]}),Object(a.jsx)("div",{className:"form-container container-fluid;",children:e})]})}}]),n}(i.a.Component),J=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={username:"",password:""},a.handleInput=a.handleInput.bind(Object(b.a)(a)),a}return Object(j.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(C.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this;return Object(a.jsx)("div",{className:"container login",children:Object(a.jsxs)("form",{onSubmit:function(t){return e.props.logIn(t,e.state)},children:[Object(a.jsx)("h2",{children:"Login"}),Object(a.jsx)("label",{htmlFor:"username",children:"Username"}),Object(a.jsx)("input",{type:"text",name:"username",value:this.state.username,onChange:this.handleInput,placeholder:"Username"}),Object(a.jsx)("label",{htmlFor:"password",children:"Password"}),Object(a.jsx)("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleInput,placeholder:"Password"}),Object(a.jsx)("button",{type:"submit",children:"Login"})]})})}}]),n}(i.a.Component),M=Object(g.f)(J),Y=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={username:"",email:"",password1:"",password2:""},a.handleInput=a.handleInput.bind(Object(b.a)(a)),a}return Object(j.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(C.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this;return Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("form",{onSubmit:function(t){return e.props.handleRegister(t,e.state)},children:[Object(a.jsx)("h2",{children:"Register"}),Object(a.jsx)("label",{htmlFor:"username",children:"Username"}),Object(a.jsx)("input",{type:"text",name:"username",value:this.state.username,onChange:this.handleInput,placeholder:"Username"}),Object(a.jsx)("label",{htmlFor:"email",children:"Email"}),Object(a.jsx)("input",{type:"email",name:"email",value:this.state.email,onChange:this.handleInput,placeholder:"Email"}),Object(a.jsx)("label",{htmlFor:"password1",children:"Password"}),Object(a.jsx)("input",{type:"password",name:"password1",value:this.state.password1,onChange:this.handleInput,placeholder:"Password"}),Object(a.jsx)("label",{htmlFor:"password2",children:"Confirm Password"}),Object(a.jsx)("input",{type:"password",name:"password2",value:this.state.password2,onChange:this.handleInput,placeholder:""}),Object(a.jsx)("button",{type:"submit",children:"Register"})]})})}}]),n}(i.a.Component),X=Object(g.f)(Y),z=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={isLoggedIn:!1},a.logIn=a.logIn.bind(Object(b.a)(a)),a.logOut=a.logOut.bind(Object(b.a)(a)),a.handleRegister=a.handleRegister.bind(Object(b.a)(a)),a.submitLink=a.submitLink.bind(Object(b.a)(a)),a}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.setState({username:localStorage.getItem("username")})}},{key:"logOut",value:function(){var e=Object(m.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/accounts/rest-auth/logout/",{method:"POST",headers:{"X-CSRFToken":f.a.get("csrftoken"),"Content-Type":"application/json"},body:JSON.stringify(f.a.get("Authorization"))});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log("Response",n),f.a.remove("Authorization"),localStorage.removeItem("login"),localStorage.removeItem("username"),this.setState({isLoggedIn:!1});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"logIn",value:function(){var e=Object(m.a)(d.a.mark((function e(t,n){var a,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("/accounts/rest-auth/login/",{method:"POST",headers:{"X-CSRFToken":f.a.get("csrftoken"),"Content-Type":"application/json"},body:JSON.stringify(n)});case 3:return a=e.sent,e.next=6,a.json();case 6:s=e.sent,console.log("Response",s),f.a.set("Authorization","".concat(s.key)),localStorage.setItem("login","".concat(s.key)),localStorage.setItem("username","".concat(s.user.username)),this.props.history.push("/");case 12:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"handleRegister",value:function(){var e=Object(m.a)(d.a.mark((function e(t,n){var a,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("/accounts/rest-auth/registration/",{method:"POST",headers:{"X-CSRFToken":f.a.get("csrftoken"),"Content-Type":"application/json"},body:JSON.stringify(n)});case 3:return a=e.sent,e.next=6,a.json();case 6:s=e.sent,console.log("Response",s),f.a.set("Authorization","".concat(s.key)),localStorage.setItem("login",s.key),localStorage.setItem("username","".concat(s.user.username)),this.props.history.push("/"),window.location.reload(!0);case 13:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"submitLink",value:function(){var e=Object(m.a)(d.a.mark((function e(t,n){var a,s,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),delete(a=Object(l.a)({},n)).player,e.next=5,fetch("/api/links/",{method:"POST",headers:{"X-CSRFToken":f.a.get("csrftoken"),"Content-Type":"application/json"},body:JSON.stringify(a)});case 5:return s=e.sent,e.next=8,s.json();case 8:i=e.sent,this.props.history.push("/".concat(this.state.username,"/your-notes")),console.log("Response",i);case 11:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t;return null===localStorage.getItem("login")?(t=Object(a.jsx)(a.Fragment,{}),e=Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(r.b,{to:"/register-form",children:"Register"}),Object(a.jsx)(r.b,{to:"/login-form",children:"Login"})]})):(t=Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(r.b,{to:"/".concat(localStorage.getItem("username"),"/your-notes"),children:"Your Notes"})}),e=Object(a.jsx)(r.b,{onClick:this.logOut,to:"/",children:"Logout"})),Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)("div",{className:"container-fluid nav-container",children:Object(a.jsxs)(x.a,{expand:"md",className:"top-nav",children:[Object(a.jsx)(x.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(a.jsx)(r.b,{to:"/",children:Object(a.jsx)("img",{src:y,alt:"#"})}),Object(a.jsxs)(x.a.Collapse,{className:"collapse",children:[Object(a.jsxs)("div",{className:"main",children:[Object(a.jsx)(r.b,{to:"/create",children:"Create"}),t]}),Object(a.jsx)("div",{className:"user",children:e})]})]})}),Object(a.jsxs)(g.c,{children:[Object(a.jsx)(g.a,{path:"/register-form",children:Object(a.jsx)(X,{handleRegister:this.handleRegister})}),Object(a.jsx)(g.a,{path:"/login-form",children:Object(a.jsx)(M,{logIn:this.logIn})}),Object(a.jsx)(g.a,{path:"/create",children:Object(a.jsx)(U,{submitLink:this.submitLink})}),Object(a.jsx)(g.a,{path:"/".concat(this.state.username,"/your-notes"),children:Object(a.jsx)(L,{username:this.state.username})}),Object(a.jsx)(g.a,{path:"/".concat(this.state.username,"/:id"),exact:!0,component:T}),Object(a.jsx)(g.a,{path:"/notes/:id",exact:!0,component:T}),Object(a.jsx)(g.a,{path:"/",component:k})]})]})}}]),n}(i.a.Component),A=Object(g.f)(z),G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,80)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),i(e),c(e)}))};o.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(r.a,{children:Object(a.jsx)(A,{})})}),document.getElementById("root")),G()}},[[76,1,2]]]);
//# sourceMappingURL=main.ee8152a1.chunk.js.map