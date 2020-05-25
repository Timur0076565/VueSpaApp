(function(t){function e(e){for(var n,a,d=e[0],c=e[1],l=e[2],u=0,p=[];u<d.length;u++)a=d[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);r&&r(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],n=!0,d=1;d<o.length;d++){var c=o[d];0!==i[c]&&(n=!1)}n&&(s.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},i={app:0},s=[];function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/VueSpaApp/";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],c=d.push.bind(d);d.push=e,d=d.slice();for(var l=0;l<d.length;l++)e(d[l]);var r=c;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("85ec"),i=o.n(n);i.a},1182:function(t,e,o){},2318:function(t,e,o){"use strict";var n=o("4360"),i=o.n(n);i.a},"34ba":function(t,e,o){"use strict";var n=o("1182"),i=o.n(n);i.a},4360:function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),i=(o("99af"),o("7db0"),o("c740"),o("c975"),o("a434"),o("5530")),s=o("2f62");n["a"].use(s["a"]);var a=new s["a"].Store({state:{notes:JSON.parse(localStorage.getItem("notes")||"[]")},mutations:{createNote:function(t,e){t.notes.push(e),localStorage.setItem("notes",JSON.stringify(t.notes))},deleteNote:function(t,e){t.notes.splice(t.notes.indexOf(e),1),localStorage.setItem("notes",JSON.stringify(t.notes))},updateNote:function(t,e){var o=e.id,n=e.title,s=e.todos,a=t.notes.concat(),d=a.findIndex((function(t){return t.id===o})),c=a[d];a[d]=Object(i["a"])(Object(i["a"])({},c),{},{title:n,todos:s}),localStorage.setItem("notes",JSON.stringify(t.notes)),console.log(a[d])}},actions:{createNote:function(t,e){var o=t.commit;o("createNote",e)},deleteNote:function(t,e){var o=t.commit;o("deleteNote",e)},updateNote:function(t,e){var o=t.commit;o("updateNote",e)}},getters:{notes:function(t){return t.notes},noteId:function(t){return function(e){return t.notes.find((function(t){return t.id===e}))}}}}),d=o("8c4f"),c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},l=[],r={name:"App"},u=r,p=(o("034f"),o("2877")),v=Object(p["a"])(u,c,l,!1,null,null,null),_=v.exports,f=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{position:"relative"}},[o("NavBarCreate",{attrs:{saveItemNote:t.saveItemNote,noteById:t.noteById}}),o("div",{staticClass:"wrapper"},[(t.noteById,o("div",{directives:[{name:"show",rawName:"v-show",value:t.openAddTitle,expression:"openAddTitle"}],staticClass:"add-todo__overflow"},[o("div",{staticClass:"add-todo__modal"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"add-title__input",attrs:{type:"text",required:"",placeholder:"Add title"},domProps:{value:t.title},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addToTitle()},input:function(e){e.target.composing||(t.title=e.target.value)}}}),o("button",{staticClass:"btn-add-todo__create",on:{click:function(e){return t.addToTitle()}}},[t._v("+")])])])),o("button",{staticClass:"btn-add-todo__chenge",on:{click:function(e){t.openAddTitle=!0}}},[o("h2",[t._v(t._s(t.title))])]),o("div",{staticClass:"line"}),t._l(t.todos,(function(e){return o("div",{key:e.id,staticClass:"todos__items"},[o("div",{staticClass:"todos__item",class:{complete:e.complete}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.complete,expression:"todo.complete"}],staticClass:"todos__input-checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.complete)?t._i(e.complete,null)>-1:e.complete},on:{change:function(o){var n=e.complete,i=o.target,s=!!i.checked;if(Array.isArray(n)){var a=null,d=t._i(n,a);i.checked?d<0&&t.$set(e,"complete",n.concat([a])):d>-1&&t.$set(e,"complete",n.slice(0,d).concat(n.slice(d+1)))}else t.$set(e,"complete",s)}}}),o("p",{staticClass:"todos__text"},[t._v(t._s(t._f("limitedLenTodoCreate")(e.text)))]),e.complete?o("button",{staticClass:"editPrevent"},[t._v("Edit text")]):o("button",{staticClass:"edit",on:{click:function(o){return t.editTodo(e)}}},[t._v("Edit text")]),o("button",{staticClass:"todos__delete",on:{click:function(o){return t.deleteTodo(e)}}},[t._v("x")])])])})),o("div",{staticClass:"add-todo__item"},[o("button",{staticClass:"btn-add-todo",on:{click:function(e){t.openTodo=!0}}},[t._v("+")]),o("h2",{staticClass:"add-todo__title"},[t._v("Add todo")])]),o("div",{directives:[{name:"show",rawName:"v-show",value:t.openTodo,expression:"openTodo"}],staticClass:"add-todo__overflow"},[o("div",{staticClass:"add-todo__modal"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.todoText,expression:"todoText"}],staticClass:"add-todo__input",attrs:{type:"text",required:"",placeholder:"Add todo"},domProps:{value:t.todoText},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo()},input:function(e){e.target.composing||(t.todoText=e.target.value)}}}),o("button",{staticClass:"btn-add-todo__create",on:{click:function(e){return t.addTodo()}}},[t._v("+")])])]),o("div",{directives:[{name:"show",rawName:"v-show",value:t.openEditTodo,expression:"openEditTodo"}],staticClass:"add-todo__overflow"},[o("div",{staticClass:"add-todo__modal"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.todoText,expression:"todoText"}],staticClass:"add-todo__input",attrs:{type:"text",required:"",placeholder:"Edit todo"},domProps:{value:t.todoText},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.AddEditTodo(t.todoText,t.editedTodo)},input:function(e){e.target.composing||(t.todoText=e.target.value)}}}),o("button",{staticClass:"btn-add-todo__create",on:{click:function(e){return t.AddEditTodo(t.todoText,t.editedTodo)}}},[t._v("+")])])]),void 0!=t.noteById?o("div",{staticClass:"note-chenge__btns"},[o("button",{staticClass:"note-chenge__btn-save notes__btn-chenge",on:{click:function(e){return t.ChangeNote()}}},[t._v(" Save ")]),o("button",{staticClass:"note-chenge__btn-cancel notes__btn-chenge",on:{click:function(e){t.openCancelEdit=!0}}},[t._v(" Cancel ")]),o("div",{directives:[{name:"show",rawName:"v-show",value:t.openCancelEdit,expression:"openCancelEdit"}],staticClass:"add-todo__overflow"},[o("div",{staticClass:"add-todo__modal"},[o("h2",[t._v("Cancel editing?")]),o("div",{staticClass:"item-delete__answer"},[o("button",{staticClass:"item-delete__yes",on:{click:function(e){return t.cancelChangeNote()}}},[t._v("Yes")]),o("button",{staticClass:"item-delete__no",on:{click:function(e){t.openCancelEdit=!1}}},[t._v("No")])])])])]):t._e()],2)],1)},m=[],h=(o("fb6a"),o("498a"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"nav-bar"},[o("div",{staticClass:"wrapper"},[o("ul",{staticClass:"nav-bar__ul"},[void 0==t.noteById?o("li",{staticClass:"nav-bar__li"},[o("a",[t._v("Create new notes")])]):o("p",{staticClass:"btn-save"},[t._v(" Change ")]),void 0==t.noteById?o("button",{staticClass:"btn-save notes__btn-chenge",on:{click:function(e){return t.saveItemNote()}}},[t._v(" Add note ")]):t._e()])])])])}),C=[],b={name:"NavBarCreate",props:["saveItemNote","noteById"]},y=b,T=(o("fc63"),Object(p["a"])(y,h,C,!1,null,null,null)),x=T.exports,g={name:"Todo",components:{NavBarCreate:x},props:[],data:function(){return{title:"",todoText:"",todos:[],note:{},openTodo:!1,openEditTodo:!1,openAddTitle:!1,openCancelEdit:!1,editedTodo:null}},computed:{noteById:function(){return this.$store.getters.noteId(+this.$route.params.id)}},filters:{limitedLenTodoCreate:function(t){return t.slice(0,135)}},methods:{saveItemNote:function(){this.note={title:this.title,todos:this.todos,id:Date.now()},this.$store.dispatch("createNote",this.note),this.$router.push("/")},addToTitle:function(){this.title,this.openAddTitle=!1},addTodo:function(){""!=this.todoText&&this.todos.push({text:this.todoText,complete:!1,id:(new Date).valueOf()}),this.todoText="",this.openTodo=!1},deleteTodo:function(t){this.todos.splice(this.todos.indexOf(t),1)},editTodo:function(t){this.openEditTodo=!0,this.todoText=t.text,this.editedTodo=t},AddEditTodo:function(t,e){e.text=t.trim(),e.text||this.deleteTodo(e),this.openEditTodo=!1,this.todoText=""},ChangeNote:function(){this.$store.dispatch("updateNote",{id:this.note.id,title:this.title,todos:this.todos}),this.$router.push("/")},cancelChangeNote:function(){this.$router.push("/")}},mounted:function(){void 0!=this.noteById&&""!=this.noteById&&(this.title=this.noteById.title,this.todos=this.noteById.todos,this.note.id=this.noteById.id),""==this.title&&(this.openAddTitle=!0)}},w=g,k=(o("2318"),Object(p["a"])(w,f,m,!1,null,null,null)),N=k.exports,I=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("NavBar"),o("div",{staticClass:"wrapper"},[t.notes.length?o("div",{staticClass:"container-notes"},t._l(t.notes,(function(e){return o("div",{key:e.id,staticClass:"notes"},[o("div",{staticClass:"notes__item"},[o("div",{staticClass:"notes__content"},[o("h2",[t._v(t._s(e.title))]),o("hr"),t._l(e.todos.slice(0,3),(function(e){return o("div",{key:e.id,staticClass:"notes__todos",class:{completed:e.complete}},[o("p",[t._v(t._s(t._f("limitedLenTodo")(e.text)))])])}))],2),o("router-link",{staticClass:"notes__btn-chenge",attrs:{teg:"button",to:"/create/"+e.id,"active-class":"active"}},[t._v("Change")]),o("button",{staticClass:"notes__btn-delete",on:{click:function(o){return t.openaskDelete(e)}}},[t._v("x")])],1)])})),0):o("h1",[t._v("No notes")]),o("ItemDelete",{directives:[{name:"show",rawName:"v-show",value:t.showDelete,expression:"showDelete"}],attrs:{deleteItem:t.deleteItem,itemId:t.itemId,cancelDelete:t.cancelDelete}})],1)],1)},O=[],E=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"nav-bar"},[o("div",{staticClass:"wrapper"},[o("ul",{staticClass:"nav-bar__ul"},[o("router-link",{staticClass:"nav-bar__li",attrs:{teg:"li",to:"/",exact:"","active-class":"active"}},[o("a",{attrs:{href:"#"}},[t._v("Notes")])]),o("router-link",{staticClass:"nav-bar__li",attrs:{teg:"li",to:"/create","active-class":"active"}},[o("a",{attrs:{href:"#"}},[t._v("Create note")])])],1)])])])},A=[],B={name:"NavBar",props:{}},D=B,$=(o("34ba"),Object(p["a"])(D,E,A,!1,null,null,null)),j=$.exports,S=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"add-todo__overflow item-delete__overflow"},[o("div",{staticClass:"add-todo__modal item-delete__overflow"},[o("h2",[t._v("Delete this note?")]),o("div",{staticClass:"item-delete__answer"},[o("button",{staticClass:"item-delete__yes",on:{click:function(e){return t.deleteItem(t.itemId)}}},[t._v("Yes")]),o("button",{staticClass:"item-delete__no",on:{click:t.cancelDelete}},[t._v("No")])])])])])},P=[],J={name:"ItemDelete",props:["deleteItem","cancelDelete","itemId"]},L=J,M=(o("b0f2"),Object(p["a"])(L,S,P,!1,null,null,null)),q=M.exports,Y={name:"Notes",components:{NavBar:j,ItemDelete:q},data:function(){return{showDelete:!1,itemId:""}},computed:{notes:function(){return this.$store.getters.notes}},filters:{limitedLenTodo:function(t){return t.slice(0,30)}},methods:{deleteItem:function(t){this.$store.dispatch("deleteNote",t),this.showDelete=!1},cancelDelete:function(){this.showDelete=!1},openaskDelete:function(t){this.itemId=t,this.showDelete=!0}},mounted:function(){console.log(this.notes)}},V=Y,z=(o("989b"),Object(p["a"])(V,I,O,!1,null,null,null)),F=z.exports;n["a"].use(d["a"]);var G=[{path:"/create",component:N},{path:"/create/:id",component:N},{path:"/",component:F}],H=new d["a"]({routes:G,mode:"history"});n["a"].config.productionTip=!1,new n["a"]({store:a,router:H,render:function(t){return t(_)},components:{App:_},template:"<App/>"}).$mount("#app")},"85ec":function(t,e,o){},9426:function(t,e,o){},"989b":function(t,e,o){"use strict";var n=o("c33e"),i=o.n(n);i.a},b0f2:function(t,e,o){"use strict";var n=o("de9c"),i=o.n(n);i.a},c33e:function(t,e,o){},de9c:function(t,e,o){},fc63:function(t,e,o){"use strict";var n=o("9426"),i=o.n(n);i.a}});
//# sourceMappingURL=app.3042bccd.js.map