(function(t){function e(e){for(var o,r,a=e[0],c=e[1],l=e[2],d=0,h=[];d<a.length;d++)r=a[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&h.push(s[r][0]),s[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(h.length)h.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,a=1;a<n.length;a++){var c=n[a];0!==s[c]&&(o=!1)}o&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},s={app:0},i=[];function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/hello-english/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1c47":function(t,e,n){"use strict";var o=n("bebf"),s=n.n(o);s.a},"1fe8":function(t,e,n){"use strict";var o=n("4ac7"),s=n.n(o);s.a},2968:function(t,e,n){"use strict";var o=n("d2af"),s=n.n(o);s.a},"2e25":function(t,e,n){"use strict";var o=n("b4d7"),s=n.n(o);s.a},4762:function(t,e,n){},"4ac7":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],r={name:"app"},a=r,c=(n("5c0b"),n("2877")),l=Object(c["a"])(a,s,i,!1,null,null,null),u=l.exports,d=n("8c4f"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"center",attrs:{id:"menu"}},[n("h1",[t._v("Categories")]),t._l(t.wordlists,(function(e){return n("WordlistIcon",{key:e.index,class:t.selected(e)?"selected":"",attrs:{wordlist:e},on:{click:function(n){return t.chooseWordlist(e)}}})})),""!==t.chosenWordlist?n("div",{staticClass:"actions"},[n("button",{staticClass:"words",on:{click:t.openWords}},[t._v("Word Review")]),n("button",{staticClass:"test",on:{click:t.openTest}},[t._v("Mini Test")]),n("button",{staticClass:"game",on:{click:t.openGame}},[t._v("Elimination Game")]),n("button",{staticClass:"edit",on:{click:t.openEdit}},[t._v("Edit")])]):t._e()],2)},w=[],f=(n("b0c0"),n("159b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wordlist",on:{click:function(e){return t.$emit("click")}}},[n("img",{attrs:{src:t.wordlist.img}}),n("p",[t._v(t._s(t.wordlist.name))])])}),p=[],m={props:["wordlist"]},v=m,g=(n("a603"),Object(c["a"])(v,f,p,!1,null,"5d7e775b",null)),_=g.exports,b=n("8aa5"),x=n.n(b),y={components:{WordlistIcon:_},data:function(){return{chosenWordlist:"",wordlists:[]}},mounted:function(){var t=this,e=x.a.firestore();e.collection("wordlists").orderBy("index","asc").get().then((function(e){e.forEach((function(e){t.wordlists.push(e.data())}))})).catch((function(t){window.console.log("Error",t)}))},methods:{openPictureGame:function(){this.$router.push({name:"pgame",params:{themeid:this.chosenWordlist.id}})},openWords:function(){this.$router.push("/words/"+this.chosenWordlist.id)},openTest:function(){this.$router.push("/test/"+this.chosenWordlist.id)},openEdit:function(){this.$router.push("/edit/"+this.chosenWordlist.id)},openGame:function(){this.$router.push("/elimination/"+this.chosenWordlist.id)},chooseWordlist:function(t){window.console.log("clicked"),this.chosenWordlist=t},selected:function(t){return this.chosenWordlist.name===t.name}}},k=y,C=Object(c["a"])(k,h,w,!1,null,null,null),E=C.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"center"},[n("h1",[t._v("Picture Game")]),t._l(t.theme.items,(function(t){return n("PictureBloc",{key:t.name,attrs:{item:t}})}))],2)},W=[],$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("img",{attrs:{src:t.item.img}}),n("h4",[t._v(t._s(t.item.name)),void 0!==t.item.native?n("span",{staticClass:"native"},[t._v(" ["+t._s(t.item.native)+"]")]):t._e()])])},j=[],A={props:["item"]},I=A,q=(n("2968"),Object(c["a"])(I,$,j,!1,null,"b38cf466",null)),P=q.exports,N={props:["theme"],components:{PictureBloc:P}},S=N,M=(n("2e25"),Object(c["a"])(S,O,W,!1,null,"3d87925c",null)),T=M.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"center"},[n("h1",[t._v(t._s(t.wordlist.name))]),t._l(t.wordlist.items,(function(t){return n("PictureBloc",{key:t.name,attrs:{item:t}})}))],2)},B=[],D={props:["wordlistid"],data:function(){return{wordlist:[]}},components:{PictureBloc:P},mounted:function(){var t=this;window.console.log("id: "+this.wordlistid);var e=x.a.firestore();e.collection("wordlist").doc(this.wordlistid).get().then((function(e){e.exists?(window.console.log("Data:"),window.console.log(e.data()),t.wordlist=e.data()):window.console.log("No such document")})).catch((function(t){window.console.log("Error",t)}))}},G=D,F=Object(c["a"])(G,Q,B,!1,null,null,null),z=F.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"center"},[n("h1",[t._v("Test - "+t._s(t.questionIndex+1)+" of "+t._s(t.questions.length)+" ["+t._s(t.score)+"%]")]),n("img",{class:t.status,attrs:{src:t.answer.img}}),t.isCorrect?t._e():n("ul",t._l(t.getAnswers,(function(e){return n("li",{key:e,on:{click:function(n){return t.checkAnswer(e)}}},[t._v(t._s(e))])})),0),t.isNext?n("h3",[t._v(t._s(t.answer.name)+" - "+t._s(t.answer.native))]):t._e(),t.isNext&&!t.isFinished?n("button",{staticClass:"next",on:{click:t.nextQuestion}},[t._v("Next Question >>")]):t._e(),t.isNext&&t.isFinished?n("button",{staticClass:"restart",on:{click:t.startAgain}},[t._v("Start Again")]):t._e()])},K=[],L=(n("a4d3"),n("e01a"),n("d28b"),n("caad"),n("d3b7"),n("e25e"),n("3ca3"),n("ddb0"),{correct:"correct",wrong:"wrong",none:""}),R={props:["wordlistid"],data:function(){return{answer:{},wrongAnswers:[],status:"",questionIndex:0,questions:[],answered:0,answeredCorrect:0}},mounted:function(){window.console.log("id: "+this.wordlistid),this.init()},computed:{getAnswers:function(){return window.console.log("called get answers"),this.wrongAnswers.length>0?this.shuffle([this.answer.name,this.wrongAnswers[0].name,this.wrongAnswers[1].name,this.wrongAnswers[2].name]):[]},isCorrect:function(){return this.status===L.correct},isNext:function(){return this.isCorrect},isFinished:function(){return this.questionIndex+1==this.questions.length},score:function(){return this.answered>0?parseInt(this.answeredCorrect/this.answered*100):0}},methods:{init:function(){var t=this,e=x.a.firestore();e.collection("wordlist").doc(this.wordlistid).get().then((function(e){if(e.exists){window.console.log("Data:"),window.console.log(e.data());var n=!0,o=!1,s=void 0;try{for(var i,r=e.data().items[Symbol.iterator]();!(n=(i=r.next()).done);n=!0){var a=i.value;t.questions.push(a)}}catch(c){o=!0,s=c}finally{try{n||null==r.return||r.return()}finally{if(o)throw s}}t.shuffle(t.questions),t.newQuestion()}else window.console.log("No such document")})).catch((function(t){window.console.log("Error",t)}))},newQuestion:function(){this.answer=this.questions[this.questionIndex];var t=[];this.wrongAnswers=[];for(var e=0;e<3;e++){var n=-1;while(-1==n)n=parseInt(Math.random()*this.questions.length),n===this.questionIndex?n=-1:t.includes(n)&&(n=-1);t.push(n)}for(var o=0,s=t;o<s.length;o++){var i=s[o];this.wrongAnswers.push(this.questions[i])}},startAgain:function(){this.answer={},this.wrongAnswers=[],this.status="",this.questionIndex=0,this.questions=[],this.answered=0,this.answeredCorrect=0,this.init()},shuffle:function(t){var e,n,o=t.length;while(o>0)n=Math.floor(Math.random()*o),o--,e=t[o],t[o]=t[n],t[n]=e;return window.console.log(t),t},checkAnswer:function(t){this.answered++,this.status!==L.correct&&(t==this.answer.name?(this.status=L.correct,this.answeredCorrect++):this.status=L.wrong)},nextQuestion:function(){this.questionIndex++,this.newQuestion(),this.status=L.none}}},V=R,H=Object(c["a"])(V,J,K,!1,null,null,null),U=H.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"center"},[n("h1",[t._v("Edit")]),n("ul",t._l(t.wordlist,(function(e,o){return n("li",{key:e.name},[n("span",{staticClass:"index"},[t._v(t._s(o+1))]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"word.name"}],staticClass:"name",attrs:{type:"text",placeholder:"English"},domProps:{value:e.name},on:{input:function(n){n.target.composing||t.$set(e,"name",n.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.native,expression:"word.native"}],staticClass:"native",attrs:{type:"text",placeholder:"Korean"},domProps:{value:e.native},on:{input:function(n){n.target.composing||t.$set(e,"native",n.target.value)}}}),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.img,expression:"word.img"}],domProps:{value:e.img},on:{input:function(n){n.target.composing||t.$set(e,"img",n.target.value)}}}),n("img",{attrs:{src:e.img}})])})),0),n("button",{on:{click:t.addWord}},[t._v("+")]),n("button",{on:{click:t.saveWords}},[t._v("Save")])])},X=[],Z={props:["wordlistid"],data:function(){return{wordlist:[]}},mounted:function(){var t=this;window.console.log("id: "+this.wordlistid);var e=x.a.firestore();e.collection("wordlist").doc(this.wordlistid).get().then((function(e){e.exists?(window.console.log("Data:"),window.console.log(e.data()),t.wordlist=e.data().items):window.console.log("No such document")})).catch((function(t){window.console.log("Error",t)}))},methods:{addWord:function(){this.wordlist.push({name:"",img:""})},saveWords:function(){var t=x.a.firestore();t.collection("wordlist").doc(this.wordlistid).set({items:this.wordlist})}}},tt=Z,et=(n("1fe8"),Object(c["a"])(tt,Y,X,!1,null,"7d04ca2e",null)),nt=et.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"center"},t._l(t.wordlist.items,(function(e,o){return n("span",{key:e.name,staticClass:"box"},[n("img",{class:[e.eliminated?"eliminated":""],attrs:{src:e.img},on:{click:function(n){return t.clickImage(e)}}}),n("span",{staticClass:"index"},[t._v(t._s(o))])])})),0)},st=[],it={props:["wordlistid"],data:function(){return{wordlist:[]}},mounted:function(){var t=this;window.console.log("id: "+this.wordlistid);var e=x.a.firestore();e.collection("wordlist").doc(this.wordlistid).get().then((function(e){e.exists?(window.console.log("Data:"),window.console.log(e.data()),t.wordlist=e.data()):window.console.log("No such document")})).catch((function(t){window.console.log("Error",t)}))},methods:{clickImage:function(t){t.eliminated?t.eliminated=!t.eliminated:this.$set(t,"eliminated",!0)}}},rt=it,at=(n("1c47"),Object(c["a"])(rt,ot,st,!1,null,"f56b0b9c",null)),ct=at.exports;n("e71f");o["a"].use(d["a"]);var lt=[{path:"/",component:E},{path:"/pgame",name:"pgame",component:T,props:!0},{path:"/words/:wordlistid",name:"words",component:z,props:!0},{path:"/test/:wordlistid",name:"test",component:U,props:!0},{path:"/edit/:wordlistid",name:"edit",component:nt,props:!0},{path:"/elimination/:wordlistid",name:"elimination",component:ct,props:!0}],ut=new d["a"]({routes:lt}),dt={apiKey:"AIzaSyDb9hLfoycHsMVs8t9NVTk4e7ymYhQpFiE",authDomain:"hello-english-c91b2.firebaseapp.com",databaseURL:"https://hello-english-c91b2.firebaseio.com",projectId:"hello-english-c91b2",storageBucket:"hello-english-c91b2.appspot.com",messagingSenderId:"501053539716",appId:"1:501053539716:web:51b2714e20c1add09dc9d1"};x.a.initializeApp(dt),o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(u)},router:ut}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var o=n("9c0c"),s=n.n(o);s.a},"9c0c":function(t,e,n){},a603:function(t,e,n){"use strict";var o=n("4762"),s=n.n(o);s.a},b4d7:function(t,e,n){},bebf:function(t,e,n){},d2af:function(t,e,n){}});
//# sourceMappingURL=app.d5d83730.js.map